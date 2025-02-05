<template>
  <figure :class="figureClasses" data-scroll data-scroll-repeat>
    <img
      :src="src"
      :alt="alt"
      :class="imageClasses"
      data-scroll
      :data-scroll-speed="dataScrollSpeed"
      loading="lazy"
    />
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  dataScrollSpeed: {
    type: String,
    default: '-1',
  },
  figureClasses: {
    type: String,
    default:
      'w-[15.125rem] md:w-[25rem] lg:w-[30.5rem] 2xl:w-[80%] h-auto parallax-section will-change-transform',
  },
  imageClasses: {
    type: String,
    default: 'w-full h-full',
  },
})
</script>
