<template>
  <section class="ud-hero" id="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
          </div>
          <div
              class="ud-hero-brands-wrapper wow fadeInUp"
              data-wow-delay=".3s"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <section class="floating-widget">
    <div class="feature">
      <img src="@/assets/image/ic_verifikasi_cepat.png" alt="Verifikasi Cepat">
      <h3>Verifikasi Cepat</h3>
      <p>Verifikasi cepat dan tidak perlu menunggu lama untuk proses pinjaman</p>
    </div>
    <div class="divider"></div>
    <div class="feature2">
      <img src="@/assets/image/ic_sistem_online.png" alt="Sistem Online">
      <h3>Sistem Online</h3>
      <p>Sistem online 24 jam, pinjaman dapat diajukan kapanpun dan dimanapun</p>
    </div>
    <div class="divider"></div>
    <div class="feature">
      <img src="@/assets/image/ic_security_info.png" alt="Keamanan Informasi">
      <h3>Keamanan Informasi</h3>
      <p>Keamanan informasi, perlindungan privasi ganda untuk mencegah kebocoran informasi</p>
    </div>
  </section>
  <section class="partner-section">
    <div class="partner-text">
      <h3>Mitra Bisnis Kami</h3>
    </div>
    <div class="partner-swiper">
      <swiper
          :slidesPerView="4"
          :centeredSlides="false"
          :slidesPerGroupSkip="0"
          :grabCursor="true"
          :spaceBetween="0"
          :keyboard="{
        enabled: true,
      }"
          :breakpoints="{
        '769': {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }"
          :scrollbar="false"
          :navigation="false"

          :autoplay="{
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after interaction
      }"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/image/ic_partner_1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_3.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_4.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_5.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_6.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_7.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_8.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_9.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_10.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_11.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/ic_partner_12.png" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation, Scrollbar, Keyboard } from 'swiper/modules';

// If you use pagination
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay],
    };
  },

}
</script>

<style scoped>
.floating-widget {
  display: flex;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 10px;
  margin: 20px auto;
  max-width: 900px;
  position: relative;
  top: -200px; /* Adjust the vertical position for the floating effect */
  z-index: 100;
}

.feature {
  text-align: center;
  max-width: 30%;
}

.feature2 {
  text-align: center;
  max-width: 30%;
}

.feature img {
  width: 50px;
  margin-bottom: 10px;
}

.feature2 img {
  width: 50px;
  margin-bottom: 21px;
}

.floating-widget p {
  font-size: 14px;
  color: #666;
}

.icon img {
  width: 60px; /* Adjust based on your icon size */
  height: auto;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #666;
  display: block;
}

.divider {
  width: 1px;
  background-color: #ddd;
  margin: 0 20px;
}

.partner-section {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 300px;
}

.partner-text {
  flex: 0 0 200px;
  text-align: left;
  padding-right: 20px;
}

.partner-swiper {
  flex: 1;
}

body {
  font-family: Arial, sans-serif;
}

.swiper-container {
  width: 100%;
  height: 150px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.swiper-slide img {
  max-width: 177px; /* Adjust the size of the logos */
  max-height: 56px;
  object-fit: contain;
}

.mySwiper {
  max-width: 814px;
  padding-top: 20px;
}

</style>
