<template>
  <div class="content-section2">
    <div class="col-lg-10 article-gap w-100">
      <div class="row">
        <div class="col-4" v-for="(value, key) in cardData" :key="key">
          <div class="cards-section">
            <div class="card">
              <div class="card-icon">
                <img src="@/assets/image/item-advantages-1.png" alt="Icon">
              </div>
              <div class="card-content">
                <p>Total Penerima Dana Sejak Berdiri</p>
                <p class="value">{{ value.total }}</p>
                <p>Total Pada Tahun Berjalan</p>
                <p class="value">{{ value.thisYear }}</p>
                <p>Total Aktif Berupa Posisi Akhir</p>
                <p class="value">{{ value.active }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Section: Financial Summary Cards -->
    <!-- <div class="cards-section">
      <div class="col-4" v-for="(value, key) in cardData" :key="key">
        <div class="cards-section">
          <div class="card">
            <div class="card-icon">
              <img src="@/assets/image/item-advantages-1.png" alt="Icon">
            </div>
            <div class="card-content">
              <p>Total Penerima Dana Sejak Berdiri</p>
              <p class="value">{{ value.total }}</p>
              <p>Total Pada Tahun Berjalan</p>
              <p class="value">{{ value.thisYear }}</p>
              <p>Total Aktif Berupa Posisi Akhir</p>
              <p class="value">{{ value.active }}</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Bottom Section: TKB Stats -->
    <div class="tkb-box">
      <!-- Dynamically display TKB data -->
      <div class="tkb-item" v-for="(item, index) in tkbData.dataPercentage" :key="index">
        <h3>{{ item.tkbName }}: <span style="font-weight: bold">{{ item.tkb }}%<b/></span></h3>
        <p>{{item.tkbDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Dashboard",
  data() {
    return {
      dataStatistic: {
        borrowerPerson: "0",
        activeBorrowerCompany: "0",
        toRepayAmount: "0",
        loanAmountTotal: "0",
        borrowerCompany: "0",
        loanAmountThisYear: "0",
        badDebtRatio: "0",
        tkb60: "0",
        tkb0: "0",
        calculateDate: "",
        activeBorrowerPerson: "0",
        tkb90: "0",
        activeBorrowerPersonThisYear: "0",
        tkb30: "0",
      },
    };
  },
  computed: {
    // Prepare card data for the top section
    cardData() {
      return {
        borrowerPerson: {
          type: "borrowerPerson",
          desc1: "Total Penerima Dana Sejak Berdiri",
          desc2: "Total Penerima Dana Pada Tahun Berjalan",
          desc3: "Total Penerima Dana Aktif Berupa Posisi Akhir",
          total: parseInt(this.dataStatistic.borrowerPerson).toLocaleString(),
          thisYear: parseInt(this.dataStatistic.activeBorrowerPersonThisYear).toLocaleString(),
          active: parseInt(this.dataStatistic.activeBorrowerPerson).toLocaleString(),
        },
        activeBorrowerCompany: {
          type: "activeBorrowerCompany",
          desc1: "Total Pemberi Dana Sejak Berdiri",
          desc2: "Total Pemberi Dana Pada Tahun Berjalan",
          desc3: "Total Pemberi Dana Aktif Berupa Posisi Akhir",
          total: "9",
          thisYear: "6",
          active: "6",
        },
        toRepayAmount: {
          type:"toRepayAmount",
          desc1: "Total Pendanaan Sejak Berdiri",
          desc2: "Total Pendanaan Pada Tahun Berjalan",
          desc3: "Total Pendanaan Aktif Berupa Posisi Akhir",
          total: `Rp. ${parseInt(this.dataStatistic.loanAmountTotal).toLocaleString()}`,
          thisYear: `Rp. ${parseInt(this.dataStatistic.loanAmountThisYear).toLocaleString()}`,
          active: `Rp. ${parseInt(this.dataStatistic.toRepayAmount).toLocaleString()}`,
        },
      };
    },
    // Prepare TKB data for the bottom section
    tkbData() {
      return {
        dataPercentage: [
          {
            tkbName: "TKB 0",
            tkb: this.dataStatistic.tkb0,
            tkbDesc: "TKB0 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 0 (nol) hari kalender terhitung sejak jatuh tempo.",
          },
          {
            tkbName: "TKB 30",
            tkb: this.dataStatistic.tkb30,
            tkbDesc: "TKB30 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 30 (tiga puluh) hari kalender terhitung sejak jatuh tempo.",
          },
          {
            tkbName: "TKB 60",
            tkb: this.dataStatistic.tkb60,
            tkbDesc: "TKB60 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 60 (enam puluh) hari kalender terhitung sejak jatuh tempo.",
          },
          {
            tkbName: "TKB 90",
            tkb: this.dataStatistic.tkb90,
            tkbDesc: "TKB90 adalah ukuran tingkat keberhasilan Penyelenggara dalam memfasilitasi penyelesaian kewajiban Pendanaan dalam jangka waktu sampai dengan 90 (sembilan puluh) hari kalender terhitung sejak jatuh tempo.",
          },
        ]
      };
    },
  },
  methods: {
    fetchData() {
      axios.post('https://api.pinjamduit.co.id/gw/loan/credit-app/tkb90?deviceId=WEB&clientType=web&appMarket=web&appVersion=99.99.99')  // Replace with your API URL
          .then(response => {
            this.dataStatistic = response.data.data;
          })
          .catch(error => {
            console.error("Error fetching data: ", error);
          });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* Content Section Styling */
.content-section2 {
  border-radius: 10px;
  padding: 0 0 30px 0;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cards-section {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
}

.card {
  background-color: #e6f3ff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 500px;
  width: 100%;
  text-align: center;
}

.card-icon img {
  width: 50px;
  margin-bottom: 20px;
}

.card-content h3 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.value {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin: 36px 0;
}

/* Styling for Each TKB Box */
.tkb-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 0;
}

.tkb-item {
  flex-basis: calc(50% - 20px);
  background-color: white;
  padding: 20px;
  text-align: center;
}

.tkb-box h3 {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: start;
}

.tkb-box h3 span {
  color: #007bff;
}

.tkb-box p {
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: start;
}
</style>
