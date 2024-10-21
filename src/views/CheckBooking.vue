<template>
    <div>
      <h1>ตรวจสอบการจอง</h1>
      <form @submit.prevent="checkBooking">
        <input type="text" v-model="bookingRef" placeholder="หมายเลขการจอง" required />
        <button type="submit">ตรวจสอบ</button>
      </form>
      <div v-if="bookingDetails">
        <h2>รายละเอียดการจอง</h2>
        <p>{{ bookingDetails }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckBooking',
    data() {
      return {
        bookingRef: '',
        bookingDetails: '',
      };
    },
    methods: {
      checkBooking() {
        // Simulate retrieving booking details
        this.bookingDetails = `การจองหมายเลข ${this.bookingRef} คือ: รถไฟสาย A เวลา 09:00`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  