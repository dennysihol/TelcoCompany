<template>
  <section id="about" class="ud-about">
    <div class="container">
      <h2 style="display: flex; align-items: center; justify-content: center;">
        Proses Pengajuan Cepat dan Mudah
      </h2>
      <div class="ud-about-wrapper">
        <div class="ud-about-content-wrapper">
          <div class="ud-about-image">
            <!-- Custom Pagination -->
            <div class="custom-pagination">
              <div v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" :style="{
                backgroundColor: currentIndex === index ? 'white' : '',
                color: currentIndex === index ? '#0087FF' : 'black',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                height: '100px',
                width: '500px',
                cursor: 'pointer',
              }" :class="{ active: currentIndex === index }">
                <img :src="slide.icon" alt="Icon" class="pagination-icon" style="height: 60px; width: 60px; object-fit: cover; margin-right: 15px;" />
                <div class="pagination-content">
                  <h3>{{ slide.title }}</h3>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Swiper Container -->
        <div class="ud-about-content-wrapper">
          <div class="ud-about-content">
            <div class="swiper-container" style="width: 400px;">
              <swiper :autoplay="{
                delay: 3000,
                disableOnInteraction: false
              }" :spaceBetween="0" :loop="true" :effect="'fade'" :fadeEffect="{
                  crossFade: true
                }" :modules="modules" @slideChange="onSlideChange" @swiper="onSwiper" class="mySwiper">
                <swiper-slide class="slide1"><img src="../../assets/image/phone-mockup-1.png" /></swiper-slide>
                <swiper-slide class="slide2"><img src="../../assets/image/phone-mockup-2.png" /></swiper-slide>
                <swiper-slide class="slide3"><img src="../../assets/image/phone-mockup-3.png" /></swiper-slide>
                <swiper-slide class="slide4"><img src="../../assets/image/phone-mockup-4.png" /></swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
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
      currentIndex: 0, // Track the current active slide
      swiperInstance: null, // Store the swiper instance
      slides: [
        { title: '1. Isi Data', image: 'src/assets/image/phone-mockup-1.png', description: 'Daftar akun dengan mengisi informasi yang dibutuhkan', icon: 'https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_submission_1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879' },
        { title: '2. Verifikasi', image: 'src/assets/image/phone-mockup-2.png', description: 'Sistem sedang memverifikasi data kamu untuk mendapatkan limit pinjaman', icon: 'https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_submission_2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879' },
        { title: '3. Ajukan Pinjaman', image: 'src/assets/image/phone-mockup-3.png', description: 'Ajukan besaran pinjaman yang kamu inginkan', icon: 'https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_submission_3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879' },
        { title: '4. Pengembalian Pinjaman', image: 'src/assets/image/phone-mockup-4.png', description: 'Proses pengembalian pinjaman sangat mudah', icon: 'https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_submission_4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879' }
      ],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    onSlideChange() {
      if (this.swiperInstance) {
        this.currentIndex = this.swiperInstance.realIndex;
      }
    },
    goToSlide(index) {
      if (this.swiperInstance) {
        this.swiperInstance.slideToLoop(index); // Slide to the corresponding index
      }
    }
  }
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

.custom-pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}

.custom-pagination button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.custom-pagination button.active {
  background-color: #0087FF;
  color: white;
}
</style>
