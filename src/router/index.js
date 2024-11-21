// router/index.js
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/index',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('@/views/text/index.vue'),
  },
  {
    path: '/selector',
    name: 'Selector',
    component: () => import('@/views/selector/index.vue'),
  },
  {
    path: '/display',
    name: 'Display',
    component: () => import('@/views/display/index.vue'),
  },
  {
    path: '/background',
    name: 'Background',
    component: () => import('@/views/background/index.vue'),
  }, {
    path: '/box-model',
    name: 'BoxModel',
    component: () => import('@/views/box-model/index.vue'),
  },
  {
    path: '/float',
    name: 'Float',
    component: () => import('@/views/float/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PROJECT),
  routes,
});

export default router;