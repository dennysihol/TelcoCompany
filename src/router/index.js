
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Funding from "@/views/Funding.vue";
import Tentang from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import {
  Article,
  BlogDetail
} from '@/views/blog/index.js';
import Help from "@/views/Help.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pendanaan",
    name: "Pendanaan",
    component: Funding,
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: Tentang,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    children: [
      {
        path: "", // Child route without a leading "/"
        name: "Article",
        component: Article, // Separate component for individual blog post
      },
      {
        path: ":id/:title", // Child route without a leading "/"
        name: "BlogDetail",
        component: BlogDetail, // Separate component for individual blog post
      },
    ],
  },
  {
    path: "/bantuan",
    name: "Bantuan",
    component: Help,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {

    // Apply smooth scroll only on specific routes
    if (['Home','Pendanaan','Tentang','Bantuan'].includes(to.name)) {
      document.documentElement.style.scrollBehavior = "smooth";
    } else {
      document.documentElement.style.scrollBehavior = "unset";
    }
    if (savedPosition) {
      // If there is a saved position (e.g., using the browser's back button), scroll to that position
      return savedPosition;
    } else {
      // Otherwise, scroll to the top
      return { top: 0 };
    }
  }
});

export default router;
