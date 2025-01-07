<template>
    <section id="article" class="position-relative bg-article">
        <div class="container container-article position-relative overflow-hidden">
            <div class="row">
                <div class="col-lg-10 article-gap pb-5">
                    <div class="d-flex gap-3 justify-content-center mb-3">
                        <button :class="tabSelected == 'article'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'" type="button" @click="handleTab('article')">Artikel</button>
                        <button :class="tabSelected == 'event'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'" type="button" @click="handleTab('event')">Event</button>
                    </div>
                    <div class="fs-3 fw-bold text-center mb-3">Informasi Terkini, Berita dan Event</div>
                        <div class="row">
                            <div class="col-md-6 col-xl-3 mb-4" v-for="item in dataArticleOrEvent" :key="item.id">
                                <div class="card-article d-flex flex-column gap-3 pb-3"
                                    @click="handleRedirectTo(`/blog/${item.id}/${item.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`)">
                                    <div class="card-article-image">
                                    <img :src="item.urlImageBanner" class="w-100" alt="item-article-1">
                                    </div>
                                    <div class="card-article-date d-flex flex-row gap-2">
                                    <img class="card-article-date-icon" src="@/assets/icon/calendar-icon.png">
                                    {{ item.location }}, {{ item.date }}
                                    </div>
                                    <div class="card-article-title">{{ item.title }}</div>
                                    <div class="card-article-read-more">
                                    Lebih lanjut
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn-custom btn-custom-1" type="button" @click="handleRedirectToBlog()">Lihat Semua</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Article',
    data() {
        return {
            tabSelected: "article",
            dataArticle: {
                data: [
                    {
                        "id": 1,
                        "titleArticle": 'Obrolan Pintar "Build Your Future, Be Smart About Money"',
                        "location": "Jakarta",
                        "dateArticle": "26 Mar 2023",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 2,
                        "titleArticle": 'Muda Paham Fintech "Inovasi Keuangan Untuk Generasi Muda"',
                        "location": "Bandar Lampung",
                        "dateArticle": "13 Maret 2022",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 3,
                        "titleArticle": 'OJK Fintech Days Palembang 2019 Otoritas Jasa Keuangan dan',
                        "location": "Palembang",
                        "dateArticle": "2-3 Mei 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 4,
                        "titleArticle": 'Seminar Pendidikan Peran Teknologi Komunikasi dalam Bisnis Financial',
                        "location": "Bandung",
                        "dateArticle": "30 April 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    }
                ],
                countPagination: 7,
                page: 1,
                size: 4,
            },
            dataEvent: {
                data: [
                    {
                        "id": 4,
                        "titleArticle": 'Seminar Pendidikan Peran Teknologi Komunikasi dalam Bisnis Financial',
                        "location": "Bandung",
                        "dateArticle": "30 April 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 3,
                        "titleArticle": 'OJK Fintech Days Palembang 2019 Otoritas Jasa Keuangan dan',
                        "location": "Palembang",
                        "dateArticle": "2-3 Mei 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 2,
                        "titleArticle": 'Muda Paham Fintech "Inovasi Keuangan Untuk Generasi Muda"',
                        "location": "Bandar Lampung",
                        "dateArticle": "13 Maret 2022",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 1,
                        "titleArticle": 'Obrolan Pintar "Build Your Future, Be Smart About Money"',
                        "location": "Jakarta",
                        "dateArticle": "26 Mar 2023",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    }
                ],
                countPagination: 1,
                page: 1,
                size: 4,
            },
            loading: false,
            error: null,
            dataArticleOrEvent: [],
        };
    },
    methods: {
        handleTab(nameTab) {
            this.tabSelected = nameTab;
            this.getData(nameTab);
        },
        handleRedirectTo(path) {
            this.$router.push({ path: path });
        },
        handleRedirectToBlog() {
            this.$router.push({ path: '/blog', query: { ['blog']: this.tabSelected , page: 1 } });
        },
        async getData(category='article') {
            try {
                const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdata.json?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879');
                const responseData = response.data.data;
                this.dataArticleOrEvent = responseData
                .sort((a, b) => b.id - a.id)
                .filter((item)=>item.category === category.toUpperCase())
                .slice(0, 4);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        },
    },
    mounted() {
        this.getData(this.tabSelected);
    },
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
        border-radius: 10px;
        padding: 0 0 10px 2rem;
        cursor: pointer;

        .card-article-image {
            width: 100%;
            position: relative;
            overflow: hidden;

            img {
                object-fit: cover;
                height: 100%;
                min-height: 200px;
                max-height: 200px;
                border-radius: 0 10px 0 10px;
            }
        }
        .card-article-date {
            font-size: 12px;
            font-weight: 400;

            .card-article-date-icon {
                width: 15px;
                height: 15px;
            }
        }
        .card-article-title {
            font-weight: 700;
            font-size: 18px;
            width: 14rem;
            height: 7rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
        .card-article-read-more {
            color: rgba(43, 43, 43, 1);
            font-weight: 400;
            font-size: 16px;
            text-decoration: none;
        }
    }
    @media (max-width: 768px) {
        .card-article {
            margin: 10px;
        }
    }
</style>