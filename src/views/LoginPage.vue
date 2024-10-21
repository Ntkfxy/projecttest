<template>
    <div>
      <h1>ล็อกอิน</h1>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="อีเมล" required />
        <input type="password" v-model="password" placeholder="รหัสผ่าน" required />
        <button type="submit">ล็อกอิน</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      login() {
        // Simulate login process
        if (this.email === 'user@example.com' && this.password === 'password') {
          // Successful login logic
        } else {
          this.errorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  