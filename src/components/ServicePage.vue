<template>
    <section id="service" class="service">
      <div class="container">
        <div class="service-counter text-center">
          <div class="row">
            <div class="col-md-4 col-sm-4" v-for="service in services" :key="service.id">
              <div class="single-service-box">
                <div class="service-img">
                  <img :src="service.imgSrc" :alt="service.imgAlt" />
                </div>
                <!--/.service-img-->
                <div class="service-content">
                  <h2>
                    <a href="#">
                      {{ service.title }}
                    </a>
                  </h2>
                  <p>{{ service.description }}</p>
                </div>
                <!--/.service-content-->
              </div>
              <!--/.single-service-box-->
            </div>
            <!--/.col-->
          </div>
          <!--/.row-->
        </div>
        <!--/.service-counter-->
      </div>
      <!--/.container-->
    </section>
    <!--/.service-->
  </template>
  
  <script>
export default {
  name: "ServiceSection",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "แพ็คเกจทัวร์สุดมหัศจรรย์",
          imgSrc: require('@/assets/images/service/s1.png'),
          imgAlt: "service-icon",
          description:
            "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.",
        },
        {
          id: 2,
          title: "จองโรงแรมระดับท็อปคลาส",
          imgSrc: require('@/assets/images/service/s2.png'),
          imgAlt: "service-icon",
          description:
            "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.",
        },
        {
          id: 3,
          title: "การจองตั๋วรถไฟออนไลน์",
          imgSrc: require('@/assets/images/service/s4.png'),
          imgAlt: "service-icon",
          description:
            "Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.",
        },
      ],
    };
  },
};
</script>

  <style scoped>
  .service {
    padding: 60px 0;
  }
  
  .single-service-box {
    margin-bottom: 30px;
  }
  
  .service-img img {
    max-width: 100%;
    height: auto;
  }
  
  .service-content h2 a {
    color: #333;
    text-decoration: none;
    font-size: 24px;
  }
  
  .service-content p {
    color: #777;
    font-size: 14px;
    margin-top: 10px;
  }
  
  .service-content a:hover {
    color: #ffa500;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  