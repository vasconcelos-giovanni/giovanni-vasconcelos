import { createRouter, createWebHistory } from 'vue-router';
import { AboutWebsiteView, HomeView, PortifolioView } from '../views';

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
    {
      path: '/about-website',
      name: 'aboutWebsite',
      component: AboutWebsiteView,
    },
  ],
});

export default router;
