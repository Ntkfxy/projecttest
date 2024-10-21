<template>
    <div>
      <h1>ติดต่อเรา</h1>
      <form @submit.prevent="submitContactForm">
        <input type="text" v-model="name" placeholder="ชื่อ" required />
        <input type="email" v-model="email" placeholder="อีเมล" required />
        <textarea v-model="message" placeholder="ข้อความ" required></textarea>
        <button type="submit">ส่งข้อความ</button>
      </form>
      <p v-if="submissionMessage">{{ submissionMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        submissionMessage: '',
      };
    },
    methods: {
      submitContactForm() {
        // Simulate form submission
        this.submissionMessage = 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว!';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  