<template>
    <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel"
        :data-bs-interval="intervalBanner" data-bs-pause="false">
        <div class="carousel-inner">
            <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(item, index) in dataBanner"
                :key="item.id">
                <div class="banner-title">{{ item.title }}</div>
                <img :src="item.urlImage" class="d-block w-100" :alt="'home-banner-' + item.id">
            </div>
        </div>
    </div>
    <section class="ud-hero" id="funding">
        <Information />
    </section>
</template>

<script>
import {
    Information,
} from '@/views/whistleblowing/index.js'
export default {
    name: 'Whistleblowing',
    components: {
        Information,
    },
    data() {
        return {
            intervalBanner: 8000,
            dataBanner: [
                {
                    "id": 1,
                    "title": "PinjamDuit Whistleblowing System",
                    "urlImage": "https://firebasestorage.googleapis.com/v0/b/pinjamduit-84ca8.appspot.com/o/pjdweb%2Fwb-background.png?alt=media&token=07bd71fa-5516-4f61-8da7-60c92d729879"
                }
            ],
            loading: true,
            error: null,
        };
    },
}
</script>

<style scoped>
.carousel-item {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* Set this to the desired height for full screen */
    display: flex !important;
    /* Enables flexbox */
    justify-content: center;
    /* Centers horizontally */
    align-items: center;
    /* Centers vertically */
    text-align: start;
    /* Optional: Centers text within the element */

    .banner-title {
        margin-top: -40px;
        margin-left: -580px;
        position: relative;
        z-index: 1;
        font-weight: 600;
        font-size: 3rem;
        width: 30rem;
    }

    @media (max-width: 1399px) {
        .banner-title {
            margin-top: -30px;
            margin-left: -300px;
            position: relative;
            z-index: 1;
            font-weight: 600;
            font-size: 3rem;
            width: 30rem;
        }

    }

    @media (max-width: 991px) {
        .banner-title {
            margin-top: -150px;
            margin-left: -150px;
            position: relative;
            z-index: 1;
            font-weight: 600;
            font-size: 3rem;
            width: 30rem;
        }
    }

    @media (max-width: 768px) {
        .banner-title {
            padding: 10px;
            font-size: 2rem;
            margin-left: 30px;
            margin-top: -100px;
        }
    }
}

.carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

@media (max-width: 768px) {
    .carousel-item {
        top: 7rem;
        max-height: 50vh;

        img {
            height: 20rem;
        }

        .banner-title {
            padding: 10px;
            font-size: 2rem;
        }
    }
}
</style>