<template>
  <div>
    <!-- Second Navbar (The sticky one) -->
    <div class="container">
      <div class="row">
        <div class="col-10 ps-0 pe-0">
          <nav class="navbar">
            <div class="navbar-collapse">
              <ul class="navbar-links">
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'direksi' }"
                      @click.prevent="selected = 'direksi'"
                  >
                    Direksi & Komisaris
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'sertifikasi' }"
                      @click.prevent="selected = 'sertifikasi'"
                  >
                    Sertifikasi
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'statistik' }"
                      @click.prevent="selected = 'statistik'"
                  >
                    Statistik
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      class="navbar-link"
                      :class="{ active: selected === 'laporan' }"
                      @click.prevent="selected = 'laporan'"
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
            <div v-if="selected === 'sertifikasi'" class="content-widget">
              <h2>Sertifikasi</h2>
              <p>Content for Sertifikasi goes here...</p>
            </div>
            <div v-if="selected === 'statistik'" class="content-widget">
              <p>
                <Statistic/>
              </p>
            </div>
            <div v-if="selected === 'laporan'" class="content-widget">
              <h2>Laporan Keuangan</h2>
              <p>Content for Laporan Keuangan goes here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

import {Statistic} from "@/views/statistic/index.js";
import {Information} from "@/views/home/index.js";

export default {
  name: "Navbar",
  components: {
    Information,
    Statistic
  },
  data() {
    return {
      selected: "direksi", // Default selected content
      isSticky: false, // To manage sticky state
      tabSelected: "directorCommissioner",
      dataDirectorCommissioner: [
        {
          "id": 1,
          "name": 'Hendri',
          "role": "Direktur Utama",
          "dateArticle": "26 Mar 2023",
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdirut.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
        },
        {
          "id": 2,
          "name": 'Jun Zhang',
          "role": "Direktur",
          "dateArticle": "13 Maret 2022",
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdirektur.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
        }
      ],
    };
  },
  methods: {
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
    DirectorCommissioner;
  },
  beforeDestroy() {
    window.removeEventListener('scroll',
      this.handleScroll);
  },
};
</script>

<style scoped>
/* First Navbar Styling */
.top-navbar {
  background-color: #007bff;
  height: 60px;
  /* Add your other styling for the first navbar here */
}

/* Second Navbar Styling */
.navbar {
  position: sticky;
  top: 100px; /* Adjust the value based on the height of your first navbar */
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: -300px 0;
  width: 100%;
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
  margin: 0 auto;
  position: relative;
  top: 320px;
  z-index: 1;
}



.content-widget h2 {
  margin-top: 0;
  font-size: 24px;
  color: #333;
}

.content-widget p {
  color: #666;
}

</style>
