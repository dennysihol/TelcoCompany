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
                                <label for="city">Kota</label>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control form-control-sm" id="city" v-model="dataArticleOrEvent.city">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="date">Tanggal</label>
                            </div>
                            <div class="col-8">
                                <input type="date" class="form-control form-control-sm" id="date" v-model="dataArticleOrEvent.date">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="urlBannerImage">Gambar Banner</label>
                            </div>
                            <div class="col-8">
                                <input type="file" class="form-control form-control-sm" id="urlBannerImage" @change="handleFileChange">
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
                    </div>
                    <div class="d-flex gap-3 justify-content-center mb-3">
                        <button class="btn-custom btn-custom-1" type="button" @click="handleSubmitData">Simpan</button>
                        <button class="btn-custom btn-custom-1" type="button" @click="goBack">Kembali</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from "vue";

export default {
    name: 'Blog Form',
    data() {
        return {
            loading: false,
            error: null,
            dataArticleOrEvent: {
                category: 'EVENT',
                title: '',
                city: '',
                date: '',
                urlBannerImage: [],
                id:'',
            }
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        handleSubmitData() {
            console.log(this.dataArticleOrEvent);
            const contentBody = this.$refs.contentBody; // Adjust to your Quill editor ref
            // console.log("text editor", contentBody.getText());
            const dataPost = {
                category: this.dataArticleOrEvent.category,
                title: this.dataArticleOrEvent.title,
                city: this.dataArticleOrEvent.city,
                date: this.dataArticleOrEvent.date,
                urlBannerImage: this.dataArticleOrEvent.urlBannerImage,
                contentBody: contentBody.getText(),
                id:'',
            }
            console.log(dataPost);
        },
        handleFileChange(event) {
            const file = event.target.files; // Get the first selected file
            if (file) {
                this.dataArticleOrEvent.urlBannerImage = file;
            }
        },
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