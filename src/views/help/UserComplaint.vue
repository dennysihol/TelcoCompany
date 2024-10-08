<template>
  <section id="user-complaint" class="user-complaint pb-5">
    <div class="container">
      <div class="row">
        <div class="col-10 d-flex flex-column gap-4 content-complaint">
          <div class="row">
            <h3>Pengaduan Pengguna</h3>
          </div>
          <div class="row">
            <div class="description-complaint">
              Demi memberikan kualitas pelayanan kepada konsumen, PinjamDuit membentuk wadah yang dapat digunakan oleh konsumen untuk menyampaikan keluhan, pertanyaan maupun masukan demi meningkatkan layanan kami untuk para konsumen. Komentar, kritik dan saran konsumen sangat penting bagi kami. Melalui wadah ini kami berkomitmen untuk terus memperbaiki, meningkatkan dan memberikan pelayanan yang terbaik kepada konsumen setia kami. Pengaduan setiap konsumen akan kami terima serta ditampung, ditindaklanjuti dan diselesaikan oleh team Customer Service (CS) PinjamDuit yang telah berpengalaman dibidangnya.
            </div>
          </div>
          <div class="row">
            <h3>Alur Pengaduan</h3>
          </div>
          <div class="row">
            <div class="col-lg-9">
              <img src="@/assets/image/alur-pengaduan.png" alt="alur-pengaduan.png">
            </div>
          </div>
          <div class="row">
            <h3>Klasifikasi Pengaduan</h3>
          </div>
          <div class="row">
            <div class="description-complaint">
              Berdasarkan proses dan cara penanganannya, jenis pengaduan dibagi menjadi dua. Pengaduan yang membutuhkan penjelasan dan pengaduan yang membutuhkan tindak lanjut. Berdasarkan klasifikasi tersebut proses penanganannya menjadi sebagai berikut :<br><br>

              <ul>
                <li>Jika keluhan, kritik, saran, permintaan tidak membutuhkan tindak lanjut, maka team Customer Service dapat segera memberikan Informasi, saran atau solusi langsung kepada knsumen.</li>
                <li>Apabila keluhan, kritik, saran dan permintaan membutuhkan tindak lanjut. Maka team Customer Service akan melakukan investigasi dan meninklanjuti keluhan, kritik, saran dan permintaan konsumen terlebih dahulu. Hal ini membutuhkan waktu lebih.</li>
                <li>Terkait point. 2, jika team Customer Service sudah mendapatkan hasil dari investigasi, maka team Customer Service langsung memberikan informasi kepada konsumen. Berikut alur layanan pengaduan konsumen sampai penyelesaian pengaduan PinjamDuit.</li>
              </ul>

              Setiap pengaduan konsumen yang disampaikan kepada layanan konsumen PinjamDuit, akan dilaporkan kepada Otoritas Jasa Keuangan (OJK) untuk memastikan bahwa setiap laporan yang disampaikan tercatat dan terselesaikan.Berikut alur laporan layanan pengaduan konsumen PinjamDuit kepada Otoritas Jasa Keuangan (OJK)
            </div>
          </div>
          <div class="row">
            <div class="col-lg-9">
              <img src="@/assets/image/klasifikasi-pengaduan.png" alt="klasifikasi-pengaduan.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "User Complaint",
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.user-complaint {

  .content-complaint {
    padding: 1.5rem;
    border: 1px solid rgba(239, 239, 239, 1);
  }

  .description-complaint {
    text-align: justify;
    
    ul {
      list-style-type: decimal;
    }
  }
}
</style>
