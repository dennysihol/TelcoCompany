<template>
    <div class="content-section2">
        <div class="col-lg-10 article-gap w-100">
            <h1 style="margin-top: 20px; margin-left: 20px;">Laporan Keuangan</h1>
        </div>
        <div style="margin: 50px 40px 20px 20px;">
            <span style="color: #2B2B2B;">
                Demi memberikan kualitas pelayanan kepada konsumen, PinjamDuit membentuk wadah yang dapat digunakan oleh
                konsumen untuk menyampaikan keluhan, pertanyaan maupun masukan demi meningkatkan layanan kami untuk para
                konsumen.
                Komentar, kritik dan saran konsumen sangat penting bagi kami. Melalui wadah ini kami berkomitmen untuk
                terus memperbaiki, meningkatkan dan memberikan pelayanan yang terbaik kepada konsumen setia kami.
                Pengaduan setiap konsumen akan kami terima serta ditampung, ditindaklanjuti dan diselesaikan oleh team
                Customer Service (CS) PinjamDuit yang telah berpengalaman dibidangnya.
            </span>
        </div>
        <div class="col-lg-10 article-gap w-100">
            <h1 style="margin-top: 20px; margin-left: 20px;">Laporan Keuangan PT. Stanford Teknologi Indonesia</h1>
        </div>
        <div class="row g-0 align-items-center justify-content-center mt-5">
            <div class="col-md-3 d-flex justify-content-center" v-for="item in dataReport" :key="item.id">
                <div class="ud-service-card card img-fluid align-items-center">
                    <img class="card-img-top ud-service-img-top" :src="item.urlImage"
                        alt="Card image" />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                        <div class="service-card bg-white justify-content-center">
                            <p class="card-title">{{ item.title }}</p>
                            <a class="card-text" :href="item.link" target="_blank">Lihat Laporan ></a>
                        </div>
                    </div>
                </div>
            </div>           
        </div>

    </div>
</template>

<script>

import '@/assets/main.css'

export default {
    name: 'FinancialReport',
    data() {
        return {
            tabSelected: "report",
            dataReport: [
                {
                    "id": 1,
                    "title": 'Laporan Keuangan Tahun 2020',
                    "link": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2FLaporan Keuangan Tahun 2020.pdf?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Flaporan_1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                },
                {
                    "id": 2,
                    "title": 'Laporan Keuangan Tahun 2021',
                    "link": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2FLaporan Keuangan Tahun 2021.pdf?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Flaporan_2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                },
                {
                    "id": 3,
                    "title": 'Laporan Keuangan Tahun 2022',
                    "link": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2FLaporan Keuangan Tahun 2022.pdf?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Flaporan_3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                },
                {
                    "id": 4,
                    "title": 'Laporan Keuangan Tahun 2023',
                    "link": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2FLaporan Keuangan Tahun 2023.pdf?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Flaporan_4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
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