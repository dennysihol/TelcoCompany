<template>
    <section id="blog-detail" class="position-relative bg-blog">
        <div class="container container-article position-relative">
            <div class="row">
                <div class="col-lg-8 mb-5">
                    <div class="card-blog-detail d-flex flex-column gap-4 mb-5">
                        <div class="card-blog-title">Muda Paham Fintech “Inovasi Keuangan Untuk Generasi Muda”</div>
                        <div class="card-article-date d-flex flex-row gap-2">
                            <img class="card-article-date-icon" src="@/assets/icon/calendar-icon.png">
                            Semarang, 27 September 2023
                        </div>
                        <div class="card-article-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fblog-detail-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879" class="w-100" alt="item-article-1">
                        </div>
                        <div v-html="htmlContent" style="text-align: justify;"></div>
                    </div>
                    <div class="d-flex gap-3 justify-content-center mb-3">
                        <button class="btn-custom btn-custom-1" type="button" @click="goBack">Kembali</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Blog Detail',
    data() {
        return {
            htmlContent: `
                Maraknya pertumbuhan platform pinjaman online saat ini harus diiringi dengan edukasi keuangan digital. Agar masyarakat bisa mengatur transaksi di platform peer to peer ini. Alhasil, mereka terhindar dari jeratan debt collector ketika terjadi gagal bayar.
                <br>
                <br>
                Otoritas Jasa Keuangan (OJK) membeberkan jika saat ini pertumbuhan platform pinjaman online tidak seiring dengan pemahaman literasi keuangan. Berdasarkan hasil Survei Nasional Literasi dan Inklusi Keuangan (SNLIK) 2022 OJK, provinsi Jawa Tengah mencatat tingkat literasi keuangan yang melampaui rata-rata nasional. Yakni mencapai 51,69 persen.
                <br>
                Walau terbilang tinggi, perlu upaya berkelanjutan untuk meningkatkan literasi ini. Lembaga keuangan memiliki peran signifikan dalam membantu generasi muda memahami konsep keuangan, melalui berbagai kegiatan yang diselenggarakan.
                <br>
                Karena itu, lembaga keuangan seperti Kredinesia, Easycash dan PinjamDuit melakukan seminar Muda Paham Fintech. Mereka dikenalkan konsep keuangan yang relevan dengan kehidupan sehari-hari. Kegiatan ini dilaksanakan, Rabu 27 September 2023.
                <br>
                Kegiatan itu dilaksanakan di Politeknik Negeri Semarang. Ketiga platform ini di bawah naungan PT Kreditku Teknologi Indonesia (Kredinesia), PT Indonesia Fintopia Technology (Easycash) dan PT Stanford Teknologi Indonesia (PinjamDuit).
                <br>
                Komisaris Kredinesia Nopiyanto Tri Saputra mengatakan, saat ini adalah waktu yang ideal untuk pemahaman tentang keuangan digital yang sah dan diatur oleh OJK. Dia menilai, generasi muda sangat penting untuk memiliki pemahaman yang mendalam.
                <br>
                <br>
                <i><b>“Mereka harus paham tentang risiko, manfaat, dan tantangan yang terkait dengan penggunaan layanan fintech lending agar kita dapat menggunakan teknologi ini dengan bijaksana,” katanya dalam rilis yang diterima media ini, Kamis, 28 September 2023.</b></i>
                <br>
                <br>
                Chief Commercial Officer PinjamDuit Victrin Christy yakin, pemahaman yang mendalam tentang keuangan digital sangat baik untuk menghadapi tantangan keuangan di masa depan. “Peran krusial peningkatan literasi keuangan dalam mendorong kemajuan ekonomi di wilayah Jawa Tengah. Khususnya di Semarang,” bebernya.
                <br>
                Sementara itu, Wildan Kesuma, Head Corporate Affairs Easycash mengingatkan para peserta untuk tetap waspada terhadap modus penawaran pinjaman baru yang mengabaikan legalitas. Serta mendorong untuk terus meningkatkan literasi keuangan digital. “Melalui peningkatan literasi keuangan di kalangan generasi muda Semarang, diharapkan pemahaman tentang fintech lending sebagai opsi akses keuangan akan semakin meluas. Serta, kesadaran risiko dan tantangan terkait penggunaan fintech lending,” katanya.
                <br>
                <br>
                Berdasarkan data statistik dari OJK, saat ini terdapat 102 penyelenggara fintech lending yang telah resmi mendapatkan izin dari OJK dan menjadi anggota AFPI. Industri fintech lending terus berperan aktif dalam menyalurkan pinjaman kepada pengguna dengan total mencapai Rp 657.854 miliar per Juli 2023. (*)
                <br>
                <br>
                Sumber:
                <i><u><a style="color: black;" href="https://beritanusantara.co/2023/09/28/raih-kemajuan-literasi-keuangan-generasi-muda-semarang" target="_blank">https://beritanusantara.co/2023/09/28/raih-kemajuan-literasi-keuangan-generasi-muda-semarang</a></u></i>
            `,
            loading: false,
            error: null,
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .bg-blog {
        background: none;
        z-index: 1;
    }
    .container-article {
        padding: 5rem 0 0 0;
    }
    .card-blog-detail {
        border: 1px solid rgba(239, 239, 239, 1);
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        padding: 2rem;
        
        .card-blog-title {
            font-weight: 700;
            font-size: 32px;
            width: 100%;
            height: auto;
            text-align: justify;
        }
        .card-article-date {
            font-size: 16px;
            font-weight: 400;

            .card-article-date-icon {
                width: 20px;
                height: 20px;
            }
        }
        .card-article-image {
            width: 100%;

            img {
                object-fit: cover;
                height: 100%;
                border-radius: 8px;
            }
        }
    }
    @media (max-width: 768px) {
    }
</style>