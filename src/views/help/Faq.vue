<template>
  <div class="help-page pb-5">
    <!-- Container for FAQ and Contact Sections -->
    <div class="row-container">

      <!-- FAQ Section -->
      <div class="faq-section">
        <h2 class="section-title">
          <img src="../../assets/image/ic_chat_check.png" alt="icon" class="title-icon" />
          Yang Sering Ditanyakan
        </h2>

        <!-- Accordion items -->
          <div class="accordion-custom" v-for="(faq, index) in faqs" :key="index">
            <div class="accordion-title" @click="toggleFAQ(index)">
              <h6>{{ faq.question }}</h6>
              <span class="accordion-arrow">{{ faq.open ? '⌵' : '⌵' }}</span>
            </div>
            <div class="accordion-content" v-if="faq.open">
              <template v-if="faq.isList">
                <ol class="ps-0">
                  <li v-for="(step, stepIndex) in faq.answerList" :key="stepIndex" v-html="step">
                  </li>
                </ol>
              </template>
              <template v-else>
                <p>{{ faq.answer }}</p>
              </template>
            </div>
          </div>
        </div>

      <!-- Contact Section -->
      <div class="contact-section">
        <h2 class="section-title">
          <img src="@/assets/image/ic_telpon_purple.png" alt="icon" class="title-icon" />
          Hubungi Kami
        </h2>
        <h6 class="section-sub-title">Tidak menemukan yang kamu cari?</h6>
        <div class="contact-card email-card">
          <h6>Layanan Pengguna:</h6>
          <p><a href="mailto:cs@stanfordtek.com">cs@stanfordtek.com</a></p>
        </div>
        <div class="contact-card whatsapp-card">
          <h6>Whatsapp ke:</h6>
          <p><a href="https://wa.me/628119079508" target="_blank">0811-1907-9508</a></p>
        </div>
        <div class="contact-card phone-card">
          <h6>Telepon ke:</h6>
          <p><a href="tel:021-2789-9995">021-2789-9995</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // FAQ items
      faqs: [
        {
          question: "Apa itu PT. Datatel Indonesia?",
          answer: "PT. Datatel Indonesia adalah perusahaan kontraktor profesional yang berdiri sejak 2004 dan melayani pengadaan barang, jasa konstruksi, dan pembangunan menara telekomunikasi BTS, rumah, kantor, pabrik, dan bangunan komersial di seluruh Indonesia.",
          open: false,
          isList: false
        },
        {
          question: "Layanan Apa Saja yang Kami Tawarkan?",
          answerList: [
            `<ul style="list-style-type: decimal;">
              <li>Pengadaan dan Konstruksi Menara BTS</li>
              <li>Pembangunan Gedung dan Kantor</li>
              <li>Konstruksi Pabrik dan Bangunan Industri</li>
              <li>Pembangunan Bangunan Komersial</li>
              <li>Jasa Maintenance dan Perbaikan Infrastruktur</li>
            </ul>`,
          ],
          open: false,
          isList: true
        },
        {
          question: "Bagaimana Proses Konsultasi Proyek?",
          answer: `Hubungi tim kami melalui email atau WhatsApp. Kami akan melakukan konsultasi awal untuk memahami kebutuhan proyek Anda, melakukan survei lokasi, dan memberikan proposal yang sesuai.`,
          open: false,
          isList: false
        },
        {
          question: "Berapa Durasi Umum Pelaksanaan Proyek?",
          answerList: [
            `<ul style="list-style-type: decimal;">
              <li>Menara BTS: 2-4 bulan (tergantung tinggi dan kompleksitas)</li>
              <li>Gedung Kantor: 6-12 bulan (tergantung luasan)</li>
              <li>Pabrik/Komersial: Disesuaikan dengan desain dan spesifikasi</li>
            </ul>`
            ],
          open: false,
          isList: true
        },
        {
          question: "Apakah Proyek Dijamin Kualitas dan Tepat Waktu?",
          answer: "Kami berkomitmen memberikan kualitas terbaik dengan standar internasional dan selalu memenuhi jadwal proyek yang telah disepakati. Semua proyek dilengkapi sertifikasi dan dokumentasi lengkap.",
          open: false,
          isList: false
        }
      ]
    };
  },
  methods: {
    toggleFAQ(index) {
      // Close all other FAQs
      this.faqs.forEach((faq, i) => {
        faq.open = i === index ? !faq.open : false; // Open the clicked one, close others
      });
    }
  }
};
</script>

<style scoped>
.help-page {
  margin-top: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}

.banner-image {
  width: 100%;
  height: auto;
}

.row-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  z-index: 1;
  max-width: 1250px;
}

.section-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.section-sub-title {
  font-size: 16px;
  margin-bottom: 15px;
}

.faq-section {
  width: 50%;
  background: transparent;
}

.accordion-custom {
  margin: 20px;
  transition: border-radius 0.3s ease;
  border-radius: 15px 15px 150px 15px;
  border: 0;
}

.accordion-title {
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.accordion-content {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

.accordion-title:hover {
  background-color: #f0f0f0;
}

.accordion-icon {
  font-size: 1.2rem;
  margin-left: 10px;
}

.title-icon {
  width: 30px;
  height: auto;
  margin-right: 10px;
  vertical-align: middle;
}

.contact-section {
  width: 35%;
  background: transparent;
}

.contact-card {
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
  background: #E7F4FE;
}

.contact-card h6 {
  margin: 0 0 10px 0;
}

.contact-card a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.contact-card a:hover {
  text-decoration: underline;
}

/* Mobile-Friendly Adjustments */
@media (max-width: 768px) {
  .row-container {
    flex-direction: column; /* Stack the FAQ and Contact sections */
    width: 100%; /* Full width for mobile */
  }

  .faq-section,
  .contact-section {
    width: 100%; /* Full width for each section on mobile */
  }

  .faq-section,
  .contact-section {
    margin-bottom: 20px; /* Space between sections */
  }

  .section-title {
    font-size: 1.2rem; /* Slightly smaller font size */
  }

  .section-sub-title {
    font-size: 1rem; /* Smaller font for subtitles */
  }

  .accordion-title {
    padding: 15px; /* Reduce padding for better fit */
  }

  .accordion-content {
    padding: 15px; /* Reduce padding for better fit */
  }

  .title-icon {
    width: 25px; /* Smaller icon on mobile */
  }

  .contact-card {
    padding: 10px; /* Smaller padding on mobile */
  }

  .contact-card h6 {
    font-size: 1rem; /* Adjust heading size */
  }

  .contact-card a {
    font-size: 1rem; /* Adjust link size */
  }
}
</style>
