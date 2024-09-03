<template>
  <div class="container">
        <div class="row">
          <div
            class="col-lg-10"
            style="
              background-color: #0087ff;
              border-top-left-radius: 14px;
              border-top-right-radius: 14px;
            "
          >
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="index.html">
                <img src="#" alt="Logo" />
              </a>
            </nav>
          </div>
          <div
            class="col-lg-10"
            style="
              background-color: white;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
            "
          >
            <nav
              class="navbar navbar-expand-lg"
              style="justify-content: center"
            >
              <button class="navbar-toggler">
                <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
              </button>

              <div class="navbar-collapse">
                <ul id="nav" class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#home">Beranda</a>
                  </li>

                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#about">Tentang Kami</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#service">Layanan Kami</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#team">Team Kami</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#client">Klien Kami</a>
                  </li>
                  <li class="nav-item">
                    <a class="ud-menu-scroll" href="#contact">Hubungi Kami</a>
                  </li>
                </ul>
              </div>
            </nav>
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
</style>

<script>
  export default {
    name : 'Header',
  }
</script>