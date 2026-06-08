<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
       :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner-2">
      <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in dataBanner" :key="item.id">
        <img :src="item.urlImage" class="d-block w-100" :alt="'home-banner-'+item.id">
      </div>
    </div>
  </div>
  <section class="ud-hero-2" id="blog">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  components: {
  },
  data() {
    return {
      intervalBanner: 8000,
      dataBanner: [
        {
          "id": 1,
          "urlImage": new URL('../assets/image/bg-tentang.png', import.meta.url).href
        }
      ],
      loading: true,
      error: null,
    };
  },
}
</script>

<style scoped>
  .carousel-inner-2 {
    height: calc(100vh - 18rem);
    overflow: visible;
  }
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
    .ud-hero-2 {
        padding-top: 0;
    }
    .carousel-inner-2 {
      height: calc(100vh - 30rem);
    }
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