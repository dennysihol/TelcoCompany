<template>
  <section id="about" class="ud-about">
    <div class="container">
      <div class="row">
        <div class="col-10 ps-0 pe-0">
          <h2 class="title">
            Proses Konstruksi Menara BTS
          </h2>
          <div class="ud-about-wrapper" style="margin: 50px 0 100px 0;">
            <div class="ud-about-content-wrapper">
              <div class="ud-about-image">
                <!-- Custom Pagination -->
                <div class="custom-pagination">
                  <div v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" :class="currentIndex === index ? 'step-process active' : 'step-process'">
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
                <div class="swiper-container">
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
        { title: '1. Konsultasi Proyek', image: 'src/assets/image/phone-mockup-1.png', description: 'Diskusi kebutuhan dan spesifikasi proyek menara BTS Anda', icon: new URL('../../assets/image/ic_submission_1.png', import.meta.url).href },
        { title: '2. Perancangan & Survei', image: 'src/assets/image/phone-mockup-2.png', description: 'Tim ahli kami melakukan survei lokasi dan merancang solusi konstruksi terbaik', icon: new URL('../../assets/image/ic_submission_2.png', import.meta.url).href },
        { title: '3. Pengadaan Material', image: 'src/assets/image/phone-mockup-3.png', description: 'Pengadaan material berkualitas tinggi dan persiapan peralatan konstruksi', icon: new URL('../../assets/image/ic_submission_4.png', import.meta.url).href },
        { title: '4. Pelaksanaan & Pengawasan', image: 'src/assets/image/phone-mockup-4.png', description: 'Konstruksi menara dengan pengawasan ketat dan standar keselamatan internasional', icon: new URL('../../assets/image/ic_submission_3.png', import.meta.url).href }
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

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
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
  
  .step-process {
    color: var(--body-color);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    height: 100px;
    width: 500px;
    cursor: pointer;
  }
  .step-process.active {
    background-color: var(--color-background);
    color: var(--color-primary);
  }
}

.custom-pagination button {
  background-color: var(--color-background-soft);
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  color: var(--body-color);
}

.custom-pagination button.active {
  background-color: var(--color-primary);
  color: var(--white);
}

@media (max-width: 768px) {
  .step-process {
    width: auto !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    height: auto !important;

    h3 {
      font-size: 16px;
    }
  }
}
</style>
