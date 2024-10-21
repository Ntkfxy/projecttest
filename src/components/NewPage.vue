<template>
    <!-- blog start -->
    <section id="blog" class="blog">
      <div class="container">
        <div class="blog-details">
          <div class="gallery-header text-center">
            <h2>
              ข่าวสารล่าสุด
            </h2>
            <p>
              Travel News from all over the world
            </p>
          </div><!-- /.gallery-header -->
          <div class="blog-content">
            <div class="row">
              <div class="col-sm-4 col-md-4" v-for="post in blogPosts" :key="post.id">
                <div class="thumbnail">
                  <h2>{{ post.trending }} <span>{{ post.date }}</span></h2>
                  <div class="thumbnail-img">
                    <img :src="post.imgSrc" :alt="post.imgAlt" />
                    <div class="thumbnail-img-overlay"></div><!-- /.thumbnail-img-overlay -->
                  </div><!-- /.thumbnail-img -->
                  <div class="caption">
                    <div class="blog-txt">
                      <h3>
                        <a :href="post.link">
                          {{ post.title }}
                        </a>
                      </h3>
                      <p>{{ post.description }}</p>
                      <a :href="post.link">Read More</a>
                    </div><!-- /.blog-txt -->
                  </div><!-- /.caption -->
                </div><!-- /.thumbnail -->
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.blog-content -->
        </div><!-- /.blog-details -->
      </div><!-- /.container -->
    </section><!-- /.blog -->
    <!-- blog end -->
  </template>
  
  <script>
  export default {
    name: "BlogSection",
    data() {
      return {
        blogPosts: [
          {
            id: 1,
            trending: "trending news",
            date: "15 november 2024",
            imgSrc: require("@/assets/images/blog/thiyod2.jpg"),
            imgAlt: "blog-img",
            title: "ปีทองหนังไทย - ต้อนรับ 'ธี่หยด' เข้าทำเนียบหนังไทยทำเงินสูงสุด",
            description: "ต้องเรียกว่าเป็นปีทองหนังไทยจริง ๆ เพราะปี 2567 ภาพยนตร์ไทยทยอยตบเท้าทำลายสถิติกันต่อเนื่อง ล่าสุด 'ธี่หยด 2' ทำลายสถิติ 'หลานม่า' ที่ทำรายได้สูงสุดในปีนี้แล้ว",
            link: "https://www.thaipbs.or.th/program/ArtandCultureThaiPBS/watch/fDEtRV"
          },
          {
            id: 2,
            trending: "trending news",
            date: "15 December 2020",
            imgSrc: require("@/assets/images/blog/y2.jpg"),
            imgAlt: "blog-img",
            title: "“ธี่หยด 2” พาเที่ยวอุตรดิตถ์ ชูเสน่ห์เมืองเหนือ กระตุ้นท่องเที่ยวไทย...",
            description: "ททท.ผนึกกำลังกับภาพยนตร์ไทย 'ธี่หยด 2' เปิดตัวแคมเปญ 'ธี่เที่ยว ธี่กิน ของดีธี่อุตรดิตถ์' ชวนนักท่องเที่ยวสัมผัสเสน่ห์ของจังหวัดอุตรดิตถ์ พร้อมจัดกิจกรรม CSR ร่วมกับนักแสดง ส่งเสริมการท่องเที่ยวอย่างยั่งยืน...",
            link: "https://www.prachachat.net/tourism/news-1672218"
          },
          {
            id: 3,
            trending: "trending news",
            date: "15 October 2023",
            imgSrc: require("@/assets/images/blog/tiyod2.jpg"),
            imgAlt: "blog-img",
            title: "เกร็ดภาพยนตร์ “ธี่หยด” รู้ก่อนหลอนทุกโรงหนัง ตำนานดังเมืองกาญจน์",
            description: "เปิด 6 เกร็ดภาพยนตร์ “ธี่หยด” ภาพยนตร์สุดหลอนจากเรื่องเล่าชวนขนหัวลุก เจาะลึกถึงที่มาของหนังผีไทยที่หลายคนรอคอย เตรียมความพร้อมก่อนรับชมพร้อมกันทุกโรงภาพยนตร์ 26 ตุลาคม 2566 นี้",
            link: "https://thethaiger.com/th/news/975681/"
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .blog {
    padding: 60px 0;
  }
  
  .thumbnail {
    margin-bottom: 30px;
  }
  
  .thumbnail-img img {
    max-width: 100%;
    height: auto;
  }
  
  .blog-txt h3 a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
  }
  
  .blog-txt p {
    color: #777;
    font-size: 14px;
    margin-top: 10px;
  }
  
  .blog-txt a {
    color: #ffa500;
    text-decoration: underline;
  }
  
  .blog-txt a:hover {
    text-decoration: none;
  }
  </style>
  