<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFade } from 'swiper/modules'
import ButtonSlider from './ButtonSlider.vue'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

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
    default: 'text-light-default',
  },
})

const currentIndex = ref(0)

const onSwiper = (swiper) => {}

const onSlideChange = (swiper) => {
  // Menggunakan realIndex untuk mendapatkan indeks asli slide
  currentIndex.value = swiper.realIndex
}

// Fungsi untuk mendapatkan URL gambar
const getImageUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url)
}
</script>

<template>
  <swiper
    id="mySwiper"
    :loop="true"
    :modules="[Navigation, EffectFade]"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :speed="1000"
    :grab-cursor="true"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 50,
        effect: 'slide',
      },
    }"
    :class="`bg-gradient-to-b ${from} ${via} ${to}`"
  >
    <swiper-slide v-for="(item, index) in images" :key="index">
      <figure class="w-full relative">
        <img :src="getImageUrl(item)" alt="Slide" class="w-full h-full slider_image" />
      </figure>
    </swiper-slide>
    <ButtonSlider
      :current-index="currentIndex"
      :data-length="images.length"
      :color-icon="colorIcon"
      :text-color="textColor"
    />
  </swiper>
</template>
