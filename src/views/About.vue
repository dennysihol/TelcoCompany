<template>
  <div id="app">
    <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
         :data-bs-interval="intervalBanner" data-bs-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/image/bg-tentang.png" class="d-block w-100" alt="home-banner-3">
          <div class="banner-content">
            <!-- Add other content as needed -->
          </div>
        </div>
      </div>
    </div>
    <Navbar />
    <!-- Rest of your app -->
  </div>
</template>
<script>
import {Navbar} from "@/views/about/index.js";

export default {
  name: "About",
  components: {
    Navbar,
  },
  data() {
    return {
      intervalBanner: 8000,
    };
  },
};
</script>
<style scoped>
.carousel-item {
  position: relative;
  width: 100%;
  height: 100vh; /* Full screen height for larger screens */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Align text centrally */
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the whole area */

}

/* Style for banner content */
.banner-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
}

.banner-title {
  font-weight: 600;
  font-size: 3rem;
  max-width: 60rem;
}

/* Mobile responsive styling */
@media (max-width: 768px) {
  .carousel-item {
    height: 70vh; /* Reduce height for smaller screens */
  }

  .banner-title {
    font-size: 2rem; /* Adjust title size for mobile screens */
    max-width: 90%; /* Ensure content fits within the screen */
  }
}
</style>
