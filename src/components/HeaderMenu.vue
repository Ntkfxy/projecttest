<template>
  <header class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="main-menu">
            <div class="navbar-header">
              <a href="#home" class="navbar-brand">
                <img src="@/assets/logo/logo.png" alt="Logo" class="logo" />
              </a>
              <button type="button" class="navbar-toggle" @click="toggleMenu">
                <i class="fa fa-bars"></i>
              </button>
            </div>
            <div :class="['collapse', 'navbar-collapse', { in: isMenuOpen }]">
              <ul class="nav navbar-nav navbar-right">
                <li class="smooth-menu" v-for="link in links" :key="link.href">
                  <a :href="link.href" @click.prevent="scrollToSection(link.href)">
                    {{ link.text }}
                  </a>
                </li>
                <li>
                  <router-link to="/login">
  <button class="login-btn">เข้าสู่ระบบ</button>
</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      links: [
        { href: '#home', text: 'หน้าแรก' },
        { href: '#pack', text: 'แพ็คเกจ' },
        { href: '#blog', text: 'ข่าวสาร' },
        { href: '#subs', text: 'การสมัครสมาชิก' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollToSection(href) {
      const section = document.querySelector(href);
      if (section) {
        const position = section.offsetTop;
        window.scrollTo({
          top: position,
          behavior: 'smooth',
        });
      }
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.header-area {
  background-color: #000;
  color: #fff;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-brand .logo {
  height: 100px;
}

.navbar-toggle {
  cursor: pointer;
  color: #fff;
}

.navbar-collapse {
  transition: all 0.3s ease-in-out;
}

.in {
  display: block !important;
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navbar-nav li {
  margin: 0 15px;
}

.navbar-nav li a {
  color: #fff;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
}

.navbar-nav li a:hover {
  background-color: #444;
}

.login-btn {
  background-color: #ffa500;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #ff8c00;
}

.home-border {
  display: none; 
}

body {
  margin-top: 60px;
}
</style>
