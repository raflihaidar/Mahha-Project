<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import BaseNavbar from '@/components/BaseNavbar.vue'
const BaseFooter = defineAsyncComponent(() => import('@/components/BaseFooter.vue'))
import LocomotiveScroll from 'locomotive-scroll'

const container = ref(null)
let locoScroll = null

const setLocomotiveScroll = () => {
  locoScroll = new LocomotiveScroll({
    el: container.value,
    smooth: true, // Aktifkan smooth scrolling
    lerp: 0.03, // Linear interpolation lebih halus
    multiplier: 2,
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
  new ResizeObserver(() => locoScroll.update()).observe(container.value)
})
</script>

<template>
  <main ref="container">
    <BaseNavbar v-if="$route.meta.navbar" />
    <RouterView />
    <BaseFooter v-if="$route.meta.footer" />
  </main>
</template>
