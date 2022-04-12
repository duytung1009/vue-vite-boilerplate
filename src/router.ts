import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';

import PageCartHome from '@/components/pages/PageCartHome.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/cart-home',
    component: PageCartHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
