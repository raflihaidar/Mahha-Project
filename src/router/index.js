import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: () => import('@/views/AccommodationView.vue'),
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('@/views/ExperiencesView.vue'),
    },
    {
      path: '/dining',
      name: 'dining',
      component: () => import('@/views/DinningView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#hero',
      top: 0,
    }
  },
})

export default router
