<script setup>
import { ref, computed } from 'vue'
import NextIcon from '@/assets/icons/NextIcon.vue'
import PreviosIcon from '@/assets/icons/PreviousIcon.vue'

const props = defineProps({
  images: Array,
  from: {
    type: String,
    default: 'from-[#705729]/20',
  },
  via: {
    type: String,
    default: 'via-dark-default/75',
  },
  to: {
    type: String,
    default: 'to-dark-default',
  },
  colorIcon: String,
  textColor: {
    type: String,
    default: 'text-dark-default',
  },
})

const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function getImageUrl(image) {
  return new URL(`../assets/images/${image}`, import.meta.url)
}

// Check if the screen is mobile
const isMobile = computed(() => window.innerWidth < 768)
</script>

<template>
  <section class="w-full relative overflow-hidden" :class="`bg-gradient-to-b ${from} ${via} ${to}`">
    <!-- Track -->
    <div
      class="flex transition-transform duration-500"
      :style="
        isMobile
          ? { transform: `translateX(-${currentIndex * 100}%)` }
          : { transform: `translateX(-${currentIndex * 45}vw)` }
      "
    >
      <!-- Images -->
      <figure
        v-for="(image, index) in images"
        :key="index"
        :class="[
          'flex-shrink-0 h-full sm:mr-0 object-cover', // Kelas default
          isMobile ? 'w-full' : '', // Kondisi untuk mobile
          index === currentIndex && !isMobile ? 'w-[55vw] h-full pr-5' : '',
          index !== currentIndex && !isMobile ? 'sm:w-[45vw] sm:h-1/2 pr-0' : '',
        ]"
      >
        <img
          :src="getImageUrl(image)"
          alt="Slider Image"
          class="w-[90%] sm:w-full mx-auto h-full object-cover aspect-square"
        />
      </figure>
    </div>

    <!-- Navigation -->
    <div
      class="absolute bottom-5 right-[30%] transform -translate-x-1/2 px-5 sm:flex hidden items-center gap-x-5"
    >
      <button @click="prevImage">
        <PreviosIcon :color="colorIcon" />
      </button>
      <p :class="`text-lg ${textColor}`">{{ currentIndex + 1 }}/{{ images.length }}</p>
      <button @click="nextImage">
        <NextIcon :color="colorIcon" />
      </button>
    </div>

    <div :class="`sm:hidden flex w-[90%] text-lg mx-auto justify-between mt-5 ${textColor}`">
      <p>{{ currentIndex + 1 }}/{{ images.length }}</p>
      <p>SWIPE</p>
    </div>
  </section>
</template>
