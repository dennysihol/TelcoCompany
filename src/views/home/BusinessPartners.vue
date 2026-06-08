<template>
  <section id="business-partners" class="container mt-5 d-flex justify-content-center partner-section ps-0 pe-0 mb-3">
    <div class="col-10">
      <div class="row d-flex justify-content-between">
        <div class="col-md-3 col-sm-3 pb-3">
          <div class="title fs-20">Mitra Bisnis Kami</div>
        </div>
        <div class="col-xl-9 col-md-8 col-sm-6 overflow-hidden">
          <div class="row w-sm-24">
            <swiper
                :slidesPerView="4"
                :slidesPerGroup="4"
                :centeredSlides="false"
                :slidesPerGroupSkip="0"
                :grabCursor="true"
                :spaceBetween="15"
                :keyboard="{
            enabled: true,
            }"
                :scrollbar="false"
                :navigation="false"
                :breakpoints="{
            320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
            },
            768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
            },
            1025: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20
            },
            }"
                :autoplay="{
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
            }"
                :modules="modules"
            >
              <swiper-slide v-for="item in dataPartner" :key="item.id">
                <img :src="item.urlImage"/>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>
<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay, Pagination, Navigation, Scrollbar, Keyboard} from 'swiper/modules';

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
  },
  data() {
    return {
      dataPartner: [
        {
          "id": 1,
          "urlImage": new URL('../../assets/image/ic_partner_1.png', import.meta.url).href
        },
        {
          "id": 2,
          "urlImage": new URL('../../assets/image/ic_partner_2.png', import.meta.url).href
        },
        {
          "id": 3,
          "urlImage": new URL('../../assets/image/ic_partner_3.png', import.meta.url).href
        },
        {
          "id": 4,
          "urlImage": new URL('../../assets/image/ic_partner_4.png', import.meta.url).href
        },
        {
          "id": 5,
          "urlImage": new URL('../../assets/image/ic_partner_5.png', import.meta.url).href
        },
        {
          "id": 6,
          "urlImage": new URL('../../assets/image/ic_partner_6.png', import.meta.url).href
        },
        {
          "id": 7,
          "urlImage": new URL('../../assets/image/ic_partner_7.png', import.meta.url).href
        },
        {
          "id": 8,
          "urlImage": new URL('../../assets/image/ic_partner_8.png', import.meta.url).href
        },
        {
          "id": 9,
          "urlImage": new URL('../../assets/image/ic_partner_14.png', import.meta.url).href
        },
        {
          "id": 10,
          "urlImage": new URL('../../assets/image/ic_partner_15.png', import.meta.url).href
        },
        {
          "id": 11,
          "urlImage": new URL('../../assets/image/ic_partner_16.png', import.meta.url).href
        },
        {
          "id": 12,
          "urlImage": new URL('../../assets/image/ic_partner_17.png', import.meta.url).href
        },
        {
          "id": 13,
          "urlImage": new URL('../../assets/image/ic_partner_13.png', import.meta.url).href
        },
      ],
      loading: false,
      error: null,
    };
  },

}
</script>
<style scoped>
.partner-section {
  height: 5rem;
}

.fs-20 {
  font-size: 20px;
}

.title {
  font-weight: 700;
  width: 14rem;
}

.swiper-slide img {
  max-height: 56px;
  object-fit: contain;
}

.mySwiper {
  max-width: 814px;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media (max-width: 768px) {
  .w-sm-24 {
    width: 24rem;
  }
}
</style>