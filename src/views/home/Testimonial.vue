<template>
  <section id="testimonial" class="container mt-5 d-flex justify-content-center testimonial-section ps-0 pe-0">
    <div class="col-10">
      <div class="row d-flex justify-content-between">
        <div class="col-md-3 col-sm-3 pb-3">
          <div class="mb-2 fs-20">Testimonial</div>
          <div class="title fs-20">Apa yang mereka katakan tentang kami</div>
        </div>
        <div class="col-xl-9 col-md-8 col-sm-6 overflow-hidden">
          <div class="row w-sm-24">
            <swiper
                :slidesPerView="2"
                :slidesPerGroup="2"
                :centeredSlides="false"
                :slidesPerGroupSkip="0"
                :grabCursor="true"
                :spaceBetween="20"
                :keyboard="{
                  enabled: true,
                }"
                :breakpoints="{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20
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
              <swiper-slide v-for="item in dataTestimonial" :key="item.id">
                <div class="col-11">
                  <div class="card-testimonial">
                    <div class="comment">
                      {{ item.comment }}
                    </div>
                    <div class="d-flex flex-row justify-content-between">
                      <div class="col-4">
                        <div class="user-name">{{ item.username }}</div>
                        <div>
                          <img v-for="number in Array.from({ length: item.star }, (_, i) => i * 5 )" :key="number" class="icon-star" src="@/assets/image/icon-star.png" alt="icon-star">
                        </div>
                      </div>
                      <img :src="item.urlImage" :alt="'img-user-'+item.id">
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
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
        dataTestimonial: [
          {
            "id": 1,
            "comment": "Transfer cepat setelah Anda diverifikasi, tetapi saya hanya bisa membayar melalui transfer di BNI saja, tidak ada opsi bank lain. Mohon pertimbangkan untuk menambah lebih banyak akun bank. Tetap semangat, tim pinjamduit. Terima kasih",
            "star": 5,
            "username": "Google User",
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fimg-account-male.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
          },
          {
            "id": 2,
            "comment": "Saya tidak pernah berpikir meminjam uang bisa semudah ini. Aplikasi ini membuat prosesnya cepat, aman, dan bebas stres.",
            "star": 5,
            "username": "Payne Diel",
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fimg-account-male.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
          },
          {
            "id": 3,
            "comment": "Sangat membantu.. terima kasih banyak. Aplikasi pinjaman yang nyata.. proses cepat, mudah digunakan, dan dapat dipercaya",
            "star": 5,
            "username": "Clara Shinta",
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fimg-account-female.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
          },
          {
            "id": 4,
            "comment": "Proses sangat baik karena syarat dan ketentuan, dan saya puas menjadi klien. Tidak terlalu sulit untuk mendapatkan persetujuan selama memiliki kerjasama yang baik",
            "star": 5,
            "username": "Google User",
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fimg-account-male.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
          },
          {
            "id": 5,
            "comment": "Bagus, Simple, Cepat",
            "star": 5,
            "username": "Justinus U",
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fimg-account-male.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
          },
          {
            "id": 6,
            "comment": "Aplikasi ini mudah digunakan dan proses verifikasinya cukup cepat. Sangat membantu saat saya membutuhkan dana darurat. Terima kasih",
            "star": 5,
            "username": "Shinta Rusli",
            "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fimg-account-female.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
          },
        ],
        loading: false,
        error: null,
    };
  },

}
</script>
<style scoped>
.testimonial-section {
  height: 100%;
}

.fs-20 {
  font-size: 20px;
}

.title {
  font-weight: 700;
  width: 14rem;
}

.card-testimonial {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 10px;
  padding: 1rem;
  
  .comment {
    text-align: justify;
    height: 10rem;
    font-size: 14px;
    overflow-y: scroll;
  }
  .comment::-webkit-scrollbar {
    display: none;
  }

  .user-name {
    font-weight: 700;
    font-size: 16px;
  }

  .icon-star {
    max-width: 177px; /* Adjust the size of the logos */
    max-height: 16px;
    object-fit: contain;
  }
}

.swiper-slide img {
  max-width: 177px; /* Adjust the size of the logos */
  max-height: 56px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .title {
    width: 100%;
  }
  .w-sm-24 {
    width: 24rem;
  }
}
</style>