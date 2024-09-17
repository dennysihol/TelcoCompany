<template>
  <section id="calculation-calculate" class="container container-calculate">
    <div class="row">
      <div class="col-10 text-center">
        <h2>Simulasi Perhitungan Pinjaman</h2>
        <div class="body-calculate position-relative mt-5 mb-5 text-start">
          <img src="https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fbg-simulasi-calculate.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879" alt="bg-calculate-simulation" class="bg-calculate-simulation">
          <div class="card-calculate">
            <div class="row">
              <div class="d-flex flex-row justify-content-between fw-semibold">
                <div>Jumah Pinjaman (Rp)</div>
                <div>600.000</div>
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
        data: []
      }
    }
}
</script>
<style scoped>
  .container-calculate {
    margin-top: 16rem; 

    .body-calculate {
      width: 100%;
      
      .bg-calculate-simulation {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }

      .card-calculate {
        position: absolute;
        background-color: rgba(255, 255, 255, 1);
        width: 33rem;
        top: 5rem;
        left: 4rem;
        padding: 2rem;
        border-radius: 8px;
      }
    }
  }
</style>