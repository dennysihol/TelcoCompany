<template>
  <div class="container-fluid bg-service-customer">
    <div class="row">
      <div class="col-lg-9 text-center">
        <div class="row pt-3 pb-3">
          <h2>Layanan Pelanggan</h2>
        </div>
        <div class="row pb-5">
          <div class="col-lg-6">
            <!-- Left Column: Text Content and Image -->
            <div class="p-3">
              <p>
                Kami berkomitmen untuk membantu mereka yang tidak dapat mengakses layanan
                keuangan tradisional melalui teknologi keuangan dan data yang inovatif. Kami
                terus mencoba untuk membantu mewujudkan impian hidup anda!
              </p>
              <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fbg_customer_services.png?alt=media&token=4741bc2c-61cc-4f2f-962b-3f7d73857ae6" alt="Customer Service" width="600" />

            </div>
          </div>

          <div class="col-lg-6">
            <!-- Right Column: Form -->
            <div class="p-3">
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
.bg-service-customer {
  background-color: rgba(246, 251, 255, 1);
}

.customer-service {
  margin: auto;
  padding: 100px 20px;
  background: #F6FBFF;
}

.customer-service h2 {
  text-align: center;
  font-size: 1.8em;
  margin-bottom: 30px;
}

/* .row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
} */

/* .column {
  flex: 1;
} */

/* .left {
  padding-right: 40px;
} */
/* 
.left p {
  text-align: left;
  margin-bottom: 20px;
  line-height: 1.5;
  color: #555;
} */
/* 
.left img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 20px;
} */

/* Form Section */
/* .right {
  padding: 0;
} */

.form-group {
  margin-bottom: 15px;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 5px;
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
  text-align: left;
  color: #555;
}

/* Mobile-Friendly Layout */
@media (max-width: 768px) {
  .customer-service {
    padding: 50px 10px;
  }

  .customer-service h2 {
    font-size: 1.5em;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    font-size: 1em;
  }

  button {
    font-size: 1em;
  }
}
</style>
