<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
    :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/image/home-banner-1.png" class="d-block w-100" alt="home-banner-1">
      </div>
      <div class="carousel-item">
        <img src="@/assets/image/home-banner-2.png" class="d-block w-100" alt="home-banner-2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      intervalBanner: 8000,
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
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

</style>