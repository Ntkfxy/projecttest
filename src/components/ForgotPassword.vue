<template>
    <div class="forgot-password-background">
      <div class="forgot-password-container">
        <h2>ลืมรหัสผ่าน</h2>
        <p>กรุณากรอกอีเมลของคุณเพื่อกู้รหัสผ่าน</p>
        <form @submit.prevent="handleForgotPassword">
          <div class="form-group">
            <label for="email">อีเมล</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="กรุณากรอกอีเมลของคุณ"
            />
          </div>
          <button type="submit" class="forgot-password-btn">ส่งคำขอกู้รหัสผ่าน</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      handleForgotPassword() {
        console.log(`Forgot password request for email: ${this.email}`);
        alert('เราได้ส่งลิงก์กู้รหัสผ่านไปยังอีเมลของคุณแล้ว');
      }
    }
  };
  </script>
  
  <style scoped>
  .forgot-password-background {
    background-image: url('@/assets/images/home/doipha.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .forgot-password-container {
    max-width: 400px;
    width: 100%;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
  }
  
  .forgot-password-container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .forgot-password-container p {
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
  
  .forgot-password-btn {
    width: 100%;
    padding: 10px;
    background-color: #ffa500;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .forgot-password-btn:hover {
    background-color: #ff8c00;
  }
  </style>
  