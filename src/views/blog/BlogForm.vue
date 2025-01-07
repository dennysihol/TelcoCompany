<template>
    <section id="blog-form" class="position-relative bg-blog">
        <div class="container container-article position-relative">
            <div class="row">
                <div class="col-lg-8 mb-5">
                    <div class="card-blog-detail d-flex flex-column gap-4 mb-5">
                        <div class="card-blog-title">FORM Event atau Article</div>
                        <div class="row">
                            <div class="col-4">
                                <label for="category">Kategori</label>
                            </div>
                            <div class="col-8">
                                <select name="category" id="category" class="form-control form-control-sm" v-model="dataArticleOrEvent.category">
                                    <option value="ARTICLE">Artikel</option>
                                    <option value="EVENT">Event</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="title">Title</label>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control form-control-sm" id="title" v-model="dataArticleOrEvent.title">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="location">Location / Author</label>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control form-control-sm" id="location" v-model="dataArticleOrEvent.location">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="date">Tanggal</label>
                            </div>
                            <div class="col-8">
                                <!-- <input type="date" class="form-control form-control-sm" id="date" v-model="dataArticleOrEvent.date"> -->
                                <input type="text" class="form-control form-control-sm" id="date" v-model="dataArticleOrEvent.date">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="urlImageBanner">Gambar Banner</label>
                            </div>
                            <div class="col-8">
                                <!-- <input type="file" class="form-control form-control-sm" id="urlImageBanner" @change="handleFileChange"> -->
                                <input type="text" class="form-control form-control-sm" id="urlImageBanner"  v-model="dataArticleOrEvent.urlImageBanner">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="contentBody">Isi Kontent</label>
                            </div>
                            <div class="col-8" style="height: max-content;">
                                <QuillEditor
                                    ref="contentBody"
                                    theme="snow"
                                    id="contentBody"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="contentBody">Json</label>
                            </div>
                            <div class="col-8" style="height: max-content;">
                                {{ JSON.stringify(dataArticleOrEvent) }}
                            </div>
                        </div>
                    </div>
                    <div class="d-flex gap-3 justify-content-center mb-3">
                        <button class="btn-custom btn-custom-1" type="button" @click="handleSubmitData">Generate JSON</button>
                        <button class="btn-custom btn-custom-1" type="button" @click="goBack">Kembali</button>
                        <button class="btn-custom btn-custom-1" type="button" @click="handleReset">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from "vue";
import axios from 'axios';

export default {
    name: 'Blog Form',
    data() {
        return {
            loading: false,
            error: null,
            dataArticleOrEvent: {
                category: 'EVENT',
                title: '',
                location: '',
                date: '',
                urlImageBanner: [],
                contentBody: '',
                id:'',
            },
            dataArticleCount: 0,
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        handleSubmitData() {
            // console.log(this.dataArticleOrEvent);
            const contentBody = this.$refs.contentBody; // Adjust to your Quill editor ref
            this.dataArticleOrEvent.contentBody = contentBody.getText().replace(/\n/g, '<br><br>');
            this.dataArticleOrEvent.id = this.dataArticleCount + 1;
            // console.log(dataPost);
        },
        handleFileChange(event) {
            const file = event.target.files; // Get the first selected file
            if (file) {
                this.dataArticleOrEvent.urlImageBanner = file;
            }
        },
        handleReset() {
            this.dataArticleOrEvent = {
                category: 'EVENT',
                title: '',
                location: '',
                date: '',
                urlImageBanner: [],
                contentBody: '',
                id:'',
            };
            const contentBody = this.$refs.contentBody; // Access the Quill instance
            contentBody.setContents([]); // Clear the content
            this.getData();
        },
        async getData() {
            try {
                const response = await axios.get('/assets/service/blog/data.json');
                const responseData = response.data.data;
                this.dataArticleCount = responseData.length;
                // console.log('Data:', this.dataArticleDetail);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        },
    },
    mounted() {
        this.getData();
    },
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
    .card-blog-detail {
        border: 1px solid rgba(239, 239, 239, 1);
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        padding: 2rem;
        
        .card-blog-title {
            font-weight: 700;
            font-size: 32px;
            width: 100%;
            height: auto;
            text-align: justify;
        }
        .card-article-date {
            font-size: 16px;
            font-weight: 400;

            .card-article-date-icon {
                width: 20px;
                height: 20px;
            }
        }
        .card-article-image {
            width: 100%;

            img {
                object-fit: cover;
                height: 100%;
                border-radius: 8px;
            }
        }
    }
    @media (max-width: 768px) {
    }
</style>