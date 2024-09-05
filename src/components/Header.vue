<template>
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
              <div class="d-flex justify-content-between w-100">
                <div>
                  <a class="ud-menu-scroll" href="/">
                    <img src="../assets/image/logo_pjd.png" alt="Logo" style="height: 34px; margin-right: 8px;" />
                    <img src="../assets/image/logo_afpi.png" alt="Logo" style="height: 24px;" />
                  </a>
                </div>
                <div>
                  <ul id="nav" class="navbar-nav mx-auto">
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
              </div>
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
</style>

<script>

import '@/assets/main.css'

export default {
  name: 'Header',
}
</script>