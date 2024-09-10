<template>
  <section id="information" class="floating-widget">
    <div class="feature">
      <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_verifikasi_cepat.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879" alt="Verifikasi Cepat">
      <h5>Verifikasi Cepat</h5>
      <p>Verifikasi cepat dan tidak perlu menunggu lama untuk proses pinjaman</p>
    </div>
    <div class="divider"></div>
    <div class="feature2">
      <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_sistem_online.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879" alt="Sistem Online">
      <h5>Sistem Online</h5>
      <p>Sistem online 24 jam, pinjaman dapat diajukan kapanpun dan dimanapun</p>
    </div>
    <div class="divider"></div>
    <div class="feature">
      <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fic_security_info.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879" alt="Keamanan Informasi">
      <h5>Keamanan Informasi</h5>
      <p>Keamanan informasi, perlindungan privasi ganda untuk mencegah kebocoran informasi</p>
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
</style>