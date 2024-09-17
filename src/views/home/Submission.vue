<template>
  <section id="about" class="ud-about">
    <div class="container">
      <h2 style="display: flex; align-items: center; justify-content: center;">Proses Pengajuan Cepat dan Mudah</h2>
      <div class="ud-about-wrapper">
        <div class="ud-about-content-wrapper">
          <div class="ud-about-image">
            <div style="width: 100%;">
              <div v-for="(divItem, index) in divList" :key="index" :style="{
                backgroundColor: currentIndex === index ? 'white' : '',
                color: currentIndex === index ? '#0087FF' : 'black',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                height: '100px',
                width: '500px',
              }">
                <!-- Image in the div -->
                <img :src="divItem.image" alt="Image"
                  style="height: 60px; width: 60px; object-fit: cover; margin-right: 15px;" />
                <!-- Text in the div -->
                <div>
                  <h3 style="margin: 0;">{{ divItem.title }}</h3>
                  <p style="font-size: 14px;">{{ divItem.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ud-about-content-wrapper">
          <div class="ud-about-content">
            <div class="swiper-container" style="width: 400px;">
              <swiper 
              :autoplay="
              {
                delay: 3000,
                disableOnInteraction: false
              }"
              :spaceBetween="0"
              :loop="true"
              :effect="'fade'"
              :fadeEffect="{
                crossFade: true
              }"
              :modules="modules"
              class="mySwiper">
                <swiper-slide class="slide1"><img src="../../assets/image/phone-mockup-1.png"></swiper-slide>
                <swiper-slide class="slide2"><img src="../../assets/image/phone-mockup-2.png"></swiper-slide>
                <swiper-slide class="slide3"><img src="../../assets/image/phone-mockup-3.png"></swiper-slide>
                <swiper-slide class="slide4"><img src="../../assets/image/phone-mockup-4.png"></swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { Autoplay, EffectFade } from 'swiper/modules';


export default {
  name: 'Submission',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade],
    };
  },
  data() {
    return {
      currentIndex: 0, // Track the current div index for background switch
      divList: [
        {
          title: '1. Isi Data',
          description: 'Daftar akun dengan mengisi informasi yang dibutuhkan',
          image: 'src/assets/image/ic_submission_1.png' // Replace with your image URLs
        },
        {
          title: '2. Verifikasi',
          description: 'Sistem sedang memverifikasi data kamu untuk mendapatkan limit pinjaman',
          image: 'src/assets/image/ic_submission_2.png',
        },
        {
          title: '3. Ajukan Pinjaman',
          description: 'Ajukan besaran pinjaman yang kamu inginkan',
          image: 'src/assets/image/ic_submission_3.png',
        },
        {
          title: '4. Pengembalian Pinjaman',
          description: 'Proses pengembalian pinjaman sangat mudah',
          image: 'src/assets/image/ic_submission_4.png',
        },
      ],
    };
  },
  methods: {
    autoSwitchBackground() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.divList.length;
      }, 3000); // Switch every 2 seconds
    },
  },
  mounted() {
    this.autoSwitchBackground();
  },
};
</script>

<style scoped>
h3 {
  font-size: 18px;
}

p {
  font-size: 14px;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
}
</style>
