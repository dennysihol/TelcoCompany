<template>
  <div class="bg-service-customer">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 text-center">
          <div class="row pt-3 pb-3">
            <h2>Layanan Pengaduan</h2>
          </div>
          <div class="row pb-5">
            <div class="col-lg-6">
              <!-- Left Column: Text Content and Image -->
              <div class="p-3">
                <p class="pb-3">
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
                        v-model="form.type"
                        :class="{'selected': form.type !== ''}"
                        required
                    >
                      <option value="" disabled selected>Jenis Pengaduan</option>
                      <option value="0">Kritik / Saran</option>
                      <option value="1">Pengaduan Pengguna</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <input type="text" v-model="form.userName" placeholder="Nama Lengkap" required />
                  </div>
                  <div class="form-group">
                    <input type="text" v-model="form.userPhone" placeholder="No. Telepon" @input="validateNumber" required />
                  </div>
                  <div class="form-group">
                    <input type="email" v-model="form.userEmail" placeholder="Alamat e-mail" required />
                  </div>
                  <div class="form-group">
                    <textarea v-model="form.content" placeholder="Ketik pesan ..." maxlength="500" required></textarea>
                    <p>{{ form.content.length }}/500</p>
                  </div>
                  <div class="form-group text-end">
                    <button type="submit" class="btn-custom btn-custom-2 active">Kirim Pesan</button>
                  </div>
                  <div class="form-group position-relative" style="height: 100px;">
                    <Loading
                      v-model:active="isLoading"
                      :can-cancel="false"
                      :is-full-page="fullPage"
                    />
                    {{ errorMessage }}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from "vue-loading-overlay";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: false,
      errorMessage: '',
      form: {
        type: '',
        userName: '',
        userPhone: '',
        userEmail: '',
        content: ''
      }
    };
  },
  methods: {
    async sendForm() {
      this.isLoading = true;
      axios
        .post(
          "https://h5.pinjamduit.co.id/to/feedbackWeb",
          // "https://h5-test.pinjamduit.co.id/to/feedbackWeb",
          new URLSearchParams(this.form),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Accept-Encoding": "gzip, deflate, br, zstd",
            },
          }
        )
        .then((response) => {
          this.isLoading = false;
          console.log(response.data);
          if (response.data.code == "0") {
            this.isLoading = false;
            this.errorMessage = response.data.message;
            setTimeout(() => {
              this.errorMessage = '';
              this.resetForm();
            }, 5000);
          } else {
            this.errorMessage = 'Terjadi kesalahan saat mengirim pesan.';
            // this.errorMessage = response.data.message;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.errorMessage = 'Terjadi kesalahan saat mengirim pesan.';
          this.isLoading = false;
        });
    },
    validateNumber(event) {
      // Remove any non-numeric characters
      const value = event.target.value.replace(/\D/g, '');
      this.form.userPhone = value;
    },
    resetForm() {
      this.form = {
        type: '',
        userName: '',
        userPhone: '',
        userEmail: '',
        content: ''
      };
    }
  },
  components: {
    Loading,
  },
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
