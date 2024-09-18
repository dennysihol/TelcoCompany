<template>

  <div id="app">
    <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
         :data-bs-interval="intervalBanner" data-bs-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/image/home-banner-3.png" class="d-block w-100" alt="home-banner-3">
        </div>
      </div>
    </div>
    <Navbar />
    <!-- Rest of your app -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Advantages, Information} from "@/views/home/index.js";

export default {
  name: "About",
  components: {
    Information,
    Swiper,
    SwiperSlide,
    Advantages,
    Navbar,
  },
};
</script>
