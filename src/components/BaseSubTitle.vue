<script setup>
import { computed } from 'vue'
const props = defineProps({
  textColor: {
    type: String,
    default: 'text-gray-800', // Warna teks default
  },
  textSize: {
    type: String,
    default: 'text-lg', // Ukuran teks default
  },
  // responsiveSize: {
  //   type: String,
  //   default: 'sm:text-xl md:text-2xl lg:text-3xl', // Ukuran teks responsif
  // },
})

const subtitleClass = computed(() => {
  return `${props.textColor} ${props.textSize}`
})
</script>

<template>
  <h2 :class="subtitleClass">
    <slot />
  </h2>
</template>
