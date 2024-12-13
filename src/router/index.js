import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Mahha Dii Meru - Luxury Retreat in Nature', navbar: true, footer: true },
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: () => import('@/views/AccommodationView.vue'),
      meta: { title: 'Accommodation - Stay at Mahha Dii Meru', navbar: true, footer: true },
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('@/views/ExperiencesView.vue'),
      meta: {
        title: 'Experiences - Discover Mahha Dii Meru Adventures',
        navbar: true,
        footer: true,
      },
    },
    {
      path: '/dining',
      name: 'dining',
      component: () => import('@/views/DiningView.vue'),
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
    // Jika posisi sebelumnya disimpan (seperti pada navigasi back/forward), gunakan posisi tersebut.
    if (savedPosition) {
      return savedPosition
    }
    // Selalu mulai dari atas untuk halaman baru.
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title'
  next()
})

export default router
