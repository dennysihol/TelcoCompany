<template>
  <section id="information" class="floating-widget">
    <div class="feature">
      <img src="@/assets/image/ic_verifikasi_cepat.png" alt="Verifikasi Cepat">
      <h3>Verifikasi Cepat</h3>
      <p>Verifikasi cepat dan tidak perlu menunggu lama untuk proses pinjaman</p>
    </div>
    <div class="divider"></div>
    <div class="feature2">
      <img src="@/assets/image/ic_sistem_online.png" alt="Sistem Online">
      <h3>Sistem Online</h3>
      <p>Sistem online 24 jam, pinjaman dapat diajukan kapanpun dan dimanapun</p>
    </div>
    <div class="divider"></div>
    <div class="feature">
      <img src="@/assets/image/ic_security_info.png" alt="Keamanan Informasi">
      <h3>Keamanan Informasi</h3>
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
  top: -160px; /* Adjust the vertical position for the floating effect */
  z-index: 100;
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
</style>