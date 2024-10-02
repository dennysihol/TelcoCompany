<template>
    <section id="blog" class="position-relative bg-blog">
        <div class="container container-article position-relative">
            <div class="row">
                <div class="col-lg-10 article-gap">
                    <div class="d-flex gap-3 justify-content-center mb-3">
                        <button :class="tabSelected == 'article'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'" type="button" @click="handleTab('article')">Artikel</button>
                        <button :class="tabSelected == 'event'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'" type="button" @click="handleTab('event')">Event</button>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col-md-6 col-xl-3 mb-4" v-for="item in (tabSelected == 'article' ? dataArticle.data : dataEvent.data)" :key="item.id">
                            <div class="card-article d-flex flex-column gap-3 pb-3" @click="handleRedirectTo(`/blog/${item.id}/${item.titleArticle.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`)">
                                <div class="card-article-image">
                                    <img :src="item.urlImage" class="w-100" alt="item-article-1">
                                </div>
                                <div class="card-article-date d-flex flex-row gap-2">
                                    <img class="card-article-date-icon" src="@/assets/icon/calendar-icon.png">
                                    {{ item.location }}, {{ item.dateArticle }}
                                </div>
                                <div class="card-article-title">{{ item.titleArticle }}</div>
                                <div class="card-article-read-more">
                                    Lebih lanjut 
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                        <div class="pagination">
                            <ul>
                                <li
                                    :class="{ disabled: currentPage == 1 }"
                                    @click="handlePageTo(currentPage - 1)"
                                >
                                    <font-awesome-icon :icon="['fas', 'chevron-left']" size="xs"/>
                                </li>
                                <li
                                    :class="currentPage == 1 ? 'active' : ''"
                                    @click="handlePageTo(1)"
                                >
                                    1
                                </li>
                                <li v-if="showLeftEllipsis">...</li>
                                <li
                                    :class="{ active: currentPage == itemPage }"
                                    v-for="itemPage in dynamicPages"
                                    @click="handlePageTo(itemPage)"
                                    :key="itemPage"
                                >
                                    {{ itemPage }}
                                </li>
                                <li v-if="showRightEllipsis">...</li>
                                <li
                                    :class="currentPage == countPagination ? 'active' : ''"
                                    @click="handlePageTo(countPagination)"
                                    v-if="countPagination > 1"
                                >
                                    {{ countPagination }}
                                </li>
                                <li
                                    :class="{ disabled: currentPage == countPagination }"
                                    @click="handlePageTo(currentPage + 1)"
                                >
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Blog',
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
                    },
                    {
                        "id": 5,
                        "titleArticle": 'Obrolan Pintar "Build Your Future, Be Smart About Money"',
                        "location": "Jakarta",
                        "dateArticle": "26 Mar 2023",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 6,
                        "titleArticle": 'Muda Paham Fintech "Inovasi Keuangan Untuk Generasi Muda"',
                        "location": "Bandar Lampung",
                        "dateArticle": "13 Maret 2022",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 7,
                        "titleArticle": 'OJK Fintech Days Palembang 2019 Otoritas Jasa Keuangan dan',
                        "location": "Palembang",
                        "dateArticle": "2-3 Mei 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 8,
                        "titleArticle": 'Seminar Pendidikan Peran Teknologi Komunikasi dalam Bisnis Financial',
                        "location": "Bandung",
                        "dateArticle": "30 April 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 9,
                        "titleArticle": 'Obrolan Pintar "Build Your Future, Be Smart About Money"',
                        "location": "Jakarta",
                        "dateArticle": "26 Mar 2023",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 10,
                        "titleArticle": 'Muda Paham Fintech "Inovasi Keuangan Untuk Generasi Muda"',
                        "location": "Bandar Lampung",
                        "dateArticle": "13 Maret 2022",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 11,
                        "titleArticle": 'OJK Fintech Days Palembang 2019 Otoritas Jasa Keuangan dan',
                        "location": "Palembang",
                        "dateArticle": "2-3 Mei 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 12,
                        "titleArticle": 'OJK Fintech Days Palembang 2019 Otoritas Jasa Keuangan dan',
                        "location": "Palembang",
                        "dateArticle": "2-3 Mei 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                ],
                countPagination: 7,
                page: 1,
                size: 12,
            },
            dataEvent: {
                data: [
                    {
                        "id": 1,
                        "titleArticle": 'Seminar Pendidikan Peran Teknologi Komunikasi dalam Bisnis Financial',
                        "location": "Bandung",
                        "dateArticle": "30 April 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-4.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 2,
                        "titleArticle": 'OJK Fintech Days Palembang 2019 Otoritas Jasa Keuangan dan',
                        "location": "Palembang",
                        "dateArticle": "2-3 Mei 2019",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-3.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 3,
                        "titleArticle": 'Muda Paham Fintech "Inovasi Keuangan Untuk Generasi Muda"',
                        "location": "Bandar Lampung",
                        "dateArticle": "13 Maret 2022",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-2.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    },
                    {
                        "id": 4,
                        "titleArticle": 'Obrolan Pintar "Build Your Future, Be Smart About Money"',
                        "location": "Jakarta",
                        "dateArticle": "26 Mar 2023",
                        "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fitem-article-1.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                    }
                ],
                countPagination: 1,
                page: 1,
                size: 12,
            },
            currentPage: 1,
            loading: false,
            error: null,
        };
    },
    methods: {
        handleTab(nameTab) {
            this.tabSelected = nameTab;
            this.currentPage = 1;
            this.countPagination = tabSelected == 'article' ? dataArticle.countPagination : dataEvent.countPagination;
        },
        handleRedirectTo(redirectTo) {
            this.$router.push({ path: redirectTo });
        },
        handlePageTo(pageTo) {
            if (pageTo >= 1 && pageTo <= this.countPagination ) {
                this.currentPage = pageTo;
            }
        }
    },
    computed: {
        // Calculate dynamic pages around the current page
        dynamicPages() {
            const start = Math.max(this.currentPage - 1, 2);
            const end = Math.min(this.currentPage + 1, this.countPagination - 1);
            const pages = [];
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            return pages;
        },
        // Show ellipsis after the first page
        showLeftEllipsis() {
            return this.currentPage > 3;
        },
        // Show ellipsis before the last page
        showRightEllipsis() {
            return this.currentPage < this.countPagination - 2;
        },
        countPagination() {
            return this.tabSelected == 'article' ? this.dataArticle.countPagination : this.dataEvent.countPagination;
        },
    }
}
</script>
<style scoped>
    .bg-blog {
        background: none;
        z-index: 1;
    }
    .container-article {
        padding: 5rem 0 0 0;
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
    .pagination {
        ul {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            li {
                padding: 5px 10px;
                border: 1px solid rgba(223, 227, 232, 1);
                border-radius: 4px;
                min-width: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
                user-select: none;
            }
            li.active {
                border: 1px solid rgba(0, 135, 255, 1);
                color: rgba(0, 135, 255, 1);
            }
            li.disabled {
                border: none;
                background-color: rgba(231, 244, 254, 1);
                color: rgba(196, 205, 213, 1);
                cursor: no-drop;
            }
        }
    }
    @media (max-width: 768px) {
        .card-article {
            margin: 10px;
        }
    }
</style>