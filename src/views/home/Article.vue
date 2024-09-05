<template>
    <section id="article" class="position-relative bg-article">
        <div class="container container-article position-relative">
            <div class="row">
                <div class="col-lg-10 article-gap">
                    <div class="d-flex gap-3 justify-content-center mb-3">
                        <button :class="tabSelected == 'article'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'" type="button" @click="handleTab('article')">Artikel</button>
                        <button :class="tabSelected == 'event'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'" type="button" @click="handleTab('event')">Event</button>
                    </div>
                    <div class="fs-3 fw-bold text-center mb-3">Informasi Terkini, Berita dan Event</div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card-article">
                                <div>Jakarta, 26 Mar 2023</div>
                                <div>Obrolan Pintar “Build Your Future, Be Smart About Money”</div>
                                <a href="#">Lebih lanjut ></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-article">
                                <div>Jakarta, 26 Mar 2023</div>
                                <div>Obrolan Pintar “Build Your Future, Be Smart About Money”</div>
                                <a href="#">Lebih lanjut ></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-article">
                                <div>Jakarta, 26 Mar 2023</div>
                                <div>Obrolan Pintar “Build Your Future, Be Smart About Money”</div>
                                <a href="#">Lebih lanjut ></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-article">
                                <div>Jakarta, 26 Mar 2023</div>
                                <div>Obrolan Pintar “Build Your Future, Be Smart About Money”</div>
                                <a href="#">Lebih lanjut ></a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn-custom btn-custom-1" type="button">Lihat Semua</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Article',
    data() {
        return {
            tabSelected: "article",
            loading: false,
            error: null,
        };
    },
    methods: {
        handleTab(nameTab) {
            this.tabSelected = nameTab;
        }
    }
}
</script>
<style scoped>
    .bg-article {
        background: rgba(246, 251, 255, 1);
    }
    .container-article {
        padding: 5rem 0 5rem 0;
    }
    .article-gap {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .card-article {
        border: 1px solid rgba(217, 217, 217, 1);
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        padding: 0 0 10px 2rem;
    }
</style>