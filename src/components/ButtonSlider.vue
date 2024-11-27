<script setup>
import { useSwiper } from 'swiper/vue';
import NextIcon from '@/assets/icons/NextIcon.vue'
import PreviosIcon from '@/assets/icons/PreviousIcon.vue'

const props = defineProps({
  colorIcon: String,
  textColor: String,
  currentIndex: Number,
  dataLength: Number
})

const swiper = useSwiper()
</script>


<template>
  <!-- Navigation -->
  <div class="absolute bottom-5 left-1/2 px-5 sm:flex hidden items-center justify-between gap-x-10 z-50">
    <section>
      <button @click="() => swiper.slidePrev()">
        <PreviosIcon :color="colorIcon" />
      </button>
      <button @click="swiper.slideNext()">
        <NextIcon :color="colorIcon" />
      </button>
    </section>
    <p :class="`text-lg ${textColor}`">{{ currentIndex + 1 }}/{{ dataLength }}</p>
  </div>

  <div :class="`sm:hidden flex w-[90%] text-lg mx-auto justify-between mt-5 z-50 py-5 ${textColor}`">
    <p>{{ currentIndex + 1 }}/{{ dataLength }}</p>
    <p @click="swiper.slideNext()">SWIPE</p>
  </div>
</template>
