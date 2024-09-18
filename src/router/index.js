
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Pendanaan from "@/views/Pendanaan.vue";
import Tentang from "@/views/Tentang.vue";
import Blog from "@/views/Blog.vue";
import Bantuan from "@/views/Bantuan.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => Home,
  },
  {
    path: "/pendanaan",
    name: "Pendanaan",
    component: () => Pendanaan,
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: () => Tentang,
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => Blog,
  },
  {
    path: "/bantuan",
    name: "Bantuan",
    component: () => Bantuan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
