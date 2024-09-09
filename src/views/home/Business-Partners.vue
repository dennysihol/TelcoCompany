<template>
  <section id="business-partners" class="partner-section">
    <div class="partner-text">
      <h5><b>Mitra Bisnis Kami</b></h5>
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
import {Advantages, Article, Information} from "@/views/home/index.js";

export default {
    name: 'Business-partners',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay],
    };
  }

}
</script>
<style scoped>
.partner-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px; /* space between the columns */
}

.partner-text {
  font-size: 18px;
  font-family:  Arial, sans-serif;}

.partner-swiper {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

body {
  font-family: Arial, sans-serif;
}


.swiper-slide img {
  max-width: 177px; /* Adjust the size of the logos */
  max-height: 56px;
  object-fit: contain;
}

.mySwiper {
  max-width: 814px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>