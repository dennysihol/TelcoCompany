
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Funding from "@/views/Funding.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import Whistleblowing from "@/views/Whistleblowing.vue";
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
    path: "/funding",
    name: "Funding",
    component: Funding,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    path: "/whistleblowing",
    name: "Whistleblowing",
    component: Whistleblowing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {

    // Apply smooth scroll only on specific routes
    if (['Article'].includes(to.name)) {
      document.documentElement.style.scrollBehavior = "unset";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
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
