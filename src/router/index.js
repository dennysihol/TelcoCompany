
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Funding from "@/views/Funding.vue";
import Tentang from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
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
});

export default router;
