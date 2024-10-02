<template>
  <div class="ud-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 navbar-float">
          <nav class="navbar navbar-expand-lg">
            <div class="navbar-tkb" v-for="(item, index) in tkbData.dataPercentage" :key="index">
              <div class="navbar-brand">
                <p>{{ item.tkbName }}: <span>{{ item.tkb }}%<b/></span></p>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-lg-10" style="background-color: white; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px;">
          <nav class="navbar navbar-expand-lg" style="justify-content: center">
            <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarNav" aria-expanded="isNavbarOpen" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
              <div class="d-flex justify-content-center w-100">
                <div class="container-image">
                  <a class="ud-menu-scroll" href="/">
                    <img src="../assets/image/logo_pjd.png" alt="Logo" style="height: 34px; margin-right: 8px;" />
                    <img src="../assets/image/logo_afpi.png" alt="Logo" style="height: 24px;" />
                  </a>
                </div>
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
}

u {
  text-decoration-color: #e91e63;
}

.navbar-collapse {
  background-color: white; /* Change the background color of the dropdown */
  border-radius: 8px; /* Optional: add rounded corners */
  padding: 10px 0; /* Optional: add some padding */
}

.nav-item {
  margin: 0; /* Ensure no margin on the nav items */
}

.nav-link {
  padding: 10px 15px; /* Add padding to each nav item for better spacing */
  color: #333; /* Change text color */
}

.nav-link:hover {
  background-color: #e91e63; /* Background color on hover */
  color: white; /* Change text color on hover */
}

/* Center the nav items in the burger menu */
@media (max-width: 768px) {
  .navbar-brand p {
    font-size: 10px;
    padding: 0 5px;
  }
  .container-image {
    display: none;
  }
}
</style>

<script>
import '@/assets/main.css';
import axios from 'axios';

export default {
  name: 'Header',
  data() {
    return {
      isNavbarOpen: false, // State to track the navbar's open/close status
      dataStatistic: {
        tkb60: "0",
        tkb0: "0",
        tkb30: "0",
      },
    };
  },
  computed: {
    tkbData() {
      return {
        dataPercentage: [
          {
            tkbName: "TKB 0",
            tkb: this.dataStatistic.tkb0,
            tkbDesc: "TKB0 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 0 (nol) hari kalender terhitung sejak jatuh tempo.",
          },
          {
            tkbName: "TKB 30",
            tkb: this.dataStatistic.tkb30,
            tkbDesc: "TKB30 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 30 (tiga puluh) hari kalender terhitung sejak jatuh tempo.",
          },
          {
            tkbName: "TKB 60",
            tkb: this.dataStatistic.tkb60,
            tkbDesc: "TKB60 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 60 (enam puluh) hari kalender terhitung sejak jatuh tempo.",
          },
          {
            tkbName: "TKB 90",
            tkb: this.dataStatistic.tkb90,
            tkbDesc: "TKB90 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 90 (sembilan puluh) hari kalender terhitung sejak jatuh tempo.",
          },
        ]
      };
    },
  },
  methods: {
    fetchData() {
      axios.post('https://api.pinjamduit.co.id/gw/loan/credit-app/tkb90?deviceId=WEB&clientType=web&appMarket=web&appVersion=99.99.99')
          .then(response => {
            this.dataStatistic = response.data.data;
          })
          .catch(error => {
            console.error("Error fetching data: ", error);
          });
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen; // Toggle navbar open/close state
    }
  },
  mounted() {
    this.fetchData();
  },
};

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
