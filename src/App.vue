<script setup>
import { RouterView } from 'vue-router'
import BaseNavbar from '@/components/BaseNavbar.vue'
import BaseFooter from '@/components/BaseFooter.vue'

import { onMounted, ref } from 'vue';

const container = ref(null)

import LocomotiveScroll from 'locomotive-scroll';

let locoScroll = null;

const setLocomotiveScroll = () => {
  locoScroll = new LocomotiveScroll({
    el: container.value,
    smooth: true,
    lerp: 0.1,
    smartphone: {
      smooth: true
    }
  });
}

onMounted(() => {
  setLocomotiveScroll()

  new ResizeObserver(() => locoScroll.update()).observe(document.querySelector("[data-scroll-container]"))
})
</script>

<template>
  <main ref="container" data-scroll-container>
    <BaseNavbar />
    <RouterView />
    <BaseFooter />
  </main>
</template>
