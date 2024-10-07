<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
       :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in dataBanner"
           :key="item.id">
        <img :src="item.urlImage" class="d-block w-100" :alt="'home-banner-' + item.id">
      </div>
    </div>
  </div>
  <section class="ud-hero" id="help">
    <Faq/>
    <UserComplaint/>
    <CustomerService/>
  </section>
</template>

<script>
import {Faq, UserComplaint, CustomerService} from './help/index.js';

export default {
  name: 'Help',
  components: {
    Faq,
    UserComplaint,
    CustomerService,
  },
  data() {
    return {
      intervalBanner: 8000,
      dataBanner: [
        {
          "id": 1,
          "title": "Kami siap membantu jika mengalami kendala seputar aplikasi PinjamDuit",
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fbg-help-text.png?alt=media&token=271856b4-8189-4efd-8ee5-ca4dacd70083"
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
  width: 100%;
  height: 100vh; /* Set this to the desired height for full screen */
  display: flex !important;
  justify-content: left; /* Aligns items to the left */
  align-items: center; /* Centers vertically */
  text-align: start; /* Align text to the left */
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Ensures the image covers the entire area */
  height: 100%; /* Ensures the image covers the entire area */
  object-fit: cover; /* Ensures the image covers the area while maintaining aspect ratio */
}

@media (max-width: 768px) {
  .carousel-item {
    top: 10rem;
    max-height: 50vh;
    justify-content: center; /* Center the content horizontally */
  }

  .carousel-item img {
    height: auto; /* Keep aspect ratio */
    width: 100%; /* Full width */
  }

  /* Adjust the title for mobile screens */
  .banner-title {
    padding: 10px;
    font-size: 2rem;
    z-index: 1;
  }
}
</style>
