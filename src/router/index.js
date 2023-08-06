import { createRouter, createWebHistory } from 'vue-router';
import { HomeView, PortifolioView } from '../views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portifolio',
      name: 'portifolio',
      component: PortifolioView,
    },
  ],
});

export default router;
