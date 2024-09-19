<template>
  <section id="business-partners" class="container mt-5 d-flex justify-content-center partner-section">
    <div class="col-10 row">
      <div class="col-3">
        <div class="title fs-20">Mitra Bisnis Kami</div>
      </div>
      <div class="col-9">
        <div class="row">
          <swiper
            :slidesPerView="4"
            :centeredSlides="false"
            :slidesPerGroupSkip="0"
            :grabCursor="true"
            :spaceBetween="15"
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
          >
            <swiper-slide v-for="item in dataPartner" :key="item.id">
              <img :src="item.urlImage" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
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
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 2,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 3,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 4,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 5,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_5.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 6,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_6.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 7,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_7.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 8,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_8.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 9,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_9.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 10,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_10.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 11,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_11.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
          },
          {
            "id": 12,
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_partner_12.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
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