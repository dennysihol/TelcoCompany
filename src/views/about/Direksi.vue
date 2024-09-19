<template>
    <section id="about" class="ud-about">
        <div class="container">
            <div class="ud-about-wrapper2">
                <div class="col-lg-10 article-gap w-100">
                    <h1 style="margin-top: 20px; margin-left: 20px;">Direksi</h1>
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-3" v-for="item in (tabSelected == 'article' ? dataArticle : dataEvent)" :key="item.id">
                                <div class="card-article d-flex flex-column gap-3 pb-3">
                                    <div class="card-article-image">
                                        <img :src="item.urlImage" class="w-100" alt="item-article-1">
                                    </div>                                    
                                    <div class="card-article-title">{{ item.name }}</div>
                                    <div class="card-article-date d-flex">
                                        {{ item.role }}
                                    </div>
                                    <div class="card-article-read-more">
                                        Lihat Profile
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs"/>
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
    name: 'Direksi',
    data() {
        return {
            tabSelected: "article",
            dataArticle: [
                {
                    "id": 1,
                    "name": 'Hendri',
                    "role": "Direktur Utama",
                    "dateArticle": "26 Mar 2023",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdirut.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                },
                {
                    "id": 2,
                    "name": 'Jun Zhang',
                    "role": "Direktur",
                    "dateArticle": "13 Maret 2022",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fdirektur.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                }
            ],
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
.floating-widget {
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: absolute;
    top: -12rem;
    /* Adjust the vertical position for the floating effect */
    z-index: 1;
}

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
        .card-article-title {
            font-weight: 700;
            font-size: 18px;
            width: 14rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
        .card-article-read-more {
            color: rgba(43, 43, 43, 1);
            font-weight: 400;
            font-size: 16px;
            text-decoration: none;
            cursor: pointer;
        }
    }
</style>