<template>
  <div class="ud-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 navbar-float">
          <nav class="navbar navbar-expand-lg">
            <div class="navbar-tkb">
              <div class="navbar-brand" >
                <p>TKB0: 96.39%</p>
              </div>
            </div>
            <div class="navbar-tkb">
              <div class="navbar-brand">
                <p>TKB30: 96.39%</p>
              </div>
            </div>
            <div class="navbar-tkb">
              <div class="navbar-brand">
                <p>TKB60: 96.39%</p>
              </div>
            </div>
            <div class="navbar-tkb">
              <div class="navbar-brand">
                <p>TKB90: 96.39%</p>
              </div>
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
                      <router-link to="/" exact-active-class="active-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/pendanaan" exact-active-class="active-link">Pendanaan</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/tentang" exact-active-class="active-link">Tentang Kami</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/blog" exact-active-class="active-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/bantuan" exact-active-class="active-link">Bantuan</router-link>
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
@media (max-width: 768px) {
  .navbar-brand p {
    font-size: 10px;
    padding: 0 5px;
  }
}
</style>

<script>

import '@/assets/main.css'

export default {
  name: 'Header',
}


"use strict";

// ======= Sticky
window.onscroll = function () {
  const ud_header = document.querySelector(".ud-header");
  const sticky = ud_header.offsetTop;

  if (window.pageYOffset > sticky) {
    ud_header.classList.add("sticky");
  } else {
    ud_header.classList.remove("sticky");
  }

}
</script>