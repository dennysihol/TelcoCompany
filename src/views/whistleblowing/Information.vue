<template>
    <section id="user-complaint" class="user-complaint pb-5">
        <div class="container">
            <div class="row">
                <div class="col-10 d-flex flex-column gap-4 content-complaint">
                    <div class="row">
                        <div class="description-complaint">
                            PT Stanford Teknologi Indonesia (“PinjamDuit”) berkomitmen tinggi untuk menjalankan prinsip
                            Good Corporate Governance dalam pelaksanaan operasional Perusahaan sebagai salah satu aspek
                            terpenting guna mendukung pencapaian visi dan misi yang telah ditetapkan, serta membangun
                            lingkungan bisnis yang sehat, berintegritas, dan bertujuan untuk menjadi Penyelenggara
                            Layanan Pendanaan Bersama Berbasis Teknologi Informasi yang terpercaya dalam memberikan
                            layanan berkualitas.
                        </div>
                    </div>
                    <div class="row">
                        <div class="description-complaint">
                            Guna meningkatkan efektivitas penerapan Good Corporate Governance, PinjamDuit mengharapkan
                            dukungan dari karyawan, pengguna, vendor dan pihak lainnya untuk dapat melaporkan melalui
                            saluran Whistleblowing PinjamDuit atas perbuatan yang dilakukan oleh karyawan PinjamDuit
                            untuk hal berikut, namun tidak terbatas pada:<br><br>

                            <ul>
                                <li>Kecurangan (fraud);</li>
                                <li>Pelanggaran kode etik dan pedoman tingkah laku, termasuk penerimaan gratifikasi dari
                                    pengguna atau vendor, mark up harga terkait pembelian barang/jasa, penyalahgunaan
                                    aset Perusahaan atau pengambilan data Perusahaan dan/atau pengguna untuk kepentingan
                                    pribadi;</li>
                                <li>Kekaryawanan; terkait dengan diskriminasi, pelecehan seksual, bullying,
                                    penyalahgunaan narkotika, obat dan zat terlarang (narkoba);</li>
                                <li>Pelanggaran terhadap keselamatan kerja, perlindungan kerja dan lingkungan kerja;
                                </li>
                                <li>Pelanggaran terhadap pelaporan keuangan;</li>
                                <li>Pelanggaran terhadap kebijakan dan prosedur internal Perusahaan</li>
                                <li>Pelanggaran terhadap ketentuan perundang-undangan;</li>
                                <li>Pencucian Uang dan Pendanaan Terorisme, serta;</li>
                                <li>Pelanggaran persaingan usaha, insider trading dan market abuse.</li>
                            </ul>

                            Pelapor (Whistleblower) diharapkan untuk dapat mencantumkan identitas nama dalam setiap
                            laporan Whistleblowing  yang diserahkan. Apabila Pelapor (Whistleblower) tidak menghendaki
                            untuk mencantumkan identitas nama, maka laporan Whistleblowing  dapat disampaikan secara
                            anonim (tanpa identitas). Semua laporan Whistleblowing  yang diterima akan dilindungi
                            kerahasiaan dan keamanannya oleh Perusahaan. Bila Pelapor (Whistleblower) menyertakan
                            identitasnya secara jelas, maka Pelapor (Whistleblower) berhak untuk memperoleh informasi
                            mengenai tindak lanjut atas laporannya.
                        </div>
                    </div>
                    <div class="row">
                        <div class="description-complaint">
                            Apabila anda menemukan adanya tindakan pelanggaran dapat melaporkannya melalui Email: <span
                                style="font-weight: 600;">wbs@stanfordtek.com</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="description-complaint">
                            Untuk membantu PinjamDuit dalam menanggapi atau melakukan investigasi atas laporan
                            Whistleblowing, diharapkan agar laporan dapat disertai dengan informasi sebagai
                            berikut:<br><br>

                            <ul>
                                <li>Nama dan media kontak Pelapor (Whistleblower)</li>
                                <li>Indikasi/fakta pelanggaran/kesalahan yang terjadi;</li>
                                <li>Nama  Karyawan/pihak lain yang diindikasikan terlibat;</li>
                                <li>Modus/cara yang dilakukan;</li>
                                <li>Waktu Kejadian;</li>
                                <li>Lokasi Kejadian;</li>
                                <li>Informasi/bukti lain yang dapat menguatkan isi laporan (misalnya: dokumen, gambar,
                                    foto, E-mail, rekaman, aktivitas sosial media, dan sebagainya);</li>
                                <li>Saksi kejadian (jika ada)</li>
                            </ul>

                            PinjamDuit sangat berterima kasih atas laporan yang disampaikan yang bersifat faktual dan
                            dapat dipertanggungjawabkan, dan tidak berupa informasi yang berdasarkan rumor atau karena
                            adanya itikad yang kurang baik.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Information',

}
</script>
<style scoped>
.user-complaint {

    .content-complaint {
        background-color: white;
        z-index: 1;
        margin-top: -170px;
        padding: 1.5rem;
        border: 1px solid rgba(239, 239, 239, 1);
        border-radius: 8px;
    }

    @media (max-width: 991px) {
        .content-complaint {
            background-color: white;
            z-index: 1;
            margin-top: -500px;
            padding: 1.5rem;
            border: 1px solid rgba(239, 239, 239, 1);
            border-radius: 8px;
        }
    }

    @media (max-width: 768px) {
        .content-complaint {
            background-color: white;
            z-index: 1;
            margin-top: 0px;
            padding: 1.5rem;
            border: 1px solid rgba(239, 239, 239, 1);
            border-radius: 8px;
        }
    }

    .description-complaint {
        text-align: justify;

        ul {
            list-style-type: disc;
        }
    }
}
</style>