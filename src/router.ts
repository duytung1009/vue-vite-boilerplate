import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
