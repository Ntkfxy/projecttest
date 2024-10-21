import $ from 'jquery';

const bootsnav = {
    initialize() {
        console.log('Bootsnav initialized');
        this.setupScrollAnimation();
        this.activateNavigation();
    },

    setupScrollAnimation() {
        const $body = $('body');
        const getNav = $('.your-nav-selector');

        $(window).on('scroll', function () {
            const $anchor = $(this).find('a[href^="#"]'),
                $section = $($anchor.attr('href')).offset().top,
                $windowWidth = $(window).width(),
                $minusDesktop = getNav.data("minus-value-desktop") || 0,
                $minusMobile = getNav.data("minus-value-mobile") || 0,
                $speed = getNav.data("speed") || 400;

            let $position;

            if ($windowWidth > 992) {
                $position = $section - $minusDesktop;
            } else {
                $position = $section - $minusMobile;
            }

            $('html, body').stop().animate({
                scrollTop: $position
            }, $speed);
        });
    },

    activateNavigation() {
        const $body = $('body');
        const getNav = $('.your-nav-selector');

        const fixSpy = () => {
            const data = $body.data('bs.scrollspy');
            if (data) {
                const offset = getNav.outerHeight();
                data.options.offset = offset;
                $body.data('bs.scrollspy', data);
                $body.scrollspy('refresh');
            }
        };

        let resizeTimer;

        $(window).on('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(fixSpy, 200);
        });

        $(window).on("resize", function () {
            if (typeof bootsnav !== 'undefined') {
                bootsnav.hoverDropdown();
                setTimeout(function () {
                    bootsnav.navbarSticky();
                }, 500);
            } else {
                console.error('bootsnav is not defined. Ensure the bootsnav library is included.');
            }

            $(".navbar-toggle").each(function () {
                $(".fa", this).removeClass("fa-times").addClass("fa-bars");
                $(this).removeClass("fixed");
            });

            $(".navbar-collapse").removeClass("in on bounceIn");
        });
    },
};

$(document).ready(function () {
    bootsnav.initialize();
});

export default bootsnav;
