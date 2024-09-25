<template>
  <div class="content-section2 ">
    <div class="col-lg-10 article-gap w-100">
      <h1 style="margin-top: 20px; margin-left: 20px;">Direksi</h1>
      <div class="row d-flex justify-content-center gap-5">
        <div class="col-md-3" v-for="item in dataDirector" :key="item.id">
          <div class="card-article2 d-flex flex-column pb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="selectedProfile(item)">
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
          <div class="card-article2 d-flex flex-column pb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="selectedProfile(item)">
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

  <!-- modal -->
  <div class="modal fade modal-info-profile" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="myModal">
    <div class="modal-dialog modal-xl">
        <div class="modal-content border-radius-8">
            <div class="modal-body p-0">
                <div class="row fs-14">
                    <div class="col-lg-3 p-5 border-radius-8" style="background-color: rgba(246, 251, 255, 1)">
                        <img class="image-profile" :src="dataSelected.urlImage" alt="img-1">
                        <div class="fw-bold">Nama :</div>
                        {{ dataSelected.name }} 
                        <div class="fw-bold">Kewarganegaraan :</div>
                        {{ dataSelected.citizenship }} 
                    </div>
                    <div class="col-lg-9 p-5 border-radius-8 position-relative">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <ul class="ps-0">
                            <li class="list-style-none fw-bold">Penunjukan</li>
                            <ul :class="dataSelected.appointment.length == 1 ? 'ps-0' : ''">
                                <li :class="dataSelected.appointment.length == 1 ? 'list-style-none' : ''" v-for="item in dataSelected.appointment">{{ item }}</li>
                            </ul>
                            <li class="list-style-none fw-bold">Pendidikan</li>
                            <ul :class="dataSelected.education.length == 1 ? 'ps-0' : ''">
                                <li :class="dataSelected.education.length == 1 ? 'list-style-none' : ''" v-for="item in dataSelected.education">{{ item }}</li>
                            </ul>
                            <li class="list-style-none fw-bold">Pengalaman kerja</li>
                            <ul :class="dataSelected.experience.length == 1 ? 'ps-0' : ''">
                                <li :class="dataSelected.experience.length == 1 ? 'list-style-none' : ''" v-for="item in dataSelected.experience">{{ item }}</li>
                            </ul>
                            <li class="list-style-none fw-bold">Hubungan afiliasi</li>
                            <ul :class="dataSelected.affiliateRelationships.length == 1 ? 'ps-0' : ''">
                                <li :class="dataSelected.affiliateRelationships.length == 1 ? 'list-style-none' : ''" v-for="item in dataSelected.affiliateRelationships">{{ item }}</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DirectorCommissioner',
  components: {},
  data() {
    return {
      tabSelected: "director",
      dataDirector: [
        {
          "id": 1,
          "name": 'Hendri',
          "role": "Direktur Utama",
          "citizenship": "Indonesia",
          "appointment": [
            "Akta Pernyataan Keputusan Para Pemegang Saham No.2 Tanggal 25 April 2022",
          ],
          "education": [
            "PhD (S3) in Strategic Management, Universal Institute of Professional Management (2022)",
            "Master (S2) of Business Administration, Calwest University (2021)",
            "Magister (S2) Manajemen jurusan Manajemen Strategik, STIE IPWIJA Jakarta (2015)",
          ],
          "experience": [
            "Direktur Utama di PT Stanford Teknologi Indonesia (2020-2022)",
            "Komisaris di PT Stanford Teknologi Indonesia (2019-2020)",
            "Komisaris Utama di PT Stanford Teknologi Indonesia (2018-2019)",
            "Komisaris di PT Stanford Teknologi Indonesia (2017-2018)",
            "Indonesia Office Deputy Director di Fuhai Group (2015-2017)",
            "Bergabung dengan PT Megatop Inti Selaras (Fuhai Group) pada tahun 2013 sebagai External Affairs Manager, dan diangkat menjadi Sekretaris Direktur Utama pada tahun 2015.",
          ],
          "affiliateRelationships": [
            "Pemegang Saham"
          ],
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdirut.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
        },
        {
          "id": 2,
          "name": 'Jun Zhang',
          "role": "Direktur",
          "citizenship": "Turki",
          "appointment": [
            "Akta Pernyataan Keputusan Para Pemegang Saham No.2 Tanggal 25 April 2022",
          ],
          "education": [
            "Sarjana Ekonomi jurusan Ekonomi Dunia, Universitas Fudan, Shanghai (2005)",
          ],
          "experience": [
            "Direktur di PT Stanford Teknologi Indonesia (2020-2022)",
            "Direktur Utama di PT Stanford Teknologi Indonesia (2018-2020)",
            "Direktur di PT Recome Teknologi Indonesia (2019- sekarang)",
            "Direktur di PT Stanford Teknologi Indonesia (2017-2018)",
            "Founder di Shanghai Baigong Network Technology Co.,Ltd (2016- Sekarang)",
            "Direktur di Shanghai Yizhu Financial Services Co.,Ltd (2014-2017)",
            "Presiden Direktur di Shanghai Li Cai Financial Services Co.,Ltd (2010-2016)",
            "Presiden Direktur di Hainan Jinfei Isalnd Real Estate Development Co.,Ltd (2002-2010)",
            "Founder di Shanghai nijia.com (2000-2002)",
            "Founder di Shanghai Stanford Trade Co.,Ltd (1995-2000)",
          ],
          "affiliateRelationships": [
            "Pemegang saham utama"
          ],
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdirektur.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
        }
      ],
      dataCommissioner: [
        {
          "id": 1,
          "name": 'Maximilianus Maria Kolbe Fair Antero',
          "role": "Komisaris",
          "citizenship": "Indonesia",
          "appointment": [
            "Akta Pernyataan Keputusan Para Pemegang Saham No.2 Tanggal 25 April 2022",
          ],
          "education": [
            "Doctor (S3) Jurusan Psikologi Forensik, Illinois State University (2024)",
            "Sarjana (S1) Jurusan Hukum, Sekolah Tinggi Ilmu Hukum Dharma Andigha (2024)",
            "Magister (S2) Jurusan Sosiologi & Antropologi, Universitas Padjadjaran Bandung (2012)",
            "Sarjana (S1) Jurusan Psikologi, Universitas Padjadjaran Bandung (2007)",
          ],
          "experience": [
            "Founder PT Hijau Sentosa Bersama (2021 - Sekarang)",
            "Head of HRD di PT Stanford Teknologi Indonesia (2019- 2021)",
            "Founder PT Hijau Sentosa Abadi (2017 - Sekarang)",
            "GM Human Capital di PT Pharos Indonesia (2015- 2019)",
            "Komisaris PT Cipta Abdi Perkasa (2012 - 2017)",
            "GM HRD di Circle International, LTD (2007-2015)",
            "Co Founder PT Cipta Abdi Perkasa (2005 - Sekarang)",
          ],
          "affiliateRelationships": [
            "Tidak ada (Profesional)"
          ],
          "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fkomisaris.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
        },
      ],
      dataSelected: {
        appointment: [],
        education: [],
        experience: [],
        affiliateRelationships: [],
      },
      loading: false,
      error: null,
    };
  },
  methods: {
    handleTab(nameTab) {
      this.tabSelected = nameTab;
    },
    // openModal() {
    //   const modalElement = this.$refs.myModal;
    //   const modalInstance = new bootstrap.Modal(modalElement);
    //   modalInstance.show();
    // },
    // closeModal() {
    //   const modalElement = this.$refs.myModal;
    //   const modalInstance = new bootstrap.Modal(modalElement);
    //   modalInstance.hide();
    // },
    selectedProfile(item) {
      this.dataSelected = item;
      // this.openModal();
    },
  },

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

.card-article2 {
  border: 1px solid rgba(217, 217, 217, 1);
  background: rgba(255, 255, 255, 1);
  border-radius: 14px;
  padding: 0 0 10px 20px;
  cursor: pointer;

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

.border-radius-8 {
    border-radius: 8px;
}
.modal-info-profile {
    ul {
      list-style-type: disc;

      .list-style-none{
          list-style-type: none;
      }
    }


    .image-profile {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .btn-close {
        position: absolute;
        top: 1rem;
        right: 1.8rem;
    }
}
</style>