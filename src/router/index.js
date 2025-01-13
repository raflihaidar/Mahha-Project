import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Mahha Dii Meru - Luxury Retreat in Nature',
        description:
          'Find serenity at Mahha dii Meru Resort, a serene retreat nestled amidst the natural beauty of Puncak Bogor. Indulge in the enchantment of nature with romantic stays, mesmerising views and heartfelt experiences designed to refresh your soul.',
        navbar: true,
        footer: true,
      },
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: () => import('@/views/AccommodationView.vue'),
      meta: {
        title: 'Accommodation - Stay at Mahha Dii Meru',
        description:
          'Discover comfort and tranquility at Mahha di Meru. Enjoy an unforgettable stay with luxurious suites, breathtaking views of nature, and top-notch amenities including private balconies, free Wi-Fi, and 24-hour room service.',
        navbar: true,
        footer: true,
      },
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('@/views/ExperiencesView.vue'),
      meta: {
        title: 'Experiences - Discover Mahha Dii Meru Adventures',
        description:
          "Immerse yourself in a variety of curated experiences at Mahha di Meru, from tranquil nature walks to thrilling outdoor adventures. Whether you seek relaxation or excitement, our tailored activities promise unforgettable moments in nature's embrace.",
        navbar: true,
        footer: true,
      },
    },
    {
      path: '/dining',
      name: 'dining',
      component: () => import('@/views/DiningView.vue'),
      meta: {
        title: 'Dining - Culinary Delights at Mahha Dii Meru',
        description:
          'Indulge in a dining experience that blends fresh, seasonal ingredients with the tranquil beauty of nature. From local delicacies to international favorites, every dish is thoughtfully prepared to create a moment of pure culinary delight amidst the serene mountain air.',
        navbar: true,
        footer: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '404 - Not Found',
        description: '',
        navbar: false,
        footer: false,
      },
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
  const { title, description } = to.meta
  const defaultTitle = 'Mahha dii Meru'
  const defaultDescription =
    'Discover Mahha dii Meru resort, a tranquil haven in Puncak Bogor. One of the best resorts in Bogor, offering romantic accommodations and breathtaking views.'

  document.title = title || defaultTitle

  const descriptionElement = document.querySelector('head meta[name="description"]')

  descriptionElement.setAttribute('content', description || defaultDescription)
  next()
})

export default router
