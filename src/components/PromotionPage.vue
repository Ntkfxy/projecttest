<template>
    <section id="pack" class="packages">
      <div class="container">
        <div class="gallery-header text-center">
          <h2>แพ็กเกจพิเศษ</h2>
          <p>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
        </div>
        <div class="packages-content">
          <div class="row">
            <div v-for="packages in packages" :key="packages.id" class="col-md-4 col-sm-6">
              <div class="single-package-item">
                <img :src="packages.image" alt="package-place" class="package-image" />
                <div class="single-package-item-txt">
                  <h3>
                    {{ packages.name }} <span class="price">{{ packages.price }}</span>
                  </h3>
                  <div class="packages-para">
                    <p>
                      <span>
                        <i class="fa fa-angle-right"></i> {{ packages.duration }}
                      </span>
                      <i class="fa fa-angle-right"></i> {{ packages.accommodation }}
                    </p>
                    <p>
                      <span>
                        <i class="fa fa-angle-right"></i> {{ packages.amenitiesTitle }}
                      </span>
                      <i class="fa fa-angle-right"></i> {{ packages.foodQuality }}
                    </p>
                  </div>
                  <div class="packages-review">
                    <p>
                      <i class="fa fa-star" v-for="n in packages.rating" :key="n"></i>
                      <span>{{ packages.reviews }} รีวิว</span>
                    </p>
                  </div>
                  <div class="about-btn">
                    <button class="about-view packages-btn" @click="bookNow(packages.id)">
                      จองเลยตอนนี้
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        packages: [
          {
            id: 1,
            name: 'เกาะพีพี',
            price: '$499',
            duration: '5 วัน 6 คืน',
            accommodation: 'ที่พักระดับ 5 ดาว',
            amenitiesTitle: 'สิ่งอำนวยความสะดวกด้าน',
            foodQuality: 'อาหารยอดเยี่ยม',
            rating: 5,
            reviews: 2544,
            image: require('@/assets/images/packages/เกาะพีพี.jpg'),
          },
          {
            id: 2,
            name: 'ตลาดน้ำดำเนินสะดวก',
            price: '$1499',
            duration: '5 วัน 6 คืน',
            accommodation: 'ที่พักระดับ 5 ดาว',
            amenitiesTitle: 'สิ่งอำนวยความสะดวกด้าน',
            foodQuality: 'อาหารยอดเยี่ยม',
            rating: 5,
            reviews: 2544,
            image: require('@/assets/images/packages/ตลาดน้ำดำนินสะดวก.jpg'),
          },
          {
            id: 3,
            name: 'เขื่อนเสี่ยวหลาน',
            price: '$1199',
            duration: '5 วัน 6 คืน',
            accommodation: 'ที่พักระดับ 5 ดาว',
            amenitiesTitle: 'สิ่งอำนวยความสะดวกด้าน',
            foodQuality: 'อาหารยอดเยี่ยม',
            rating: 5,
            reviews: 2544,
            image: require('@/assets/images/packages/เขื่อนเสี่ยวหลาน.jpg'),
          },
        ],
      };
    },
    methods: {
      bookNow(packageId) {
        console.log(`Booking package with ID: ${packageId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .packages {
    padding: 60px 0;
    background-color: #f8f9fa;
  }
  
  .gallery-header {
    margin-bottom: 30px;
  }
  
  .gallery-header h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .gallery-header p {
    color: #777;
  }
  
  .packages-content {
    margin-top: 20px;
  }
  
  .single-package-item {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .single-package-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  
  .package-image {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #007bff;
  }
  
  .single-package-item-txt {
    padding: 20px;
  }
  
  .single-package-item-txt h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #007bff;
  }
  
  .price {
    float: right;
    font-size: 1.2rem;
    color: #28a745;
  }
  
  .packages-para {
    margin: 10px 0;
    color: #555;
  }
  
  .packages-review {
    margin: 10px 0;
  }
  
  .packages-review p {
    display: flex;
    align-items: center;
  }
  
  .about-btn {
    text-align: center;
    margin-top: 15px;
  }
  
  .packages-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .packages-btn:hover {
    background-color: #0056b3;
  }
  </style>
  