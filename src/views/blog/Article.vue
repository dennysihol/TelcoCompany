<template>
  <section id="blog" class="position-relative bg-blog">
    <div class="container container-article position-relative overflow-hidden">
      <div class="row">
        <div class="col-lg-10 article-gap">
          <div class="d-flex gap-3 justify-content-center mb-3">
            <button :class="tabSelected == 'article'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'"
                    type="button" @click="handleTab('article')">Artikel
            </button>
            <button :class="tabSelected == 'event'? 'btn-custom btn-custom-2 active' : 'btn-custom btn-custom-2'"
                    type="button" @click="handleTab('event')">Event
            </button>
          </div>
          <div class="row justify-content-start">
            <div class="col-md-6 col-xl-3 mb-4"
                 v-for="item in dataArticleOrEvent" :key="item.id">
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
import axios from 'axios';

export default {
  name: 'Blog',
  data() {
    return {
      dataArticleOrEvent: {},
      countPagination: 1,
    };
  },
  methods: {
    handleTab(nameTab) {
      this.$router.push({path: '/blog', query: {['blog']: nameTab, page: 1}});
    },
    handleRedirectTo(redirectTo) {
      this.$router.push({path: redirectTo});
    },
    handlePageTo(pageTo) {
      if (pageTo >= 1 && pageTo <= this.countPagination) {
        this.$router.push({path: '/blog', query: {['blog']: this.tabSelected, page: pageTo}});
      }
    },
    async getData(category='article') {
      try {
        const response = await axios.get('/assets/service/blog/data.json');
        const responseData = response.data.data;
        this.countPagination = Math.ceil(responseData.filter((item)=>item.category === category.toUpperCase()).length / 12);
        this.dataArticleOrEvent = responseData
                                  .sort((a, b) => b.id - a.id)
                                  .filter((item)=>item.category === category.toUpperCase())
                                  .slice(((this.currentPage-1)*12), (12*this.currentPage));
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    },
  },
  mounted() {
    this.getData(this.$route.query.blog);
  },
  computed: {
    tabSelected() {
      this.getData(this.$route.query.blog);
      return this.$route.query.blog || 'article';
    },
    currentPage() {
      return Number(this.$route.query.page) || 1;
    },
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
    // countPagination() {
    //   return this.dataArticleOrEvent.countPagination;
    // },
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
    padding-left: 0;

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
        .container-article {
            padding: 0 0 0 0;
        }
  .card-article {
    margin: 10px;
  }
}

</style>