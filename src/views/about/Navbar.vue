<template>
  <div>
    <!-- Second Navbar (The sticky one) -->
    <div class="container">
      <div class="row">
        <div class="col-10 ps-0 pe-0">
          <nav class="navbar navbar-expand-lg" style="justify-content: center">
            <!-- Burger icon for mobile view -->
            <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarNav" aria-expanded="isNavbarOpen" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div class="navbar-collapse" :class="{ show: isNavbarOpen }">
              <ul class="navbar-links mx-auto">
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'direksi' }"
                      @click.prevent="selectTab('direksi')"
                  >
                    Direksi & Komisaris
                  </a>
                </li>
                <a class="divider"></a>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'shareholders' }"
                      @click.prevent="selectTab('shareholders')"
                  >
                    Pemegang Saham
                  </a>
                </li>
                <a class="divider"></a>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'sertifikasi' }"
                      @click.prevent="selectTab('sertifikasi')"
                  >
                    Sertifikasi
                  </a>
                </li>
                <a class="divider"></a>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'statistik' }"
                      @click.prevent="selectTab('statistik')"
                  >
                    Statistik
                  </a>
                </li>
                <a class="divider"></a>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'laporan' }"
                      @click.prevent="selectTab('laporan')"
                  >
                    Laporan Keuangan
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <!-- Content Section -->
          <div class="content-section">
            <div v-if="selected === 'direksi'">
              <DirectorCommissioner/>
            </div>
            <div v-if="selected === 'shareholders'">
              <Shareholders/>
            </div>
            <div v-if="selected === 'sertifikasi'" class="content-widget">
              <Certification/>
            </div>
            <div v-if="selected === 'statistik'" class="content-widget">
              <Statistic/>
            </div>
            <div v-if="selected === 'laporan'" class="content-widget">
              <FinancialReport/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Information} from "@/views/home/index.js";
import DirectorCommissioner from "./DirectorCommissioner.vue";
import Shareholders from "./Shareholders.vue";
import Certification from "./Certification.vue";
import Statistic from "./StatisticDashboard.vue";
import FinancialReport from "./FinancialReport.vue";

export default {
  name: "Navbar",
  components: {
    Information,
    Statistic,
    DirectorCommissioner,
    Shareholders,
    Certification,
    FinancialReport,
  },
  data() {
    return {
      selected: "direksi", // Default selected content
      isSticky: false, // To manage sticky state
      isNavbarOpen: false, // To manage the burger menu open/close state
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    selectTab(tab) {
      this.selected = tab;
      this.isNavbarOpen = false; // Close the menu after selecting
    },
    handleScroll() {
      const contentAboveNavbar = document.querySelector(".ud-header");

      // Get the height of the content above the navbar
      const contentHeight = contentAboveNavbar ? contentAboveNavbar.offsetHeight : 0;

      // Calculate the sticky position based on the height of the content above
      const sticky = contentHeight;

      // Make navbar sticky once the scroll passes the height of the content above
      this.isSticky = window.scrollY >= sticky;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
/* Burger icon styling */
.navbar-toggler {
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 24px;
  padding: 1px;
  display: none; /* Hide by default, show on mobile */
}

/* Show the burger icon on smaller screens */
@media (max-width: 768px) {
  .navbar-toggler {
    display: block;
    background-color: white;
    color: black;
    font-size: 40px;
    height: auto;
  }

  .navbar-collapse {
    display: none;
  }

  .navbar-collapse.show {
    display: block;
    background-color: white;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar-links {
    flex-direction: column;
    align-items: center;
  }

  .navbar-link {
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  .divider {
    display: none; /* Hide dividers on mobile */
  }
}

/* Desktop Styles */
.navbar {
  position: sticky;
  top: 117px; /* Adjust based on the height of your first navbar */
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%; /* Change this to your preferred width */
  margin: -240px auto -300px auto; /* Center the navbar */
  z-index: 2;
  transition: top 0.3s;

}


.navbar-links {
  list-style: none;
  display: flex;
  flex-grow: 1;
  /* Makes the links take up equal space */
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
}

.navbar-link {
  -webkit-text-size-adjust: auto;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px 0;
  cursor: pointer;
}

.navbar-link.active {
  color: #007bff;
}

.navbar-link:hover {
  color: #0056b3;
}

.navbar-link:not(:last-child) {
  border-right: 1px solid #e0e0e0;
}

/* Content Section Styling */
.content-section {

  padding: 0;
  width: 100%;
  margin: 20rem 0 5rem 0;
}


.content-widget h2 {
  margin-top: 0;
  font-size: 24px;
  color: #333;
}

.content-widget p {
  color: #666;
}

.divider {
  width: 1px;
  background-color: #dddddd;
  margin: 0 20px;
}



</style>

