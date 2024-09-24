<template>
  <div class="content-section2 ">
    <div class="col-lg-10 article-gap w-100">
      <h1 style="margin-top: 20px; margin-left: 20px;">Direksi</h1>
      <div class="row d-flex justify-content-center gap-5">
        <div class="col-md-3" v-for="item in dataDirector" :key="item.id">
          <div class="card-article d-flex flex-column pb-3">
            <div class="card-article-image">
              <img :src="item.urlImage" class="w-100" alt="item-article-1">
            </div>
            <div class="card-article-title">{{ item.name }}</div>
            <div class="card-article-date d-flex">
              {{ item.role }}
            </div>
            <div class="card-article-read-more" style="margin-top: 10px;">
              Lihat Profile
              <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin: 50px 40px 40px 40px;">
      <span style="color: #2B2B2B;">Direksi adalah organ Perusahaan yang bertanggung jawab atas pengurusan Perusahaan.
        Direksi wajib dengan itikad
        baik dan penuh tanggung jawab demi sebesar-besar kepentingan Perusahaan, mengelola bisnis dan urusan Perusahaan
        dengan tetap memperhatikan keseimbangan kepentingan seluruh pihak yang berkepentingan dengan aktivitas
        Perusahaan.
      </span>
      <span style="margin-top: 30px; color: #525252; font-weight: 700;">
        Secara umum, tugas utama Direksi adalah sebagai berikut:
      </span>
      <ul style="list-style-type: disc; margin-top: 30px; text-align: justify; margin-right: 30px;">
        <li>Menetapkan kebijakan pengurusan Perseroan;</li>
        <li>Mengatur penyerahan kekuasaan Direksi untuk mewakili Perseroan di dalam dan di luar pengadilan kepada
          seorang
          atau beberapa orang anggota Direksi yang khusus ditunjuk untuk itu atau kepada seorang atau beberapa orang
          pegawai Perseroan baik sendiri-sendiri maupun bersama-sama atau kepada orang lain;</li>
        <li>Mengatur ketentuan-ketentuan tentang kepegawaian Perseroan termasuk penetapan gaji, pensiun atau jaminan
          hari
          tua dan penghasilan lain (jika ada) bagi pegawai Perseroan berdasarkan peraturan perundang-undangan yang
          berlaku;</li>
        <li>Mengangkat dan memberhentikan pegawai Perseroan berdasarkan peraturan kepegawaian Perseroan dan peraturan
          perundang-undangan yang berlaku;</li>
        <li>Melakukan segala tindakan dan perbuatan lainnya mengenai pengurusan maupun pemilikan kekayaan Perseroan,
          mengikat Perseroan dengan pihak lain dan/atau pihak lain dengan Perseroan, serta mewakili Perseroan di dalam
          dan
          di luar pengadilan tentang segala hal dan segala kejadian, dengan pembatasan sebagaimana diatur dalam
          peraturan
          perundang-undangan, Anggaran Dasar dan/atau Keputusan RUPS.</li>
      </ul>
    </div>
  </div>
  <div class="content-section2" style="margin: 50px 0 50px 0;">
    <div class="col-lg-10 article-gap w-100">
      <h1 style="margin-top: 20px; margin-left: 20px;">Komisaris</h1>
      <div class="row d-flex justify-content-center gap-5">
        <div class="col-md-3" v-for="item in dataCommissioner" :key="item.id">
          <div class="card-article d-flex flex-column pb-3">
            <div class="card-article-image">
              <img :src="item.urlImage" class="w-100" alt="item-article-1">
            </div>
            <div class="card-article-title">{{ item.name }}</div>
            <div class="card-article-date d-flex">
              {{ item.role }}
            </div>
            <div class="card-article-read-more" style="margin-top: 10px;">
              Lihat Profile
              <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin: 50px 40px 40px 40px;">
      <span style="color: #2B2B2B;">Dewan Komisaris adalah organ Perseroan yang mengawasi kebijakan Direksi dan
        memberikan saran kepada Direksi dalam melaksanakan tugas manajemennya.
      </span>
      <span style="margin-top: 30px; color: #525252; font-weight: 700;">
        Secara umum, tugas utama Dewan Komisaris adalah sebagai berikut:
      </span>
      <ul style="list-style-type: disc; margin-top: 30px; text-align: justify; margin-right: 30px;">
        <li>
          Memberikan nasihat kepada Direksi dalam melaksanakan pengurusan Perseroan;
        </li>
        <li>
          Mengikuti perkembangan kegiatan Perseroan, memberikan pendapat dan saran kepada RUPS mengenai setiap masalah
          yang dianggap penting bagi kepengurusan Perseroan;
        </li>
        <li>
          Meneliti dan menelaah laporan berkala dan laporan tahunan yang disiapkan Direksi serta menandatangani
          laporan tahunan;
        </li>
        <li>
          Membuat risalah rapat Dewan Komisaris dan menyimpan salinannya;
        </li>
        <li>
          Memberikan laporan tentang tugas pengawasan yang telah dilakukan selama tahun buku sebelumnya kepada RUPS;
        </li>
        <li>
          Melaksanakan kewajiban lainnya dalam rangka tugas pengawasan dan pemberian nasihat, sepanjang tidak
          bertentangan dengan peraturan perundang-undangan, Anggaran Dasar, dan/atau keputusan RUPS.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectorCommissioner',
  data() {
    return {
      tabSelected: "director",
      dataDirector: [
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
      dataCommissioner: [
        {
          "id": 1,
          "name": 'Maximilianus Maria Kolbe Fair Antero',
          "role": "Komisaris",
          "dateArticle": "26 Mar 2023",
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fkomisaris.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
        },
      ],
      loading: false,
      error: null,
    };
  },
  methods: {
    handleTab(nameTab) {
      this.tabSelected = nameTab;
    }
  }

}
</script>
<style scoped>
/* Content Section Styling */
.content-section2 {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0 0 30px 0;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.bg-article {
  background: rgba(246, 251, 255, 1);
}

.container-article {
  padding: 5rem 0 5rem 0;
}

.article-gap {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card-article {
  border: 1px solid rgba(217, 217, 217, 1);
  background: rgba(255, 255, 255, 1);
  border-radius: 14px;
  padding: 0 0 10px 20px;

  .card-article-image {
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100%;
      border-radius: 0 10px 0 10px;
    }
  }

  .card-article-date {
    font-size: 16px;
    font-weight: 400;
    color: #737373;
  }

  .card-article-title {
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
    width: 14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .card-article-read-more {
    color: rgba(43, 43, 43, 1);
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>