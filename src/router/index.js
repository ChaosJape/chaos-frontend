// router/index.js
import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes'; // import routes configuration

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PROJECT),
  routes,
});

export default router;