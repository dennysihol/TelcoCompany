<template>
  <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel" :data-bs-interval="intervalBanner" data-bs-pause="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/image/home-banner-1.png" class="d-block w-100" alt="home-banner-1">
      </div>
      <div class="carousel-item">
        <img src="@/assets/image/home-banner-2.png" class="d-block w-100" alt="home-banner-2">
      </div>
    </div>
  </div>
  <div class="ud-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-10" style="
              background-color: #0087ff;
              border-top-left-radius: 14px;
              border-top-right-radius: 14px;
              align-items: end;
              box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            ">
          <nav class="navbar navbar-expand-lg">
            <div class="navbar-tkb">
              <a class="navbar-brand" href="#">
                <h6>TKB0: 96.39%</h6>
              </a>
            </div>
            <div class="navbar-tkb">
              <a class="navbar-brand" href="#">
                <h6>TKB0: 96.39%</h6>
              </a>
            </div>
            <div class="navbar-tkb">
              <a class="navbar-brand" href="#">
                <h6>TKB0: 96.39%</h6>
              </a>
            </div>
            <div class="navbar-tkb">
              <a class="navbar-brand" href="#">
                <h6>TKB0: 96.39%</h6>
              </a>
            </div>
          </nav>
        </div>
        <div class="col-lg-10" style="
              background-color: white;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
            ">
          <nav class="navbar navbar-expand-lg" style="justify-content: center">
            <button class="navbar-toggler">
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
            </button>

            <div class="navbar-collapse">
              <ul id="nav" class="navbar-nav mx-auto">
                <li class="nav-item" style="margin-left: -36px;">
                  <a class="ud-menu-scroll" href="/">
                    <img src="../assets/image/logo_pjd.png" alt="Logo" style="height: 34px; margin-right: 8px;" />
                    <img src="../assets/image/logo_afpi.png" alt="Logo" style="height: 24px;" />
                  </a>
                </li>
                <li class="nav-item" style="width: 291px;">
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="/pendanaan">Pendanaan</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="/tentang">Tentang Kami</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="/blog">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="ud-menu-scroll" href="/bantuan">Bantuan</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg.container-fluid {
  background-color: #e91e63;
  background-size: cover;
}

.content {
  background-color: rgba(255, 255, 255, 0.5);

  @media (min-width: 992px) {
    background-color: transparent;
  }
}

u {
  text-decoration-color: #e91e63;
}

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

<script>

import '@/assets/main.css'

export default {
  name: 'Header',
  data() {
    return {
      intervalBanner: 8000,
      loading: true,
      error: null,
    };
  },
}
</script>