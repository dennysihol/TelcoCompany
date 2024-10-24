<template>
  <section id="calculation-calculate" class="container container-calculate">
    <div class="row">
      <div class="col-10 text-center ps-0 pe-0 vh-100">
        <h2>Simulasi Perhitungan Pinjaman</h2>
        <div class="body-calculate position-relative mt-5 mb-5 text-start">
          <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fbg-simulasi-calculate.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879" alt="bg-calculate-simulation" class="bg-calculate-simulation">
          <div class="card-calculate">
            <div class="row">
              <div class="d-flex flex-row justify-content-between fw-semibold">
                <div class="fw-medium fs-14">Jumah Pinjaman (Rp)</div>
                <div class="fw-bold fs-18">{{ formatNumber(rangeValue) }}</div>
              </div>
              <div>
                <input 
                  type="range"
                  class="inputRange"
                  min="100000"
                  max="20000000"
                  step="100000"
                  v-model="rangeValue" 
                  @input="updateSliderBackground"
                  :style="{ background: sliderBackground }"
                  @mousedown="onHoldRangeValue"
                  @mouseup="onReleaseRangeValue"
                  ref="range">
              </div>
              <div class="d-flex flex-row justify-content-between fw-semibold">
                <div class="fw-normal fs-12">100.000</div>
                <div class="fw-normal fs-12">20.000.000</div>
              </div>
              <div class="pt-3 pb-3">
                <div class="hr"></div>
              </div>
              <div class="row d-flex flex-row justify-content-between fw-semibold ps-0 pe-0">
                <div class="col-lg-6 fw-medium fs-14">Lama Pinjaman</div>
                <div class="col-lg-6 fw-bold fs-18 d-flex flex-row justify-content-between">
                  <label class="radio-container" @click="handleLoanPeriod(5)">
                    <input type="radio" name="loan-period" checked/>
                    <span class="custom-radio"></span>
                    <span class="fw-bold fs-18">150 Hari</span>
                  </label>
                  <label class="radio-container" @click="handleLoanPeriod(6)">
                    <input type="radio" name="loan-period" />
                    <span class="custom-radio"></span>
                    <span class="fw-bold fs-18">180 Hari</span>
                  </label>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-between fw-semibold">
                <div class="fw-medium fs-14">Bunga</div>
                <div class="fw-bold fs-18">0,3 % / Hari</div>
              </div>
              <div class="pt-3 pb-3">
                <div class="hr"></div>
              </div>
              <div class="d-flex flex-row justify-content-between fw-semibold">
                <div class="fw-medium fs-14 w-18-rm">Estimasi Jumlah yang harus dibayarkan (Termasuk bunga)</div>
                <div class="fw-bold fs-18 w-18-rm text-end">Rp. {{ formatNumber(totalPay) }} / Bulan</div>
              </div>
              <div class="pt-3 pb-3">
                <div class="hr"></div>
              </div>
              <div class="text-center">
                <button class="btn-custom btn-custom-1" type="button" @click="applyNow">Ajukan Sekarang</button>
              </div>
              <div class="pt-3">
                <div class="fw-bold fs-10">* Disclaimer </div>
                <div class="fs-10">Hasil simulasi tidak mengikat dan dapat berubah tergantung pada hasil Analisa kredit, suku bunga, jangka Waktu pinjaman dan kebijakan platform.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'CalculationSimulation',
    data() {
      return {
        data: [],
        rangeValue: 10000000, // Initial range value
        sliderBackground: '', // To hold the dynamic background
        isHeldSlider: false,
        percentagePlatformFee: 0.45,
        percentagePPN: 0.0385,
        percentageBorrower: 1,
        percentageSumRepaymentBorrower: 0,
        periodOfMonth: 5,
        totalPay: 0,
      }
    },
    methods: {
      updateSliderBackground() {
        // Calculate the percentage based on the current slider value
        const percentage = ((this.rangeValue - this.$refs.range.min) / (this.$refs.range.max - this.$refs.range.min)) * 100;
        
        // Update the background style dynamically
        this.sliderBackground = `linear-gradient(to right, rgba(0, 135, 255, 1) ${percentage}%, rgba(230, 243, 255, 1) ${percentage}%)`;
        this.percentageSumRepaymentBorrower = this.percentagePlatformFee + this.percentagePPN + this.percentageBorrower;
        this.percentageSumwithoutPPN = this.percentagePlatformFee + this.percentageBorrower;
        this.totalPay = Math.round((this.percentageSumwithoutPPN * this.rangeValue) / this.periodOfMonth);
        this.updateThumbColor();
      },
      onHoldRangeValue() {
        this.isHeldSlider = true;
        this.updateThumbColor();
      },
      onReleaseRangeValue() {
        this.isHeldSlider = false;
        this.updateThumbColor();
      },
      updateThumbColor() {
        const boxShadow = this.isHeldSlider ? '0px 0px 10px 0px rgba(0, 0, 0, 0.25)' : 'none';
        this.$refs.range.style.setProperty('--thumb-box-shadow', boxShadow);
      },
      handleLoanPeriod(period) {
        this.periodOfMonth = period;
        this.updateSliderBackground();
      },
      formatNumber(value) {
        // Use a regular expression to add thousand separators
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
      applyNow() {
        const userAgent = window.navigator.userAgent,
            platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
            macosPlatforms = ['macos', 'macintosh', 'macintel', 'macppc', 'mac68k'],
            windowsPlatforms = ['win32', 'win64', 'windows', 'wince'],
            iosPlatforms = ['iphone', 'ipad', 'ipod'];
        let os = null;
        let urlDirectApp = null;

        if (macosPlatforms.indexOf(platform.toLowerCase()) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform.toLowerCase()) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform.toLowerCase()) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (/Linux/.test(platform)) {
          os = 'Linux';
        }

        if (os == 'Mac OS' || os == 'iOS') {
          urlDirectApp = 'https://apps.apple.com/id/app/pinjamduit-kta-dana-cepat/id6476541604';
        } else {
          urlDirectApp = 'https://play.google.com/store/apps/details?id=com.stanfordtek.pinjamduit&hl=id';
        }

        window.open(urlDirectApp, '_blank');
      }
    },
    mounted() {
      // Initialize the slider background on component mount
      this.updateSliderBackground();
    }
}
</script>
<style scoped>
  .container-calculate {
    margin-top: 16rem; 

    .body-calculate {
      width: 100%;
      
      .fs-10 {
        font-size: 10px;
      }
      .fs-12 {
        font-size: 12px;
      }
      .fs-14 {
        font-size: 14px;
      }
      .fs-18 {
        font-size: 18px;
      }
      .w-18-rm {
        width: 18rem;
      }
      .hr {
        width: 100%;
        border: 1px solid rgba(231, 244, 254, 1);
      }
      
      .bg-calculate-simulation {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        height: calc(100vh - 200px);
        object-fit: cover;
      }

      .card-calculate {
        position: absolute;
        background-color: rgba(255, 255, 255, 1);
        width: 35rem;
        top: 5rem;
        left: 4rem;
        padding: 2rem;
        border-radius: 8px;

        .inputRange {
          -webkit-appearance: none;
          width: 100%;
          height: 10px;
          background: rgba(230, 243, 255, 1);
          border-radius: 10px;
          outline: none;
          opacity: 0.7;
          -webkit-transition: .2s;
          transition: opacity .2s;
        }
        .inputRange::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: rgba(255, 193, 11, 1);
          border: 1px solid rgba(255, 255, 255, 1);
          cursor: pointer;
          box-shadow: var(--thumb-box-shadow, none);
        }

        .inputRange::-moz-range-thumb {
          width: 25px;
          height: 25px;
          background-color: blue;
          cursor: pointer;
        }
      }
      
      /* Hide the default radio input */
      input[type="radio"] {
        display: none;
      }

      /* Container for custom radio button */
      .radio-container {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }

      /* Custom radio button circle */
      .custom-radio {
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        position: relative;
        margin-right: 10px;
        transition: all 0.3s ease;
        background-color: rgba(230, 243, 255, 1);
      }
      
      .custom-radio::before {
        content: "";
        width: 12px;
        height: 12px;
        background-color: rgba(176, 218, 255, 1);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.2s ease;
      }

      /* Inner dot when radio is selected */
      .custom-radio::after {
        content: "";
        width: 12px;
        height: 12px;
        background-color: rgba(0, 135, 255, 1);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.2s ease;
      }
      
      /* the radio input*/
      input[type="radio"] + .custom-radio::before {
        transform: translate(-50%, -50%) scale(1);
      }

      /* When the radio input is checked */
      input[type="radio"]:checked + .custom-radio::after {
        transform: translate(-50%, -50%) scale(1);
      }
      
      /* Label styling */
      .radio-label {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1025px) {
    .card-calculate { 
      width: 23rem !important;
      top: 0 !important;
      left: 0 !important;
      padding: 10px !important;
    }
  }
  @media (max-width: 391px) {
    .container-calculate {
      margin-top: 20rem; 
      
      .card-calculate { 
        width: 100% !important;
      }
    }
  }
</style>