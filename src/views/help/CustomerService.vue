<template>
  <div class="customer-service">
    <h2>Layanan Pelanggan</h2>
    <div class="container">
      <div class="row">
        <!-- Left Column: Text Content and Image -->
        <div class="column left">
          <p>
            Kami berkomitmen untuk membantu mereka yang tidak dapat mengakses layanan
            keuangan tradisional melalui teknologi keuangan dan data yang inovatif. Kami
            terus mencoba untuk membantu mewujudkan impian hidup anda!
          </p>
          <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fbg_customer_services.png?alt=media&token=4741bc2c-61cc-4f2f-962b-3f7d73857ae6" alt="Customer Service" width="600" />

        </div>

        <!-- Right Column: Form -->
        <div class="column right">
          <form @submit.prevent="sendForm">
            <div class="form-group select-wrapper">
              <select
                  v-model="form.jenis_pengaduan"
                  :class="{'selected': form.jenis_pengaduan !== ''}"
                  required
              >
                <option value="" disabled selected>Jenis Pengaduan</option>
                <option value="Kritik / Saran">Kritik / Saran</option>
                <option value="Pengaduan Pengguna">Pengaduan Pengguna</option>
              </select>
            </div>

            <div class="form-group">
              <input type="text" v-model="form.nama" placeholder="Nama Lengkap" required />
            </div>
            <div class="form-group">
              <input type="text" v-model="form.telepon" placeholder="No. Telepon" required />
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Alamat e-mail" required />
            </div>
            <div class="form-group">
              <textarea v-model="form.pesan" placeholder="Ketik pesan ..." maxlength="500" required></textarea>
              <p>{{ form.pesan.length }}/500</p>
            </div>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        jenis_pengaduan: '',
        nama: '',
        telepon: '',
        email: '',
        pesan: ''
      }
    };
  },
  methods: {
    async sendForm() {
      try {
        // const response = await axios.post('https://api.example.com/feedback', this.form);
        alert('Pesan berhasil dikirim!');
        this.form = {
          jenis_pengaduan: '',
          nama: '',
          telepon: '',
          email: '',
          pesan: ''
        };
      } catch (error) {
        console.error(error);
        alert('Terjadi kesalahan saat mengirim pesan.');
      }
    }
  }
};
</script>

<style scoped>
.customer-service {
  margin: auto;
  padding: 200px 200px;
  background: #F6FBFF;
}

.customer-service h2 {
 text-align: center;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.column {
  flex: 1;
}

.left {
  padding-right: 40px;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.8em;
}

.left p {
  text-align: left;
  margin-bottom: 20px;
  line-height: 1.5;
  color: #555;
}

.left img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 20px; /* Adds space between the text and the image */
}

/* Form Section */
.right {
  padding:0;
}

.form-group {
  margin-bottom: 15px;
}

input{
  width: 100%;
  padding: 10px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 5px;
}

select {
  width: 100%;
  /* Adds space for the chevron */
  padding: 10px 40px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: url("../../assets/image/ic_chevron.png") no-repeat right 10px center,white;
  background-size: 12px 8px;
  -webkit-appearance: none; /* Hides default chevron in Chrome/Safari */
  -moz-appearance: none; /* Hides default chevron in Firefox */
  appearance: none; /* Hides default chevron in other browsers */
}
select.selected {
  background-color: white; /* Background color when an option is chosen */
}

select:focus {
  outline: none;
  border-color: white;
}
.select-wrapper {
  position: relative;
}

select:focus {
  outline: none;
  border-color: #007bff;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 150px;
}

select {
  color: #555;
}

textarea {
  resize: vertical;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  text-align: right;
  color: #555;
}
</style>
