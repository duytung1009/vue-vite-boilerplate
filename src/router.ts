import { createRouter, createWebHistory } from 'vue-router';

import AdminLayout from '@/layouts/AdminLayout.vue';

import HomePage from '@/pages/HomePage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
      layout: AdminLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
