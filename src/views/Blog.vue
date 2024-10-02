<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
       :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in dataBanner" :key="item.id">
        <img :src="item.urlImage" class="d-block w-100" :alt="'home-banner-'+item.id">
      </div>
    </div>
  </div>
  <section class="ud-hero" id="blog">
    <Article/>
  </section>
</template>

<script>
import {
  Article,
} from './blog/index.js';
export default {
  name: 'Blog',
  components: {
    Article,
  },
  data() {
    return {
      intervalBanner: 8000,
      dataBanner: [
        {
          "id": 1,
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fbg-blog.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
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
    display: flex !important;           /* Enables flexbox */
    justify-content: center; /* Centers horizontally */
    align-items: center;     /* Centers vertically */
    text-align: start;      /* Optional: Centers text within the element */
  }

  .carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .carousel-item {
      top: 7rem;
      max-height: 60vh;

      img {
        height: 20rem;
      }
      
      .banner-title {
        padding: 10px;
        font-size: 2rem;
      }
    }
  }
</style>