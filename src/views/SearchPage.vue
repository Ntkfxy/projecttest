<template>
    <div>
      <h1>ค้นหา</h1>
      <form @submit.prevent="searchTrains">
        <input type="text" v-model="departure" placeholder="สถานีต้นทาง" required />
        <input type="text" v-model="arrival" placeholder="สถานีปลายทาง" required />
        <input type="date" v-model="date" required />
        <button type="submit">ค้นหา</button>
      </form>
      <div v-if="trains.length">
        <h2>ผลการค้นหา</h2>
        <ul>
          <li v-for="train in trains" :key="train.id">{{ train.name }} - {{ train.time }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    data() {
      return {
        departure: '',
        arrival: '',
        date: '',
        trains: [],
      };
    },
    methods: {
      searchTrains() {
        // Simulate an API call to get train data
        this.trains = [
          { id: 1, name: 'รถไฟสาย A', time: '09:00' },
          { id: 2, name: 'รถไฟสาย B', time: '12:00' },
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  