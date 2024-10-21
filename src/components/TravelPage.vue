<template>
  <section class="travel-box">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="single-travel-boxes">
            <div id="desc-tabs" class="desc-tabs">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" :class="{ active: activeTab === 'tours' }">
                  <a href="#" @click.prevent="setActiveTab('tours')">
                    <i class="fa fa-tree"></i>
                    ทัวร์
                  </a>
                </li>
                <li role="presentation" :class="{ active: activeTab === 'hotels' }">
                  <a href="#" @click.prevent="setActiveTab('hotels')">
                    <i class="fa fa-building"></i>
                    โรงแรม
                  </a>
                </li>
                <li role="presentation" :class="{ active: activeTab === 'flights' }">
                  <a href="#" @click.prevent="setActiveTab('flights')">
                    <i class="fa fa-train"></i>
                    เที่ยวรถไฟ
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div role="tabpanel" class="tab-pane" :class="{ active: activeTab === 'tours' }">
                  <div class="tab-para">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="single-tab-select-box">
                          <h2>สถานที่</h2>
                          <select class="form-control" v-model="destinationCountry">
                            <option value="">สถานีต้นทาง</option>
                            <option value="bangkok">กรุงเทพมหานคร (หัวลำโพง)</option>
                            <option value="nakhonratchasima">นครราชสีมา</option>
                            <option value="chiangmai">เชียงใหม่</option>
                            <option value="phuket">ภูเก็ต</option>
                            <option value="hadyai">หาดใหญ่</option>
                            <option value="suratthani">สุราษฎร์ธานี</option>
                            <option value="ubon">อุบลราชธานี</option>
                            <option value="chiangrai">เชียงราย</option>
                            <option value="lamphun">ลำพูน</option>
                            <option value="khonkaen">ขอนแก่น</option>
                            <option value="nakhonsawan">นครสวรรค์</option>
                            <option value="rayong">ระยอง</option>
                            <option value="lampang">ลำปาง</option>
                            <option value="trang">ตรัง</option>
                            <option value="buriram">บุรีรัมย์</option>
                            <option value="ratchaburi">ราชบุรี</option>
                            <option value="prachuap">ประจวบคีรีขันธ์</option>
                          </select>
                          <select class="form-control mt-2" v-model="destinationLocation">
                            <option value="">สถานีปลายทาง</option>
                            <option value="bangkok">กรุงเทพมหานคร (หัวลำโพง)</option>
                            <option value="nakhonratchasima">นครราชสีมา</option>
                            <option value="chiangmai">เชียงใหม่</option>
                            <option value="phuket">ภูเก็ต</option>
                            <option value="hadyai">หาดใหญ่</option>
                            <option value="suratthani">สุราษฎร์ธานี</option>
                            <option value="ubon">อุบลราชธานี</option>
                            <option value="chiangrai">เชียงราย</option>
                            <option value="lamphun">ลำพูน</option>
                            <option value="khonkaen">ขอนแก่น</option>
                            <option value="nakhonsawan">นครสวรรค์</option>
                            <option value="rayong">ระยอง</option>
                            <option value="lampang">ลำปาง</option>
                            <option value="trang">ตรัง</option>
                            <option value="buriram">บุรีรัมย์</option>
                            <option value="ratchaburi">ราชบุรี</option>
                            <option value="prachuap">ประจวบคีรีขันธ์</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>เช็คอิน</h2>
                          <input type="date" v-model="checkIn" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>เช็คเอาท์</h2>
                          <input type="date" v-model="checkOut" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-1 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>สมาชิก</h2>
                          <select class="form-control" v-model="members">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-5">
                        <div class="travel-budget">
                          <h3>งบประมาณ:</h3>
                          <div class="price_slider_amount">
                            <input type="text" v-model="budget" placeholder="ระบุงบประมาณ (฿)" />
                          </div>
                          <div id="slider-range"></div>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="about-btn travel-mrt-0 pull-right">
                          <button class="about-view travel-btn" @click="searchTours">
                            ค้นหา
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" class="tab-pane" :class="{ active: activeTab === 'hotels' }">
                  <div class="tab-para">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="single-tab-select-box">
                          <h2>สถานที่</h2>
                          <select class="form-control mt-2" v-model="destinationLocation">
                            <option value="">สถานีต้นทาง</option>
                            <option value="bangkok">กรุงเทพมหานคร (หัวลำโพง)</option>
                            <option value="nakhonratchasima">นครราชสีมา</option>
                            <option value="chiangmai">เชียงใหม่</option>
                            <option value="phuket">ภูเก็ต</option>
                            <option value="hadyai">หาดใหญ่</option>
                            <option value="suratthani">สุราษฎร์ธานี</option>
                            <option value="ubon">อุบลราชธานี</option>
                            <option value="chiangrai">เชียงราย</option>
                            <option value="lamphun">ลำพูน</option>
                            <option value="khonkaen">ขอนแก่น</option>
                            <option value="nakhonsawan">นครสวรรค์</option>
                            <option value="rayong">ระยอง</option>
                            <option value="lampang">ลำปาง</option>
                            <option value="trang">ตรัง</option>
                            <option value="buriram">บุรีรัมย์</option>
                            <option value="ratchaburi">ราชบุรี</option>
                            <option value="prachuap">ประจวบคีรีขันธ์</option>
                          </select>
                          <select class="form-control mt-2" v-model="destinationLocation">
                            <option value="">สถานีปลายทาง</option>
                            <option value="bangkok">กรุงเทพมหานคร (หัวลำโพง)</option>
                            <option value="nakhonratchasima">นครราชสีมา</option>
                            <option value="chiangmai">เชียงใหม่</option>
                            <option value="phuket">ภูเก็ต</option>
                            <option value="hadyai">หาดใหญ่</option>
                            <option value="suratthani">สุราษฎร์ธานี</option>
                            <option value="ubon">อุบลราชธานี</option>
                            <option value="chiangrai">เชียงราย</option>
                            <option value="lamphun">ลำพูน</option>
                            <option value="khonkaen">ขอนแก่น</option>
                            <option value="nakhonsawan">นครสวรรค์</option>
                            <option value="rayong">ระยอง</option>
                            <option value="lampang">ลำปาง</option>
                            <option value="trang">ตรัง</option>
                            <option value="buriram">บุรีรัมย์</option>
                            <option value="ratchaburi">ราชบุรี</option>
                            <option value="prachuap">ประจวบคีรีขันธ์</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>เช็คอิน</h2>
                          <input type="date" v-model="hotelCheckIn" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>เช็คเอาท์</h2>
                          <input type="date" v-model="hotelCheckOut" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-1 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>สมาชิก</h2>
                          <select class="form-control" v-model="hotelMembers">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-5">
                        <div class="travel-budget">
                          <h3>งบประมาณ:</h3>
                          <div class="price_slider_amount">
                            <input type="text" v-model="hotelBudget" placeholder="ระบุงบประมาณ (฿)" />
                          </div>
                          <div id="slider-range"></div>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="about-btn travel-mrt-0 pull-right">
                          <button class="about-view travel-btn" @click="searchHotels">
                            ค้นหา
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" class="tab-pane" :class="{ active: activeTab === 'flights' }">
                  <div class="tab-para">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="single-tab-select-box">
                          <h2>สถานที่</h2>
                          <select class="form-control" v-model="flightCountry">
                            <option value="">เลือกประเทศ</option>
                            <option value="thailand">ประเทศไทย</option>
                            <option value="vietnam">เวียดนาม</option>
                            <option value="malaysia">มาเลเซีย</option>
                          </select>
                          <select class="form-control mt-2" v-model="flightLocation">
                            <option value="">เลือกสถานที่</option>
                            <option value="bangkok">กรุงเทพมหานคร</option>
                            <option value="ho-chi-minh">โฮจิมินห์</option>
                            <option value="kuala-lumpur">กัวลาลัมเปอร์</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>วันที่</h2>
                          <input type="date" v-model="flightDate" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>เวลา</h2>
                          <input type="time" v-model="flightTime" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-1 col-sm-4">
                        <div class="single-tab-select-box">
                          <h2>สมาชิก</h2>
                          <select class="form-control" v-model="flightMembers">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-5">
                        <div class="travel-budget">
                          <h3>งบประมาณ:</h3>
                          <div class="price_slider_amount">
                            <input type="text" v-model="flightBudget" placeholder="ระบุงบประมาณ (฿)" />
                          </div>
                          <div id="slider-range"></div>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="about-btn travel-mrt-0 pull-right">
                          <button class="about-view travel-btn" @click="searchFlights">
                            ค้นหา
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
      activeTab: 'tours',
      destinationCountry: '',
      destinationLocation: '',
      checkIn: '',
      checkOut: '',
      duration: '',
      members: 1,
      budget: '',
      hotelCountry: '',
      hotelLocation: '',
      hotelCheckIn: '',
      hotelCheckOut: '',
      hotelDuration: '',
      hotelMembers: 1,
      hotelBudget: '',
      flightCountry: '',
      flightLocation: '',
      flightDate: '',
      flightTime: '',
      flightMembers: 1,
      flightBudget: '',
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    searchTours() {
    },
    searchHotels() {
    },
    searchFlights() {
    },
  },
};
</script>

<style scoped>
.travel-box {
  padding: 60px 0;
}
.single-tab-select-box {
  margin-bottom: 15px;
}
.about-btn {
  margin-top: 25px;
}
</style>
