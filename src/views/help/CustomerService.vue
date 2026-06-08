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
                  Kami berkomitmen untuk membantu mereka yang tidak dapat
                  mengakses layanan keuangan tradisional melalui teknologi
                  keuangan dan data yang inovatif. Kami terus mencoba untuk
                  membantu mewujudkan impian hidup anda!
                </p>
                <img
                  src="@/assets/image/bg-tentang.png"
                  alt="Customer Service"
                  width="600"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <!-- Right Column: Form -->
              <div class="p-3">
                <form @submit.prevent="sendForm">
                  <div class="form-group select-wrapper">
                    <select
                      v-model="form.type"
                      :class="{ selected: form.type !== '' }"
                      required
                    >
                      <option value="" disabled selected>
                        Jenis Pengaduan
                      </option>
                      <option value="0">Kritik / Saran</option>
                      <option value="1">Pengaduan Pengguna</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      v-model="form.userName"
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="form.userPhone"
                      placeholder="No. Telepon"
                      @input="validateNumber"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="form.userEmail"
                      placeholder="Alamat e-mail"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="form.content"
                      placeholder="Ketik pesan ..."
                      maxlength="500"
                      required
                    ></textarea>
                    <p>{{ form.content.length }}/500</p>
                  </div>

                  <!-- CAPTCHA Section -->
                  <div class="form-group">
                    <div class="captcha-box tooltip-container">
                      <canvas
                        ref="captchaCanvas"
                        class="captcha-canvas"
                      ></canvas>
                      <div
                        class="captcha-display"
                        :style="{ color: textColor }"
                      >
                        {{ captchaText }}
                      </div>
                      <button
                        type="button"
                        class="refresh-captcha"
                        @click="generateCaptcha"
                      >
                        <i class="fas fa-sync-alt"></i>
                      </button>
                      <span class="tooltip">Refresh CAPTCHA</span>
                    </div>

                    <input
                      type="text"
                      v-model="userInput"
                      placeholder="Enter CAPTCHA"
                      required
                    />
                  </div>

                  <div class="form-group text-end">
                    <button
                      type="submit"
                      class="btn-custom btn-custom-2 active"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                  <div
                    class="form-group position-relative"
                    style="height: 100px"
                  >
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
import axios from "axios";
import Loading from "vue-loading-overlay";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: false,
      errorMessage: "",
      form: {
        type: "",
        userName: "",
        userPhone: "",
        userEmail: "",
        content: "",
      },
      captchaText: "",
      userInput: "",
      textColor: "",
    };
  },
  methods: {
    async sendForm() {
      if (this.userInput !== this.captchaText) {
        this.errorMessage = "Incorrect CAPTCHA. Please try again.";
        return;
      }

      this.isLoading = true;
      axios
        .post(
          "https://h5.pinjamduit.co.id/to/feedbackWeb",
          new URLSearchParams(this.form),
          {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
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
              this.errorMessage = "";
              this.resetForm();
            }, 5000);
          } else {
            this.errorMessage = "Terjadi kesalahan saat mengirim pesan.";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.errorMessage = "Terjadi kesalahan saat mengirim pesan.";
          this.isLoading = false;
        });
    },
    validateNumber(event) {
      const value = event.target.value.replace(/\D/g, "");
      this.form.userPhone = value;
    },
    resetForm() {
      this.form = {
        type: "",
        userName: "",
        userPhone: "",
        userEmail: "",
        content: "",
      };
      this.userInput = "";
      this.generateCaptcha(); // Reset CAPTCHA
    },
    generateCaptcha() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < 6; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      this.captchaText = result;
      this.userInput = "";
      this.errorMessage = "";
      this.textColor = this.getRandomColor();
      this.drawLines();
    },
    drawLines() {
      const canvas = this.$refs.captchaCanvas;
      const ctx = canvas.getContext("2d");
      canvas.width = 200; // Set canvas width
      canvas.height = 60; // Set canvas height

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw random lines
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);

        // Generate a random color
        const randomColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
        ctx.strokeStyle = randomColor; // Set random color
        ctx.lineWidth = 2; // Line width
        ctx.stroke();
      }
    },
    getRandomColor() {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    },
  },
  mounted() {
    this.generateCaptcha();
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
  background: #f6fbff;
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

/* CAPTCHA Styles */
.captcha-box {
  position: relative;
  width: 200px; /* Fixed width */
  height: 60px; /* Fixed height */
  margin: 0 auto; /* Center the box */
  display: flex; /* Use flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

.captcha-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2; /* Place canvas above the text */
}

.captcha-display {
  font-size: 24px;
  font-weight: bold;
  position: relative;
  z-index: 3; /* Place text above the canvas */
  text-align: center; /* Center text */
  letter-spacing: 3px; /* Space out letters */
}

.refresh-captcha {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
  z-index: 4; /* Ensure it is above the canvas */
  opacity: 0; /* Slightly transparent */
}

.refresh-captcha:hover {
  opacity: 0; /* Fully visible on hover */
}

.error {
  color: red;
  margin-top: 10px;
}

.tooltip-container {  
  position: relative; /* Position relative for absolute positioning of tooltip */  
  display: inline-block; /* Allow tooltip to position correctly */  
}  
  
.tooltip {  
  visibility: hidden; /* Hidden by default */  
  width: 120px; /* Width of the tooltip */  
  background-color: rgba(0, 0, 0, 0.7); /* Background color */  
  color: #fff; /* Text color */  
  text-align: center; /* Center text */  
  border-radius: 5px; /* Rounded corners */  
  padding: 5px; /* Padding */  
  position: absolute; /* Positioning */  
  z-index: 1; /* Ensure it appears above other elements */  
  bottom: 125%; /* Position above the button */  
  left: 50%; /* Center horizontally */  
  margin-left: -60px; /* Adjust to center */  
  opacity: 0; /* Hidden by default */  
  transition: opacity 0.3s; /* Smooth transition */  
}  
  
.tooltip-container:hover .tooltip {  
  visibility: visible; /* Show tooltip on hover */  
  opacity: 1; /* Fade in */  
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
