<template>
    <!-- subscribe start -->
    <section id="subs" class="subscribe">
      <div class="container">
        <div class="subscribe-title text-center">
          <h2>
            เข้าร่วมรายชื่อสมาชิกของเราเพื่อรับการอัปเดตเป็นประจำ
          </h2>
          <p>
            สมัครสมาชิกตอนนี้ เราจะส่งข้อเสนอที่ดีที่สุดสำหรับการเดินทางของคุณ
          </p>
        </div>
        <form @submit.prevent="subscribe">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div class="custom-input-group">
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  placeholder="Enter your Email Here"
                  required
                />
                <button type="submit" class="appsLand-btn subscribe-btn">
                  สมัครสมาชิก
                </button>
                <div class="clearfix"></div>
                <i class="fa fa-envelope"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- subscribe end -->
  </template>
  
  <script>
  export default {
    name: "SubscribeSection",
    data() {
      return {
        email: "",
      };
    },
    methods: {
      subscribe() {
        if (this.email) {
          alert(`สมัครสมาชิกด้วยอีเมล: ${this.email}`);
          this.email = ""; 
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .subscribe {
    padding: 60px 0;
  }
  
  .subscribe-title {
    margin-bottom: 30px;
  }
  
  .custom-input-group {
    position: relative;
  }
  
  .form-control {
    padding-right: 50px;
  }
  
  .subscribe-btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border: none;
    cursor: pointer;
  }
  
  .fa-envelope {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #777;
  }
  </style>
  