<script setup>
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import LocomotiveScroll from 'locomotive-scroll'

import { onMounted, ref } from 'vue'

const container = ref(null)

let locoScroll = null

const setLocomotiveScroll = () => {
  locoScroll = new LocomotiveScroll({
    el: container.value,
    smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
      smooth: !0,
      multiplier: 3,
      breakpoint: 767,
    },
    tablet: {
      smooth: !1,
      multiplier: 3,
      breakpoint: 1024,
    },
  })
}

onMounted(() => {
  setLocomotiveScroll()
  new ResizeObserver(() => locoScroll.update()).observe(
    document.querySelector('[data-scroll-container]'),
  )
})
</script>

<template>
  <main ref="container" data-scroll-container>
    <BaseNavbar />
    <RouterView />
    <BaseFooter />
  </main>
</template>
