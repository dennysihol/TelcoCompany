<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
       :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/image/home-banner-1.png" class="d-block w-100" alt="home-banner-1">
      </div>
      <div class="carousel-item">
        <img src="@/assets/image/home-banner-2.png" class="d-block w-100" alt="home-banner-2">
      </div>
    </div>
  </div>
  <section class="ud-hero" id="home">
    <Information/>
    <Advantages/>
    <Article/>
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
import {
  Advantages,
  Article,
  Information,
} from './home/index.js';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Advantages,
    Article,
    Information,
  },
  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay],
    };
  },
  data() {
    return {
      intervalBanner: 8000,
      loading: true,
      error: null,
    };
  },
}
</script>

<style scoped>


.carousel-item {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Set this to the desired height for full screen */
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
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
