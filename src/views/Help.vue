<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
       :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in dataBanner" :key="item.id">
        <img :src="item.urlImage" class="d-block w-100" :alt="'home-banner-'+item.id">
        <!-- Text overlay -->
        <div class="banner-text">
          <h1>Kami siap membantu jika mengalami kendala seputar aplikasi PinjamDuit</h1>
        </div>
      </div>
    </div>
  </div>
  <section class="ud-hero" id="help">
    <CustomerService/>
  </section>
</template>

<script>
import {
  CustomerService,
} from './help/index.js';
export default {
  name: 'Help',
  components: {
    CustomerService,
  },
  data() {
    return {
      intervalBanner: 8000,
      dataBanner: [
        {
          "id": 1,
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fhelp_banner.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
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
  height: 100vh; /* Full screen height */
  display: flex !important; /* Enables flexbox */
  justify-content: start; /* Align content to the start (left) */
  align-items: center; /* Centers vertically */
}

.carousel-item img {
  position: absolute;
  top: 0;
  right: 0; /* Move image to the right */
  width: 60%; /* Take 60% of the width for the image */
  height: 100%; /* Ensure the image covers the full height */
  object-fit: cover; /* Make sure the image covers the container */
}

.banner-text {
  position: relative; /* Keeps the text relative to the container */
  color: black; /* Text color */
  font-size: 2rem; /* Adjust font size */
  padding: 20px;
  margin-left: 120px;
  width: 40%; /* Takes 40% of the width for the text */
  max-width: 800px; /* Optional: Max width for large screens */
  z-index: 1; /* Ensures the text is above the image */
}

@media (max-width: 768px) {
  .carousel-item {
    flex-direction: column; /* Stack text and image vertically */
    align-items: center; /* Center align for smaller screens */
  }

  .carousel-item img {
    width: 100%; /* Full width image for mobile */
    height: auto; /* Adjust the height */
  }

  .banner-text {
    width: 100%; /* Full width text for mobile */
    text-align: center; /* Center text for mobile */
    font-size: 1.5rem; /* Smaller font size */
  }
}
</style>
