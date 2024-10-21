<template>
    <div>
      <h1>ลงทะเบียน</h1>
      <form @submit.prevent="register">
        <input type="text" v-model="name" placeholder="ชื่อ" required />
        <input type="email" v-model="email" placeholder="อีเมล" required />
        <input type="password" v-model="password" placeholder="รหัสผ่าน" required />
        <input type="password" v-model="confirmPassword" placeholder="ยืนยันรหัสผ่าน" required />
        <button type="submit">ลงทะเบียน</button>
      </form>
      <p v-if="registrationMessage">{{ registrationMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        registrationMessage: '',
      };
    },
    methods: {
      register() {
        if (this.password === this.confirmPassword) {
          // Simulate registration process
          this.registrationMessage = 'ลงทะเบียนสำเร็จ!';
        } else {
          this.registrationMessage = 'รหัสผ่านไม่ตรงกัน';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  