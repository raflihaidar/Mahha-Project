<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import ButtonSlider from './ButtonSlider.vue'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const props = defineProps({
  id: {
    type: String,
    default: 'mySwiper',
  },
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
  typeNavigation: {
    type: Number,
    default: 1,
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
  <section>
    <swiper
      :id="id"
      :loop="true"
      :modules="[Navigation]"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :speed="1000"
      :grab-cursor="true"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '1024': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }"
      class="bg-gradient-to-b relative"
      :class="[
        {
          'w-[90%] mx-auto': typeNavigation === 2,
        },
        `${from}`,
        `${via}`,
        `${to}`,
      ]"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <figure class="relative w-full">
          <img :src="getImageUrl(item)" alt="Slide" class="w-full h-full slider_image" />
        </figure>
      </swiper-slide>
      <ButtonSlider
        :current-index="currentIndex"
        :type-button="typeNavigation"
        :data-length="images.length"
        :color-icon="colorIcon"
        :text-color="textColor"
      />
    </swiper>
  </section>
</template>
