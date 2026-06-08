<template>
  <section id="funding-information" class="container">
    <div class="row">
      <div class="col-10 position-relative ps-0">
        <div class="floating-widget d-flex flex-row row">
          <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12" v-for="(item, index) in dataInformation" :key="item.id">
            <div :class="index === dataInformation.length - 1 ? 'card-information last-item' : 'card-information'">
              <img :src="item.urlImage" :alt="'image-information-' + item.id" class="image-information">
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
  name: 'FundingInformation',
  data() {
    return {
      dataInformation: [
        {
          "id": 1,
          "title": "Legalitas",
          "description": "Aplikasi PinjamDuit berizin dan diawasi oleh OJK (Otoritas Jasa Keuangan) dan merupakan anggota terdaftar AFTECH dan AFPI, sehingga PinjamDuit dipercaya serta memberikan keamanan dan kenyamanan bagi penggunanya dalam melakukan transaksi.",
          "urlImage": new URL('../../assets/image/item-advantages-1.png', import.meta.url).href,
        },
        {
          "id": 2,
          "title": "Keunggulan",
          "description": "Pengajuan pinjaman kapan saja dan dimana saja, dengan proses mudah dan cepat, dan pencairan dana langsung dalam waktu 1 jam!",
          "urlImage": new URL('../../assets/image/item-advantages-2.png', import.meta.url).href,
        },
        {
          "id": 3,
          "title": "Layanan",
          "description": "Layanan yang aman dan terpercaya, memastikan semua informasi dan proses dapat diakses dengan mudah dan cepat dengan perlindungan ISO 27001:2022",
          "urlImage": new URL('../../assets/image/item-advantages-3.png', import.meta.url).href,
        },
        {
          "id": 4,
          "title": "Bunga",
          "description": "Bunga yang kompetitif dan terjangkau, maksimal 0,3% per hari, dengan jangka waktu pengembalian selama 150 - 180 hari.",
          "urlImage": new URL('../../assets/image/item-advantages-4.png', import.meta.url).href,
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
  position: absolute;
  top: -12rem;
  /* Adjust the vertical position for the floating effect */
  z-index: 1;

  .card-information {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-right: 1px solid rgba(217, 217, 217, 1);

    .title {
      font-weight: 600;
      font-size: 20px;
      margin-top: 1rem;
      height: 3rem;
    }

    .description {
      font-size: 14px;
      padding: 0 2rem 1rem 2rem;
      height: 10rem;
    }
  }

  .card-information.last-item {
    border-right: none;
  }

  .image-information {
    width: 6rem;
    height: 6rem;
    object-fit: contain;
  }
}

@media (max-width: 1025px) {
  #funding-information {
    height: 63rem;
  }

  .card-information {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
  }
}

@media (max-width: 769px) {
  #funding-information {
    height: 47rem;
  }

  .floating-widget {
    top: -7rem;
  }

  .card-information {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(217, 217, 217, 1);

    .description {
      height: auto !important;
    }

    .image-information {
      width: 5rem;
    }
  }
}

@media (max-width: 426px) {
  #funding-information {
    height: 58rem;
  }
}

@media (max-width: 376px) {
  #funding-information {
    height: 63rem;
  }
}
</style>