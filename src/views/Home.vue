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
    <BusinessPartners/>
    <Article/>
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
  BusinessPartners,
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
    BusinessPartners
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




</style>
