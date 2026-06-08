<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
       :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in dataBanner" :key="item.id">
        <img :src="item.urlImage" class="d-block w-100" :alt="'home-banner-'+item.id">
      </div>
    </div>
  </div>
  <section class="ud-hero" id="home">
    <Information/>
    <Submission/>
    <Advantages/>
    <Testimonial/>
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
  Submission,
  Testimonial,
} from './home/index.js';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Advantages,
    Article,
    Information,
    Submission,
    BusinessPartners,
    Testimonial,
  },
  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay],
    };
  },
  data() {
    return {
      intervalBanner: 8000,
      dataBanner: [
        {
          "id": 1,
          "urlImage": 'https://cdn.prod.website-files.com/69bd021879c27d1f6b47b2ad/69fe015310ab427d2eda1732_D1_IndonesiaTelecoTowers_Image.jpeg'
        },
        {
          "id": 2,
          "urlImage": 'https://anchorcomllc.com/images/hero-towers.png'
        }
      ],
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

  @media (max-width: 768px) {
    .carousel-item {
      top: 7rem;
      max-height: 50vh;

      img {
        height: 20rem;
      }
    }
  }

</style>
