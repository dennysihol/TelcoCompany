// import Vue from 'vue'
// import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue'

// Vue.use(Router)

// export default new VueRouter({
//   mode: 'history',
//   base: 'http://localhost:5173',
//   linkActiveClass: 'active',
//   scrollBehavior: () => ({ y: 0 }),
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '*',
//       component: Pagenotfound
//     }
//   ]
// })

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
