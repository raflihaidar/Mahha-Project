<script setup>
import Map from '@/assets/icons/Map.vue'
import { ref } from 'vue'

const distance = ref(0)
</script>

<template>
  <section class="w-full h-auto relative">
    <Map />
    <p class="absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-lg">
      {{ distance }} km
    </p>
  </section>
</template>
