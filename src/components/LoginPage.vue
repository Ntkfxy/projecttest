<template>
  <div class="login-background">
    <div class="login-container">
      <h2>เข้าสู่ระบบ</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="กรุณากรอกชื่อผู้ใช้"
          />
        </div>
        <div class="form-group">
          <label for="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="กรุณากรอกรหัสผ่าน"
          />
        </div>
        <button type="submit" class="login-btn">เข้าสู่ระบบ</button>
      </form>
      <div class="forgot-password">
        <router-link to="/forgot-password">ลืมรหัสผ่าน?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log(`Username: ${this.username}, Password: ${this.password}`);
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
}

.login-background {
  background-image: url('@/assets/images/home/doipha.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border 0.3s;
}

.form-group input:focus {
  border-color: #ffa500;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #ff8c00;
}

.forgot-password {
  text-align: center;
  margin-top: 15px;
}
.forgot-password a {
  color: #ffa500;
  text-decoration: none;
  font-size: 0.9em;
}
.forgot-password a:hover {
  text-decoration: underline;
}
</style>
