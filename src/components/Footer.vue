<template>
  <!-- ====== Footer Start ====== -->
  <div id="contact" class="ud-footer wow fadeInRight" data-wow-delay=".15s">
    <div class="ud-footer-widgets">
      <div class="container">
        <div class="row" style="display: flex; justify-content: center">
          <div class="col-xl-2 ud-footer-box">
            <div
              class="ud-widget-logo"
              style="display: flex; flex-direction: column"
            >
              <a href="/" class="ud-footer-logo">
                <img
                  src="https://datatelindo.com/wp-content/uploads/2021/06/Logo-Datatel-768x450.png"
                  alt="logo"
                  style="height: 50px; margin-bottom: 10px"
                />
              </a>
              <p style="color: white; font-size: 14px; font-weight: 400">
                Kontraktor Telekomunikasi <br />
                & Konstruksi Profesional
              </p>
            </div>
          </div>
          <div class="col-xl-2 ud-footer-box">
            <div class="ud-widget">
              <h5 class="ud-widget-title">Link</h5>
              <ul class="ud-widget-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/funding">Proyek</a>
                </li>
                <li>
                  <a href="/about">Tentang Kami</a>
                </li>
                <li>
                  <a href="/blog">Karir</a>
                </li>
                <li>
                  <a href="/help">Kontak Kami</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 ud-footer-box">
            <div class="ud-widget">
              <h5 class="ud-widget-title">Contact</h5>
              <p style="color: white; font-size: 14px">
                Alamat Kantor Pusat<br />
              </p>
              <p style="color: white; font-size: 14px; margin-top: 10px">
                Jl. Minangkabau Barat No.8d 1, RT.1/RW.1, Ps. Manggis, 
                <br />
                Kecamatan Setiabudi, Kota Jakarta Selatan, 
                <br />
                Daerah Khusus Ibukota Jakarta 12970
              </p>
              <img src="@/assets/image/ic_phone.png" height="15" />
              &nbsp;
              <span style="color: white; margin-top: 15px">021-8378-0136</span>
              
            </div>
          </div>
          <div class="col-xl-2 ud-footer-box">
            <div class="ud-widget d-flex gap-3 flex-column">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.409122980867!2d106.84225047573112!3d-6.209646860826963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f473a522dbcf%3A0xa381adab932b9152!2sPT.%20Datatel%20Indonesia!5e0!3m2!1sen!2sid!4v1781012759899!5m2!1sen!2sid"
                width="240"
                height="250"
                style="border: 0; border-radius: 3%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="ud-footer-bottom">
      <div class="container">
        <p class="ud-footer-bottom-right">
          PT Datatel Indonesia © 2026 All Rights Reserved
        </p>
      </div>
    </div>
  </div>
  <!-- ====== Footer End ====== -->

  <!-- First Modal -->
  <div
    class="modal fade"
    id="firstModal"
    tabindex="-1"
    aria-labelledby="firstModalLabel"
    aria-hidden="true"
    ref="firstModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="hapusAkunModalTitle">Hapus Akun</h5>
        </div>
        <div class="modal-body content-modal">
          <p style="font-size: 12px; line-height: 17px">
            Setelah hapus akun, seluruh data (data pribadi dan data transaksi)
            Anda akan terhapus. Proses Penghapusan Akun Anda tunduk pada
            peraturan hukum yang berlaku di Indonesia.<br /><br />

            1. Perhatian, setelah berhasil hapus akun, Anda tidak dapat
            melakukan registrasi ulang selama 15 (lima belas) hari kalender
            kedepan, selain itu, satu nomor ponsel hanya bisa melakukan hapus
            akun maksimal 3x, harap operasikan dengan hati-hati.<br /><br />

            2. Jika dalam akun Anda masih terdapat tunggakan tagihan
            pinjaman/pendanaan, yang belum Anda bayarkan, Anda tidak dapat
            menghapus akun, silahkan hubungi layanan pelanggan kami (customer
            service): (021) 27899995, email ke: cs@stanfordtek.com , untuk
            konsultasikan mengenai bagaimana cara menghapus akun Anda.<br /><br />

            3. Setelah Anda hapus akun, informasi mengenai akun, data pribadi,
            identitas, pembayaran, peminjaman, hak dan kewajiban serta informasi
            lainnya akan terhapus dan tidak bisa dikembalikan lagi.
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeFirstModal"
          >
            Batal
          </button>
          <!-- Button to close the first modal and open the second modal -->
          <button
            type="button"
            class="btn btn-primary"
            @click="openSecondModal"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Second Modal -->
  <div
    class="modal fade"
    id="secondModal"
    tabindex="-1"
    aria-labelledby="secondModalLabel"
    aria-hidden="true"
    ref="secondModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cekNomorModalTitle">Hapus Akun</h5>
          <div class="close-btn" @click="closeSecondModal(true)">
            <img src="@/assets/icon/close-icon.png" alt="close-icon">
          </div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="checkPhone">
            <p class="modal-text">
              Masukan nomor telepon kamu yang didaftarkan di
              <span style="font-weight: bold">Aplikasi PinjamDuit</span
              ><br /><br /><br />
            </p>
            <div class="mb-3">
              <input
                type="tel"
                class="custom-input"
                id="recipient-name"
                v-model="phone"
                autocomplete="off"
              />
            </div>
            <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeSecondModal(true)"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="!isPhoneNumberValid"
            @click="checkPhone"
          >
            Selanjutnya
          </button>
        </div>
        <loading
          v-model:active="isLoading"
          :can-cancel="false"
          :is-full-page="fullPage"
        />
      </div>
    </div>
  </div>

  <!-- Third Modal -->
  <div
    class="modal fade"
    id="thirdModal"
    tabindex="-1"
    aria-labelledby="thirdModalLabel"
    aria-hidden="true"
    ref="thirdModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="otpOptionTitle">Verifikasi Kode OTP</h5>
          <div class="close-btn" @click="closeThirdModal(true)">
            <img src="@/assets/icon/close-icon.png" alt="close-icon">
          </div>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            Demi menjaga keamanan data anda, saat anda mengajukan penghapusan
            akun, kami perlu memverifikasi identitas diri anda<br /><br />

            Silahkan pilih metode verifikasi yang akan dikirimkan melalui nomor
            <span id="maskedPhone" style="font-weight: bold">{{
              maskedPhoneNumber
            }}</span>
          </p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
          "
        >
          <button
            type="button"
            class="btn btn-primary"
            style="width: 90%; height: 70px"
            @click="openFourthModal(1)"
          >
            <img src="@/assets/image/ic_sms.png" height="20" /> &nbsp;Via SMS
          </button>
          <!-- <button
            type="button"
            class="btn btn-primary"
            style="width: 90%; height: 70px"
            @click="openFourthModal(2)"
          >
            <img src="@/assets/image/ic_wa.png" height="20" /> &nbsp; 
            Via Whatsapp
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Fourth Modal -->
  <div
    class="modal fade"
    id="fourthModal"
    tabindex="-1"
    aria-labelledby="fourthModalLabel"
    aria-hidden="true"
    ref="fourthModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inputOtpTitle">Verifikasi Kode OTP</h5>
          <div class="close-btn" @click="closeFourthModal(true)">
            <img src="@/assets/icon/close-icon.png" alt="close-icon">
          </div>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            Kode Verifikasi telah dikirimkan via Whatsapp / SMS melalui nomor:
            <span id="maskedPhone" style="font-weight: bold">{{
              maskedPhoneNumber
            }}</span>
          </p>
          <br />
          <div class="otp-container">
            <input
              type="text"
              v-for="(input, index) in otpLength"
              :key="index"
              class="otp-input"
              :maxlength="1"
              @input="handleOtpInput($event, index)"
              :ref="`otpInput${index}`"
              :class="{ 'otp-error': otpError }"
            />
          </div>
          <p v-if="otpError" class="error-text">*Kode OTP salah</p>
          <br />
          <p v-if="availableSendOtp">
            Tidak menerima kode OTP?
            <span class="text-primary" role="button" @click="checkPhoneNext(1)">Kirim ulang kode OTP</span>
          </p>
          <br />
          <p v-if="!availableSendOtp">
            Kode OTP akan dikirimkan kembali secara otomatis jika waktu berakhir
            <span class="text-primary">{{ formattedSendOtpTime }}</span>
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="!isOtpValuesValid || otpError"
            @click="validateOtp()"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Fifth Modal -->
  <div
    class="modal fade"
    id="fifthModal"
    tabindex="-1"
    aria-labelledby="fifthModalLabel"
    aria-hidden="true"
    ref="fifthModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inputOtpTitle">Akun Berhasil Dihapus</h5>
          <div class="close-btn" @click="closeFifthModal(true)">
            <img src="@/assets/icon/close-icon.png" alt="close-icon">
          </div>
        </div>
        <div class="modal-body">
          <div style="display: flex; justify-content: center; margin-top: 20px">
            <img src="@/assets/image/ic_success_delete.png" height="162" />
          </div>
          <div style="margin-top: 30px">
            <p style="text-align: center">
              Terima kasih atas kepercayaan kamu menggunakan Aplikasi PinjamDuit
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="closeFifthModal(true)"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Sixth Modal -->
  <div
    class="modal fade"
    id="sixthModal"
    tabindex="-1"
    aria-labelledby="sixthModalLabel"
    aria-hidden="true"
    ref="sixthModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inputOtpTitle">
            Akun Belum Bisa Dihapus
          </h5>
          <div class="close-btn" @click="closeSixthModal(true)">
            <img src="@/assets/icon/close-icon.png" alt="close-icon">
          </div>
        </div>
        <div class="modal-body">
          <div style="display: flex; justify-content: center; margin-top: 20px">
            <img src="@/assets/image/ic_failed_delete.png" height="162" />
          </div>
          <div style="margin-top: 30px">
            <p style="text-align: center">
              Saat ini anda belum bisa melakukan penghapusan akun. Silahkan
              hubungi Customer Service kami untuk keterangan lebih lanjut.
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="closeSixthModal(true)"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Seventh Modal -->
  <div
    class="modal fade"
    id="seventhModal"
    tabindex="-1"
    aria-labelledby="seventhModalLabel"
    aria-hidden="true"
    ref="seventhModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="inputOtpTitle">
            Hapus Akun
          </h5>
          <div class="close-btn" @click="closeSeventhModal(true)">
            <img src="@/assets/icon/close-icon.png" alt="close-icon">
          </div>
        </div>
        <div class="modal-body">
          <div style="display: flex; justify-content: center; margin-top: 20px">
            <img src="@/assets/image/phone-setting-warning.png" height="162" />
          </div>
          <div style="margin-top: 30px">
            <p style="text-align: center">
              Apakah kamu yakin mau menghapus akun mu ?
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeSeventhModal(true)"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="submitDeleteAccount"
          >
            Yakin
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/main.css";
import axios, { isCancel } from "axios";
import { ref, onMounted, getCurrentInstance } from "vue";
import { uuid as uuidv4 } from "uuidv4";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  name: "Footer",
  data() {
    return {
      otpLength: 6, // Adjust the OTP length as needed
      otpValues: new Array(6).fill(""), // Initialize OTP values as empty
      otpError: false, // To display an error message when OTP is invalid
      phone: "",
      uuid: "",
      deviceId: "wh",
      appMarket: "web",
      appVersion: "99.99.99",
      clientType: "w",
      wybs: "",
      tokenLogin: "",
      errorMessage: "",
      isLoading: false,
      fullPage: false,
      availableSendOtpTime: 0,
      intervalId: null,
      availableSendOtp: false,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.uuid = uuidv4();
    // console.log("Generated UUID:", this.uuid);
  },
  computed: {
    // Validate the input to ensure it's not empty (you can add more validation if necessary)
    isPhoneNumberValid() {
      return this.phone.trim() !== ""; // Button enabled only if the phone number is not empty
    },
    maskedPhoneNumber() {
      return this.maskPhoneNumber(this.phone);
    },
    isOtpValuesValid() {
      // Ensure all OTP values are filled in (not empty)
      return this.otpValues.every((value) => value !== "");
    },
    formattedSendOtpTime() {
      const minutes = Math.floor(this.availableSendOtpTime / 60);
      const seconds = this.availableSendOtpTime % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
  },
  methods: {
    checkPhone(e) {
      e.preventDefault();

      this.isLoading = true;
      axios
        .post(
          "https://h5.pinjamduit.co.id/to/credit-user/checkPhoneWeb",
          new URLSearchParams({
            phone: this.phone,
            uuid: this.uuid,
            deviceId: this.deviceId,
          }),
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
          if (response.data.code == "0") {
            if (
              response.data.data.isExist === 1 ||
              response.data.data.isExist === 2
            ) {
              this.wybs = response.data.data.wybs;
              this.errorMessage = "";
              this.openThirdModal();
            } else if (response.data.data.isExist === 0) {
              this.errorMessage = "*Nomor telepon tidak terdaftar!";
            } else {
              this.errorMessage = "*Limit Pengajuan Penghapusan Akun Habis!";
            }
          } else {
            this.errorMessage = response.data.message;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.error("Error:", error);
          this.errorMessage =
            error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan jaringan. Silakan coba lagi.";
        });

      // var response = { 
      //   "data" : {
      //     "code": "0",
      //     "message": "Berhasil",
      //     "data": {
      //         "isExist": 1,
      //         "wybs": "PgRBlvcwyqVs2Zsux4eB"
      //     }
      //   }
      // };

      // this.isLoading = false;
      // if (response.data.code == "0") {
      //   if (
      //     response.data.data.isExist === 1 ||
      //     response.data.data.isExist === 2
      //   ) {
      //     this.wybs = response.data.data.wybs;
      //     this.errorMessage = "";
      //     this.openThirdModal();
      //   } else if (response.data.data.isExist === 0) {
      //     this.errorMessage = "*Nomor telepon tidak terdaftar!";
      //   } else {
      //     this.errorMessage = "*Limit Pengajuan Penghapusan Akun Habis!";
      //   }
      // } else {
      //   this.errorMessage = response.data.message;
      // }
    },
    checkPhoneNext(sms_service) {
      this.isLoading = true;
      axios
        .post(
          "https://h5.pinjamduit.co.id/to/credit-user/checkPhoneNext",
          new URLSearchParams({
            phone: this.phone,
            sms_useage: "10",
            deviceId: this.deviceId,
            sms_service: 1, // default=1, 1. SMS, 2. Whatsapp
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Accept-Encoding": "gzip, deflate, br, zstd",
              "SS": this.wybs,
            },
          }
        )
        .then((response) => {
          this.isLoading = false;
          // console.log(response.data);
          if (response.data.code == "0") {
            this.errorMessage = "";
            this.availableSendOtpTime = 120;
            this.startCountdown();
          } else {
            this.errorMessage = response.data.message;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.isLoading = false;
          this.errorMessage =
            error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan jaringan. Silakan coba lagi.";
        });
      // var response = { 
      //   "data" : {
      //     "code": "0",
      //     "message": "",
      //     "data": {
      //       "item": {
      //         "captchaUrl": "deprecated",
      //       },
      //     },
      //   }
      // };

      // if (response.data.code == "0") {
      //   this.errorMessage = "";
      //   this.availableSendOtpTime = 120;
      //   this.startCountdown();
      // } else {
      //   this.errorMessage = response.data.message;
      // }
    },
    startCountdown() {
      this.intervalId = setInterval(() => {
        if (this.availableSendOtpTime > 0) {
          this.availableSendOtpTime--;
          this.availableSendOtp = false;
        } else {
          clearInterval(this.intervalId);
          this.availableSendOtp = true;
        }
      }, 1000);
    },
    maskPhoneNumber(phone) {
      const firstPart = phone.slice(0, 8); // "+62 812 "
      const maskedPart = phone.slice(6, 10).replace(/\d/g, "*"); // "11" -> "**"
      const lastPart = phone.slice(10); // "223344"
      return firstPart + maskedPart + lastPart;
    },
    handleOtpInput(event, index) {
      const value = event.target.value;
      if (value.length === 1) {
        this.otpValues[index] = value;
        if (index < this.otpLength - 1) {
          this.$nextTick(() => {
            const nextInput = this.$refs[`otpInput${index + 1}`];
            if (nextInput && nextInput[0]) {
              nextInput[0].focus();
            }
          });
        }
        
        if ((index + 1) == 6) {
          this.validateOtp();
        }
      }
    },
    validateOtp() {
      
      this.isLoading = true;
      axios
        .post(
          "https://h5.pinjamduit.co.id/to/credit-user/login",
          new URLSearchParams({
            username: this.phone,
            smsCode: this.otpValues.join(""),
            codeType: 10,
            deviceId: this.deviceId,
            appMarket: this.appMarket,
            appVersion: this.appVersion,
            mobilePhone: this.phone,
            clientType: this.clientType,
            ts: Date.now(),
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Accept-Encoding": "gzip, deflate, br, zstd",
            },
          }
        )
        .then((response) => {
          this.isLoading = false;
          if (response.data.code == "0") {
            this.errorMessage = "";
            this.openSeventhModal();
            clearInterval(this.intervalId);
            this.tokenLogin = response.data?.data?.item?.token ?? "";
          } else {
            this.otpError = true;
            this.errorMessage = response.data.message;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.isLoading = false;
          this.otpError = true;
          this.errorMessage =
            error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan saat memverifikasi kode OTP.";
        });
      
      // var response = { 
      //   "data" : {
      //     "code": "0",
      //     "message": "Berhasil",
      //     "data": {
      //         "item": {
      //             "uid": "uid",
      //             "username": "username",
      //             "realname": "realname",
      //             "token": "token",
      //         }
      //     }
      //   }
      // };
      // // var response = { 
      // //   "data" : {
      // //     "code": "-1",
      // //     "message": "Kode OTP tidak valid."
      // //   }
      // // };

      // if (response.data.code == "0") {
      //   this.errorMessage = "";
      //   this.openSeventhModal();
      //   clearInterval(this.intervalId);
      //   this.tokenLogin = response.data?.data?.item?.token ?? "";
      // } else {
      //   this.otpError = true;
      //   this.errorMessage = response.data.message;
      // }
    },
    submitDeleteAccount() {
      this.closeSeventhModal();
      this.isLoading = true;
      axios
        .post(
          "https://h5.pinjamduit.co.id/to/credit-user/userDelete",
          new URLSearchParams({
            method: 1,
            isDelete: 1,
            phone: this.phone,
            codeType: 10,
            deviceId: this.deviceId,
            appMarket: this.appMarket,
            appVersion: this.appVersion,
            mobilePhone: this.phone,
            clientType: this.clientType,
            ts: Date.now(),
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Accept-Encoding": "gzip, deflate, br, zstd",
              "token": this.tokenLogin,
            },
          }
        )
        .then((response) => {
          this.isLoading = false;
          if (response.data.code == "0") {
            this.errorMessage = response.data.message;
            this.openFifthModal();
          } else {
            this.errorMessage = response.data.message;
            this.openSixthModal();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.isLoading = false;
          this.errorMessage =
            error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan saat menghapus akun. Silakan coba lagi.";
        });
      
      // var response = { 
      //   "data" : {
      //     "code": "0",
      //     "message": "Berhasil"
      //   }
      // };
      
      // // var response = { 
      // //   "data" : {
      // //       "code": "-1",
      // //       "message": "message"
      // //   }
      // // };

      // if (response.data.code == "0") {
      //   this.errorMessage = response.data.message;
      //   this.openFifthModal();
      // } else {
      //   this.errorMessage = response.data.message;
      //   this.openSixthModal();
      // }
    },
    clearAllInput(isCancel=false) {
      if (isCancel) {
        this.phone = "";  // Clear the phone number
        for (let i = 0; i < this.otpLength; i++) {
          this.$refs[`otpInput${i}`][0].value = '';
        }
        this.errorMessage = ""; // Clear the error message
        this.otpError = false;
        clearInterval(this.intervalId); // Clear the interval
        this.tokenLogin = ""; // Clear the token
      }
    },
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const firstModal = ref(null);
    const secondModal = ref(null);
    const thirdModal = ref(null);
    const fourthModal = ref(null);
    const fifthModal = ref(null);
    const sixthModal = ref(null);
    const seventhModal = ref(null);
    let bootstrapFirstModal = null;
    let bootstrapSecondModal = null;
    let bootstrapThirdModal = null;
    let bootstrapFourthModal = null;
    let bootstrapFifthModal = null;
    let bootstrapSixthModal = null;
    let bootstrapSeventhModal = null;

    const openFirstModal = () => {
      if (bootstrapFirstModal) {
        bootstrapFirstModal.show();
      }
    };

    const closeFirstModal = () => {
      if (bootstrapFirstModal) {
        bootstrapFirstModal.hide();
      }
    };

    const openSecondModal = () => {
      closeFirstModal(); // Close the first modal
      setTimeout(() => {
        if (bootstrapSecondModal) {
          bootstrapSecondModal.show(); // Open the second modal
        }
      }, 500); // Delay to allow the first modal to close before opening the second
    };

    const closeSecondModal = (isCancel=false) => {
      if (bootstrapSecondModal) {
        bootstrapSecondModal.hide();
        // phone.value = '';
        // errorMessage.value = '';
        proxy.clearAllInput(isCancel);
      }
    };

    const openThirdModal = () => {
      closeSecondModal(); // Close the second modal
      setTimeout(() => {
        if (bootstrapThirdModal) {
          bootstrapThirdModal.show(); // Open the second modal
        }
      }, 500); // Delay to allow the second modal to close before opening the second
    };

    const closeThirdModal = (isCancel=false) => {
      if (bootstrapThirdModal) {
        bootstrapThirdModal.hide();
        proxy.clearAllInput(isCancel);
      }
    };

    const openFourthModal = (sms_service) => {
      closeThirdModal(); // Close the second modal
      setTimeout(() => {
        // console.log(sms_service);
        if (bootstrapFourthModal) {
          proxy.checkPhoneNext(sms_service);
          bootstrapFourthModal.show(); // Open the second modal
        }
      }, 500); // Delay to allow the second modal to close before opening the second
    };

    const closeFourthModal = (isCancel=false) => {
      if (bootstrapFourthModal) {
        bootstrapFourthModal.hide();
        proxy.clearAllInput(isCancel);
      }
    };

    const openFifthModal = () => {
      closeFourthModal(); // Close the second modal
      setTimeout(() => {
        if (bootstrapFifthModal) {
          bootstrapFifthModal.show(); // Open the second modal
        }
      }, 500); // Delay to allow the second modal to close before opening the second
    };

    const closeFifthModal = (isCancel=false) => {
      if (bootstrapFifthModal) {
        bootstrapFifthModal.hide();
        proxy.clearAllInput(isCancel);
      }
    };

    const openSixthModal = () => {
      closeFourthModal(); // Close the second modal
      setTimeout(() => {
        if (bootstrapSixthModal) {
          bootstrapSixthModal.show(); // Open the second modal
        }
      }, 500); // Delay to allow the second modal to close before opening the second
    };

    const closeSixthModal = (isCancel=false) => {
      if (bootstrapSixthModal) {
        bootstrapSixthModal.hide();
        proxy.clearAllInput(isCancel);
      }
    };

    const openSeventhModal = () => {
      closeFourthModal(); // Close the second modal
      setTimeout(() => {
        if (bootstrapSeventhModal) {
          bootstrapSeventhModal.show(); // Open the second modal
        }
      }, 500); // Delay to allow the second modal to close before opening the second
    };

    const closeSeventhModal = (isCancel=false) => {
      if (bootstrapSeventhModal) {
        bootstrapSeventhModal.hide();
        proxy.clearAllInput(isCancel);
      }
    };

    onMounted(() => {
      if (firstModal.value) {
        bootstrapFirstModal = new bootstrap.Modal(firstModal.value, {
          keyboard: false,
        });
      }

      if (secondModal.value) {
        bootstrapSecondModal = new bootstrap.Modal(secondModal.value, {
          keyboard: false,
        });
      }

      if (thirdModal.value) {
        bootstrapThirdModal = new bootstrap.Modal(thirdModal.value, {
          keyboard: false,
        });
      }

      if (fourthModal.value) {
        bootstrapFourthModal = new bootstrap.Modal(fourthModal.value, {
          keyboard: false,
        });
      }

      if (fifthModal.value) {
        bootstrapFifthModal = new bootstrap.Modal(fifthModal.value, {
          keyboard: false,
        });
      }

      if (sixthModal.value) {
        bootstrapSixthModal = new bootstrap.Modal(sixthModal.value, {
          keyboard: false,
        });
      }

      if (seventhModal.value) {
        bootstrapSeventhModal = new bootstrap.Modal(seventhModal.value, {
          keyboard: false,
        });
      }
    });

    return {
      openFirstModal,
      closeFirstModal,
      openSecondModal,
      closeSecondModal,
      openThirdModal,
      closeThirdModal,
      openFourthModal,
      closeFourthModal,
      openFifthModal,
      closeFifthModal,
      openSixthModal,
      closeSixthModal,
      openSeventhModal,
      closeSeventhModal,
      firstModal,
      secondModal,
      thirdModal,
      fourthModal,
      fifthModal,
      sixthModal,
      seventhModal,
    };
  },
};
</script>

<style scoped>
.ud-footer-box {
  margin: 0 30px;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--white);
  width: 150px;
  padding: 10px 20px;
  border-radius: 30px;
  /* Rounded corners */
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.btn-primary:disabled {
  background-color: rgba(0, 121, 121, 0.16);
  cursor: not-allowed;
}

.btn-secondary {
  background-color: var(--color-background-mute);
  color: var(--body-color);
  width: 150px;
  padding: 10px 20px;
  border-radius: 30px;
  /* Rounded corners */
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.btn-secondary:hover {
  background-color: #d9edff;
}

.modal-header {
  display: flex;
  justify-content: center;
  border-bottom: 0 none;
}

.modal-footer {
  display: flex;
  justify-content: space-evenly;
  border-top: 0 none;
  margin-bottom: 10px;
}

.modal-content {
  border-color: white;
  height: 500px;
}

.modal-lg {
  max-width: calc(30% - 80px);
  max-height: calc(100% - 80px);
}

.content-modal {
  overflow-y: scroll;
}

.close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 24px;
  height: auto;
  cursor: pointer;
}

@media (max-width: 1080px) {
  .modal-lg {
    max-width: calc(100%);
    max-height: calc(100% - 80px);
  }
}

.modal-text {
  font-size: 14px;
  line-height: 17px;
}

.modal-title {
  font-weight: 600;
}

.custom-input {
  width: 100%;
  /* Full width input */
  padding: 12px;
  /* Padding inside the input */
  border-radius: 10px;
  /* Rounded corners */
  border: 1px solid #e0e0e0;
  /* Light border */
  background-color: #eaeaea;
  /* Light gray background */
  font-size: 16px;
  /* Font size */
  color: #333;
  /* Text color */
  outline: none;
  /* Remove default outline */
}

.custom-input:focus {
  border-color: #c0c0c0;
  /* Border color on focus */
}

.otp-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.otp-input {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  margin: 0 5px;
  background-color: #eaeaea;
}

.otp-container input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 2px solid #ccc;
  margin-right: 5px;
}

.otp-error {
  border-color: red;
  color: red;
}

.error-text {
  display: flex;
  justify-content: flex-end;
  color: red;
  font-size: 14px;
}

.mail-footer {
  color: white;
  margin-left: 33px;
  text-decoration: none;
}

@media (max-width: 1399px) {
  .mail-footer {
    color: white;
    margin-left: 0px;
    text-decoration: none;
  }
}

@media (max-width: 1199px) {
  .mail-footer {
    color: white;
    margin-left: 5px;
    text-decoration: none;
  }
}
</style>
