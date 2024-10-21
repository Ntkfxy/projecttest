<template>
  <footer class="footer-copyright">
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="col-sm-3">
            <div class="single-footer-item">
              <div class="footer-logo">
                <a href="index.html">
                  tour<span>Nest</span>
                </a>
                <p>ตัวแทนการเดินทางที่ดีที่สุด</p>
              </div>
            </div><!-- /.single-footer-item -->
          </div><!-- /.col -->

          <div class="col-sm-3">
            <div class="single-footer-item">
              <h2>ลิงค์</h2>
              <div class="single-footer-txt">
                <p v-for="link in links" :key="link.text">
                  <a :href="link.href">{{ link.text }}</a>
                </p>
              </div><!-- /.single-footer-txt -->
            </div><!-- /.single-footer-item -->
          </div><!-- /.col -->

          <div class="col-sm-3">
            <div class="single-footer-item">
              <h2>จุดหมายที่นิยม</h2>
              <div class="single-footer-txt">
                <p v-for="destination in destinations" :key="destination">
                  <a href="#">{{ destination }}</a>
                </p>
              </div><!-- /.single-footer-txt -->
            </div><!-- /.single-footer-item -->
          </div><!-- /.col -->

          <div class="col-sm-3">
            <div class="single-footer-item text-center">
              <h2 class="text-left">ติดต่อ</h2>
              <div class="single-footer-txt text-left">
                <p>{{ contact.phone }}</p>
                <p class="foot-email"><a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
                <p>{{ contact.address }}</p>
                <p>{{ contact.city }}</p>
              </div><!-- /.single-footer-txt -->
            </div><!-- /.single-footer-item -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.footer-content -->
      <hr />
      <div class="foot-icons">
        <ul class="footer-social-links list-inline list-unstyled">
          <li v-for="social in socialLinks" :key="social.name">
            <a :href="social.link" target="_blank" :class="social.iconClass">
              <i :class="social.icon"></i>
            </a>
          </li>
        </ul>
        <p>&copy; {{ currentYear }} <a href="https://www.themesine.com">NATTHAKAN</a>.</p>
      </div><!-- /.foot-icons -->
      <div id="scroll-Top">
        <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="กลับไปด้านบน" aria-hidden="true"></i>
      </div><!-- /.scroll-Top -->
    </div><!-- /.container -->
  </footer><!-- /.footer-copyright -->
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      links: [
        { href: '#', text: 'หน้าแรก' },
        { href: '#', text: 'จุดหมาย' },
        { href: '#', text: 'แพ็คเกจพิเศษ' },
        { href: '#', text: 'ข้อเสนอพิเศษ' },
        { href: '#', text: 'บล็อก' },
        { href: '#', text: 'ติดต่อ' },
      ],
      destinations: ['เชียงใหม่', 'พัทยา', 'ขอนแก่น', 'ภูเก็ต', 'พังงา'],
      contact: {
        phone: '+66 82 150 5710',
        email: '664259005@webmail.npru.ac.th',
        address: '85 ถนนมาลัยแมน ',
        city: 'อำเภอเมือง จังหวัดนครปฐม 73000',
      },
      socialLinks: [
        { name: 'Facebook', link: 'https://www.facebook.com/natthakan.jamratphum.7/', icon: 'fa fa-facebook', iconClass: 'foot-icon-bg-1' },
        { name: 'Twitter', link: 'https://www.tiktok.com/@senpru?is_from_webapp=1&sender_device=pc', icon: 'fa fa-twitter', iconClass: 'foot-icon-bg-2' },
        { name: 'Instagram', link: 'https://www.instagram.com/fxy.moonlit/?hl=en', icon: 'fa fa-instagram', iconClass: 'foot-icon-bg-3' },
      ],
    };
  },
};
</script>

<style scoped>
.footer-copyright {
  background-color: #222;
  color: #fff;
  padding: 40px 0;
  font-size: 14px;
}

.footer-content {
  margin-bottom: 20px;
}

.single-footer-item {
  margin-bottom: 30px;
}

.footer-logo a {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

.footer-logo p {
  font-size: 12px;
  margin: 5px 0;
}

h2 {
  color: #ffa500;
  font-size: 18px;
  margin-bottom: 15px;
  border-bottom: 2px solid #ffa500;
  padding-bottom: 5px;
}

.single-footer-txt p {
  margin: 5px 0;
}

.single-footer-txt a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.single-footer-txt a:hover {
  color: #ffa500;
}

.foot-icons {
  text-align: center;
}

.footer-social-links {
  padding: 0;
  list-style: none;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 15px; 
}

.footer-social-links a {
  color: #fff;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.footer-social-links a:hover {
  transform: scale(1.2);
}

.return-to-top {
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

.return-to-top:hover {
  color: #ffa500;
}

hr {
  border: 0;
  height: 1px;
  background-color: #444;
  margin: 20px 0;
}
</style>
