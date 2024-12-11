<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import BaseNavbar from '@/components/BaseNavbar.vue'
const BaseFooter = defineAsyncComponent(() => import('@/components/BaseFooter.vue'))
import { useSmoothScroll } from '@/composables/useSmoothScroll.js'

onMounted(() => {
  useSmoothScroll()
})
</script>

<template>
  <BaseNavbar v-if="$route.meta.navbar" />
  <RouterView />
  <BaseFooter v-if="$route.meta.footer" />
</template>
