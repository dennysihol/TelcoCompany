<template>
    <div class="content-section2">
        <div class="row d-flex justify-content-center gap-4 pt-5 ">
            <div class="col-5">
                <img src="../../assets/image/sertifikat_1.png" />
            </div>
            <div class="col-5">
                <img src="../../assets/image/sertifikat_afpi.png" />
            </div>
        </div>
        <div style="padding: 45px 38px 0 38px; text-align: center;">
            <h3>PinjamDuit merupakan anggota terdaftar Asosiasi Fintech Indonesia (AFTECH) dan Asosiasi Fintech
                Pendanaan Bersama Indonesia (AFPI)</h3>
        </div>
    </div>
    <div class="content-section2 mt-5">
        <div class="row d-flex justify-content-center gap-4 pt-5">
            <div class="col-5">
                <img src="../../assets/image/sertifikat_iso.png" />
            </div>
        </div>
        <div style="padding: 45px 38px 0 38px; text-align: center;">
            <h3>PinjamDuit telah mendapatkan Sertifikasi ISO 27001:2022 untuk Sistem <br> Manajemen Keamanan Informasi
            </h3>
        </div>
    </div>
    <div class="content-section2 mt-5">
        <div class="row d-flex justify-content-center gap-4 pt-5">
            <div class="col-5">
                <img src="../../assets/image/sertifikat_fdc.png" />
            </div>
        </div>
        <div style="padding: 45px 38px 0 38px; text-align: center;">
            <h3>PinjamDuit telah terintegrasi dengan Sistem Fintech Data Center AFPI</h3>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Certification',
    data() {
        return {
            tabSelected: "director",
            dataDirector: [
                {
                    "id": 1,
                    "name": 'Hendri',
                    "role": "Direktur Utama",
                    "dateArticle": "26 Mar 2023",
                    "urlImage": new URL('../../assets/image/dirut.png', import.meta.url).href
                },
                {
                    "id": 2,
                    "name": 'Jun Zhang',
                    "role": "Direktur",
                    "dateArticle": "13 Maret 2022",
                    "urlImage": new URL('../../assets/image/direktur.png', import.meta.url).href
                }
            ],
            dataCommissioner: [
                {
                    "id": 1,
                    "name": 'Maximilianus Maria Kolbe Fair Antero',
                    "role": "Komisaris",
                    "dateArticle": "26 Mar 2023",
                    "urlImage": new URL('../../assets/image/komisaris.png', import.meta.url).href
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
</style>