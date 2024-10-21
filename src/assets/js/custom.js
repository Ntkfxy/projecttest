(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice;
    var sticked = [];
    var windowHeight = $(window).height();

    // Default settings for the sticky elements
    var defaults = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        center: false,
        getWidthFrom: '',
        widthFromWrapper: true,
        responsiveWidth: false,
        zIndex: 'inherit'
    };

    // Function to handle scrolling
    var scroller = function () {
        var scrollTop = $(window).scrollTop();
        var documentHeight = $(document).height();
        var dwh = documentHeight - windowHeight;
        var extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

        // Loop through each sticky element
        sticked.forEach(function (s) {
            var elementTop = s.stickyWrapper.offset().top;
            var etse = elementTop - s.topSpacing - extra;

            s.stickyWrapper.css('height', s.stickyElement.outerHeight());

            if (scrollTop <= etse) {
                if (s.currentTop !== null) {
                    resetStickyElement(s);
                }
            } else {
                adjustStickyElement(s, scrollTop, documentHeight);
            }
        });
    };

    // Function to reset sticky element styles
    function resetStickyElement(s) {
        s.stickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'z-index': ''
        });
        s.stickyElement.parent().removeClass(s.className);
        s.stickyElement.trigger('sticky-end', [s]);
        s.currentTop = null;
    }

    // Function to adjust sticky element styles
    function adjustStickyElement(s, scrollTop, documentHeight) {
        var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop;

        newTop = (newTop < 0) ? newTop + s.topSpacing : s.topSpacing;

        if (s.currentTop !== newTop) {
            setStickyElementStyles(s, newTop);
        }

        // Unstick logic
        checkUnstick(s);
    }

    // Function to set sticky element styles
    function setStickyElementStyles(s, newTop) {
        var newWidth;

        if (s.getWidthFrom) {
            var padding = s.stickyElement.innerWidth() - s.stickyElement.width();
            newWidth = $(s.getWidthFrom).width() - padding || null;
        } else if (s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth == null) {
            newWidth = s.stickyElement.width();
        }

        s.stickyElement.css({
            'width': newWidth,
            'position': 'fixed',
            'top': newTop,
            'z-index': s.zIndex
        });

        s.stickyElement.parent().addClass(s.className);

        if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
        } else {
            s.stickyElement.trigger('sticky-update', [s]);
        }

        s.currentTop = newTop;
    }

    // Check for unstick conditions
    function checkUnstick(s) {
        var stickyWrapperContainer = s.stickyWrapper.parent();
        var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight())
            && (s.stickyElement.offset().top <= s.topSpacing);

        if (unstick) {
            s.stickyElement.css({
                'position': 'absolute',
                'top': '',
                'bottom': 0,
                'z-index': ''
            });
        }
    }

    // Handle window resize
    var resizer = function () {
        windowHeight = $(window).height();
        sticked.forEach(function (s) {
            var newWidth = null;
            if (s.getWidthFrom && s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth != null) {
                s.stickyElement.css('width', newWidth);
            }
        });
    };

    // Methods to initialize and manipulate sticky behavior
    var methods = {
        init: function (options) {
            return this.each(function () {
                var o = $.extend({}, defaults, options);
                var stickyElement = $(this);
                var stickyWrapper = $('<div></div>').addClass(o.wrapperClassName);
                stickyElement.wrapAll(function () {
                    return stickyWrapper;
                });

                o.stickyElement = stickyElement;
                o.stickyWrapper = stickyElement.parent();
                o.currentTop = null;
                sticked.push(o);

                methods.setWrapperHeight(this);
            });
        },
        setWrapperHeight: function (stickyElement) {
            var element = $(stickyElement);
            var stickyWrapper = element.parent();
            stickyWrapper.css('height', element.outerHeight());
        },
        unstick: function () {
            return this.each(function () {
                var that = this;
                var unstickyElement = $(that);

                var removeIdx = sticked.findIndex(function (s) {
                    return s.stickyElement.get(0) === that;
                });

                if (removeIdx !== -1) {
                    sticked.splice(removeIdx, 1);
                    unstickyElement.unwrap();
                    unstickyElement.css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'float': '',
                        'z-index': ''
                    });
                }
            });
        }
    };

    // Add event listeners for scrolling and resizing
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    // jQuery plugin definition
    $.fn.sticky = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };

    // Trigger initial scroll event
    $(function () {
        setTimeout(scroller, 0);
    });
}));
