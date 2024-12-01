import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AccommodationView from '@/views/AccommodationView.vue'
import ExperiencesView from '@/views/ExperiencesView.vue'
import DiningView from '@/views/DiningView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Mahha Dii Meru - Luxury Retreat in Nature', navbar: true, footer: true },
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: AccommodationView,
      meta: { title: 'Accommodation - Stay at Mahha Dii Meru', navbar: true, footer: true },
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperiencesView,
      meta: {
        title: 'Experiences - Discover Mahha Dii Meru Adventures',
        navbar: true,
        footer: true,
      },
    },
    {
      path: '/dining',
      name: 'dining',
      component: DiningView,
      meta: { title: 'Dining - Culinary Delights at Mahha Dii Meru', navbar: true, footer: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: { title: '404 - Not Found', navbar: false, footer: false },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
