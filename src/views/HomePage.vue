<template>
  <div>
    <h1>หน้าแรก</h1>
    <div class="promotions">
      <h2>โปรโมชั่นล่าสุด</h2>
      <ul>
        <li v-for="promotion in promotions" :key="promotion.id">{{ promotion.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Updated name
  data() {
    return {
      promotions: [
        { id: 1, title: 'ส่วนลด 20% สำหรับการจองตั๋วล่วงหน้า' },
        { id: 2, title: 'โปรโมชั่นพิเศษสำหรับสมาชิกใหม่' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
