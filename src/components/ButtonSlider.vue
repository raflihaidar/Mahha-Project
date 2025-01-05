<script setup>
import { useSwiper } from 'swiper/vue'
import NextIcon from '@/assets/icons/NextIcon.vue'
import PreviosIcon from '@/assets/icons/PreviousIcon.vue'

const props = defineProps({
  typeButton: {
    type: Number,
    default: 1,
    validator(value, props) {
      // The value must match one of these strings
      return [1, 2].includes(value)
    },
  },
  colorIcon: String,
  textColor: String,
  currentIndex: Number,
  dataLength: Number,
})

const swiper = useSwiper()
</script>

<template>
  <!-- Navigation -->
  <div
    class="absolute bottom-0 left-1/2 px-5 lg:flex hidden items-center justify-between gap-x-10 z-50"
  >
    <section class="flex gap-x-5">
      <button @click="() => swiper.slidePrev()">
        <PreviosIcon :color="colorIcon" />
      </button>
      <button @click="swiper.slideNext()">
        <NextIcon :color="colorIcon" />
      </button>
    </section>
    <p :class="`text-xs font-light ${textColor}`">{{ currentIndex + 1 }}/{{ dataLength }}</p>
  </div>

  <div
    class="lg:hidden flex w-[90%] text-xs mx-auto justify-between mt-5 z-50 py-5"
    :class="[
      `${textColor}`,
      {
        'absolute -top-5 left-1/2 -translate-x-1/2': typeButton === 2,
      },
    ]"
  >
    <p>{{ currentIndex + 1 }}/{{ dataLength }}</p>
    <p @click="swiper.slideNext()">SWIPE</p>
  </div>
</template>
