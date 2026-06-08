<template>
  <section id="information" class="floating-widget">
    <div class="feature">
      <img src="../../assets/image/ic_verifikasi_cepat.png" alt="Verifikasi Cepat">
      <h5>PROFESIONAL DAN BERPENGALAMAN</h5>
      <p>Kami telah berhasil menyelesaikan berbagai proyek konstruksi di seluruh pualu Jawa, Kalimantan Timur, 
        Sulawesi, dan Bali sejak tahun 2004. Semua proyek telah kita selesaikan dengan sikap yang profesional 
        dengan mengutamakan kualitas untuk proyek.</p>
    </div>
    <div class="divider"></div>
    <div class="feature">
      <img src="../../assets/image/ic_sistem_online.png" alt="Sistem Online">
      <h5>JUJUR DAN DAPAT DIANDALKAN</h5>
      <p>Bagi kami, kejujuran adalah suatu sikap yang kami jaga dengan intergritas. Kepercayaan adalah faktor 
        penting untuk menjaga hubungan yang baik demi mencapai dan menyelesaikan proyek dengan hasil yang maksumal. 
        Bukan hanya dengan klien, tetapi juga dengan semua yang berkontribusi di proyek tersebut.</p>
    </div>
    <div class="divider"></div>
    <div class="feature">
      <img src="../../assets/image/ic_security_info.png" alt="Keamanan Informasi">
      <h5>EFEKTIF DAN EFISIEN</h5>
      <p>Selalu berinovasi dalam pengerjaan dan bekerja bersama dengan tenaga – tenaga ahli merupakan suatu strategi 
        yang selalu kita gunakan agar pekerjaan konstruksi dapat terselesaikan dengan efektif dan efisien tanpa melupakan 
        perhatian terhadap detil dan memastikan bahwa semua terselesaikan dengan benar.</p>
    </div>
  </section>
</template>
<script>
export default {
    name: 'Information',
}
</script>
<style scoped>
.floating-widget {
  display: flex;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 10px;
  margin: 20px auto;
  max-width: 900px;
  position: relative;
  top: -130px; /* Adjust the vertical position for the floating effect */
  z-index: 1;
}

.feature {
  text-align: center;
  max-width: 30%;
}

.feature2 {
  text-align: center;
  max-width: 30%;
}

.feature img {
  width: 50px;
  margin-bottom: 10px;
}

.feature2 img {
  width: 50px;
  margin-bottom: 21px;
}

.floating-widget p {
  font-size: 14px;
  color: #666;
}
.divider {
  width: 1px;
  background-color: #ddd;
  margin: 0 20px;
}

@media (max-width: 768px) {
  .floating-widget {
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
    max-width: 100%;

    .feature {
      max-width: 100%;
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      margin: 10px 0;
    }
  }
}
</style>