<script setup>
import { computed } from 'vue'
const props = defineProps({
  textColor: {
    type: String,
    default: 'text-gray-800', // Warna teks default
  },
  textSize: {
    type: String,
    default: 'sm:text-lg', // Ukuran teks default
  },
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
