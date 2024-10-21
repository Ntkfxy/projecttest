<template>
    <div>
      <h1>จองตั๋ว</h1>
      <form @submit.prevent="bookTicket">
        <input type="text" v-model="passengerName" placeholder="ชื่อผู้โดยสาร" required />
        <select v-model="selectedSeat" required>
          <option disabled value="">เลือกที่นั่ง</option>
          <option v-for="seat in availableSeats" :key="seat" :value="seat">{{ seat }}</option>
        </select>
        <button type="submit">จองตั๋ว</button>
      </form>
      <p v-if="confirmationMessage">{{ confirmationMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookTicket',
    data() {
      return {
        passengerName: '',
        selectedSeat: '',
        availableSeats: ['1A', '1B', '2A', '2B'],
        confirmationMessage: '',
      };
    },
    methods: {
      bookTicket() {
        // Simulate ticket booking process
        this.confirmationMessage = `จองตั๋วสำเร็จสำหรับ ${this.passengerName} ที่นั่ง ${this.selectedSeat}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  