<template>
    <section id="advantages" class="position-relative">
        <div class="position-absolute top-0 start-0 w-100">
            <img src="@/assets/image/bg-advantages.png" class="d-block w-100 bg-advantages" alt="bg-advantages">
        </div>
        <div class="container position-relative">
            <div class="row" style="padding-top: 5rem;">
                <div class="col-lg-10 advantages-gap">
                    <div class="fs-3 fw-bold text-center mb-3">Mengapa Memilih Aplikasi PinjamDuit?</div>
                    <div class="row d-flex flex-row justify-content-between advantages-row advantages-row-1">
                        <div class="col-lg-3 card-advantages">
                            <div class="row h-100">
                                <div class="col-4 advantages-logo">
                                    <img src="@/assets/image/item-advantages-1.png" alt="item-advantages-1">
                                </div>
                                <div class="col-8 advantages-body">
                                    <div class="fw-bold">Legalitas</div>
                                    <ul class="list-desc">
                                        <li>Telah Berizin & diawasi oleh OJK</li>
                                        <li>Anggota Terdaftar dari AFTECH dan AFPI</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 card-advantages">
                            <div class="row h-100">
                                <div class="col-4 advantages-logo">
                                    <img src="@/assets/image/item-advantages-2.png" alt="item-advantages-1">
                                </div>
                                <div class="col-8 advantages-body">
                                    <div class="fw-bold">Keunggulan</div>
                                    <ul class="list-desc">
                                        <li>Proses pinjaman mudah, pencairan cepat</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex flex-row justify-content-between advantages-row advantages-row-2">
                        <div class="col-lg-3 card-advantages">
                            <div class="row h-100">
                                <div class="col-4 advantages-logo">
                                    <img src="@/assets/image/item-advantages-3.png" alt="item-advantages-3">
                                </div>
                                <div class="col-8 advantages-body">
                                    <div class="fw-bold">Layanan</div>
                                    <ul class="list-desc">
                                        <li>Layanan berkualitas, biaya transparan, aman dan terpercaya</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 card-advantages">
                            <div class="row h-100">
                                <div class="col-4 advantages-logo">
                                    <img src="@/assets/image/item-advantages-4.png" alt="item-advantages-4">
                                </div>
                                <div class="col-8 advantages-body">
                                    <div class="fw-bold">Bunga</div>
                                    <ul class="list-desc">
                                        <li>Suku bunga harian sebesar 0,3%</li>
                                    </ul>
                                </div>
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
    name: 'Advantages',
}
</script>
<style scoped>
    .bg-advantages {
        object-fit: cover;
        height: 100%;
    }
    .advantages-row {
        padding: 0 1rem 0rem 1rem;
    }
    .card-advantages {
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        border: 1px solid rgba(231, 244, 254, 1);
        height: auto;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
        margin-bottom: 1rem;

        .advantages-logo {
            align-content: center;
            padding-right: 0px;
            padding-left: 20px;
        }
        .advantages-body {
            padding: 10px;
            align-content: center;
            
            .list-desc {
                font-size: 14px;
                padding: 0 10px 0 0;
            }
        }
    }
    @media (min-width: 992px) {
        .advantages-gap {
            display: flex;
            flex-direction: column;
            gap: 5rem;
        }
        .advantages-row-1 {
            padding: 0 5rem 0 5rem !important;
        }
    }
</style>