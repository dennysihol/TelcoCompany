<template>
  <div class="help-page pb-5">
    <!-- Container for FAQ and Contact Sections -->
    <div class="row-container">

      <!-- FAQ Section -->
      <div class="faq-section">
        <h2 class="section-title">
          <img src="../../assets/image/ic_chat_check.png" alt="icon" class="title-icon" />
          Hubungi Kami
        </h2>

        <!-- Accordion items -->
          <div class="accordion-custom" v-for="(faq, index) in faqs" :key="index">
            <div class="accordion-title" @click="toggleFAQ(index)">
              <h6>{{ faq.question }}</h6>
              <span class="accordion-arrow">{{ faq.open ? '⌵' : '⌵' }}</span>
            </div>
            <div class="accordion-content" v-if="faq.open">
              <template v-if="faq.isList">
                <ol>
                  <li v-for="(step, stepIndex) in faq.answerList" :key="stepIndex">
                    {{ step }}
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
          <h6>Kirim email ke:</h6>
          <p><a href="mailto:cs@stafonfortek.com">cs@stafonfortek.com</a></p>
        </div>
        <div class="contact-card whatsapp-card">
          <h6>Whatsapp ke:</h6>
          <p><a href="https://wa.me/628119079508" target="_blank">0811-1907-9508</a></p>
        </div>
        <div class="contact-card phone-card">
          <h6>Telepon ke:</h6>
          <p><a href="tel:021-2789-9995">021-2789-9995</a></p>
        </div>
        <h2 class="section-title">
          <img src="@/assets/image/icon-pengaduan.png" alt="icon" class="title-icon" />
          Hubungi Kami
        </h2>
        <div class="contact-card email-card">
          <h6>Kirim email ke:</h6>
          <p><a href="mailto:penagihan@stafonfortek.com">penagihan@stanfordtek.com</a></p>
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
          question: "Apa itu PinjamDuit?",
          answer: "PinjamDuit adalah platform peer-to-peer lending yang membantu masyarakat mengatasi masalah keuangan dengan menyediakan pinjaman uang secara mudah dan cepat. Platform ini telah berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK).",
          open: false,
          isList: false
        },
        {
          question: "Bagaimana Cara Mendaftar di PinjamDuit?",
          answerList: [
            "Unduh Aplikasi: Download aplikasi PinjamDuit dari App Store atau Play Store.",
            "Masuk ke Aplikasi: Buka aplikasi PinjamDuit.",
            "Masukkan Nomor Telepon: Masukkan nomor telepon Anda untuk menerima kode OTP.",
            "Masukkan Kode OTP: Setelah menerima kode OTP, masukkan kode tersebut.",
            "Isi Informasi Pribadi: Isi informasi pribadi Anda dan klik simpan.",
            "Masukkan Nomor Kontak Darurat: Masukkan nomor kontak darurat dan klik simpan.",
            "Informasi E-KTP dan Verifikasi Wajah: Masukkan informasi E-KTP Anda, lakukan verifikasi wajah, dan klik simpan.",
            "Pilih Rekening Bank: Pilih rekening bank yang akan Anda gunakan dan masukkan nomor rekening Anda, lalu klik simpan.",
            "Verifikasi Data: Sistem akan memverifikasi data Anda dan memberikan informasi mengenai limit pinjaman Anda."
          ],
          open: false,
          isList: true // Indicate this is a list answer
        },
        {
          question: "Berapa Limit Pinjaman di PinjamDuit?",
          answer: "Limit pinjaman berbeda untuk setiap peminjam, mulai dari Rp100.000 hingga Rp20.000.000.",
          open: false,
          isList: false
        },
        {
          question: "Bagaimana Cara Membayar Pinjaman ke PinjamDuit?",
          answerList: [
            "Masuk ke aplikasi PinjamDuit.",
            "Di halaman utama, klik tombol \"Bayar Sekarang\".",
            "Anda dapat memilih untuk membayar pinjaman secara bertahap atau sekaligus.",
            ],
          open: false,
          isList: true // Indicate this is a list answer
        },
        {
          question: "Apakah Bisa Kembali Meminjam di PinjamDuit Setelah Melunasi Pinjaman Sebelumnya?",
          answer: "Ya, Anda bisa mengajukan pinjaman kembali setelah melunasi pinjaman sebelumnya. Jika hasil review dari sistem baik, Anda bahkan bisa meningkatkan limit pinjaman Anda.",
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
