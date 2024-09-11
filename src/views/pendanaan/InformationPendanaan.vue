<template>
    <section id="information-pendanaan" class="container">
      <div class="row">
        <div class="col-10">
          <div class="floating-widget d-flex flex-row">
            <div class="col-3" v-for="(item, index) in dataInformation" :key="item.id">
              <div :class="index === dataInformation.length-1 ? 'card-information last-item' : 'card-information'">
                <img :src="item.urlImage" :alt="'image-information-'+item.id" class="image-information">
                <div class="title">{{ item.title }}</div>
                <div class="description">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
      name: 'InformationPendanaan',
      data() {
        return {
          dataInformation: [
            {
              "id": 1,
              "title": "Legalitas",
              "description": "Aplikasi PinjamDuit berizin dan diawasi oleh OJK (Otoritas Jasa Keuangan) dan merupakan anggota terdaftar AFTECH dan AFPI, sehingga PinjamDuit dipercaya serta memberikan keamanan dan kenyamanan bagi penggunanya dalam melakukan transaksi.",
              "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-advantages-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
            },
            {
              "id": 2,
              "title": "Keunggulan",
              "description": "Dengan proses pendaftaran yang mudah dan juga proses pengajuan yang cepat, PinjamDuit memberikan keuntungan bunga yang kooperatif serta aman dalam bertransaksi.",
              "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-advantages-2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
            },
            {
              "id": 3,
              "title": "Layanan",
              "description": "Kami menyediakan layanan berkualitas dengan pinjaman yang cepat dan aman, serta dukungan pelanggan yang responsif, menjadikan kamu sebagai prioritas kami.",
              "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-advantages-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
            },
            {
              "id": 4,
              "title": "Bunga",
              "description": "Bunga yang kooperatif dan terjangkau sebesar 0,3% per hari, dengan jangka waktu pengembalian selama 150 hari.",
              "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-advantages-4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
            },
          ]
        }
      }
  }
  </script>
  <style scoped>
  .floating-widget {
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    /* max-width: 900px; */
    position: relative;
    top: -120px; /* Adjust the vertical position for the floating effect */
    z-index: 1;

    .card-information {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-right: 1px solid rgba(217, 217, 217, 1);

      .title {
        font-weight: 600;
        font-size: 16px;
        margin-top: 1rem;
        height: 3rem;
      }
      
      .description {
        font-size: 14px;
        padding: 0 1rem 1rem 1rem;
        height: 10rem;
      }
    }
    .card-information.last-item {
      border-right: none;
    }

    .image-information {
      width: 4rem;
      height: 4rem;
      object-fit: contain;
    }
  }
  </style>