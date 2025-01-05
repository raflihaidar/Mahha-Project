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
  },
  via: {
    type: String,
  },
  to: {
    type: String,
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
  percentFrom: {
    type: String,
    default: '0%',
  },
  percentVia: {
    type: String,
    default: '50%',
  },
  percentTo: {
    type: String,
    default: '100%',
  },
})

const currentIndex = ref(0)

const onSwiper = (swiper) => {}

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex
}

const getImageUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url)
}
</script>

<template>
  <section class="w-full bg-gradient-to-b" :class="[`${from}`, `${via}`, `${to}`]">
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
      class="relative w-[90%] lg:w-full mx-aut"
      :class="[
        {
          'w-[90%] mx-auto': typeNavigation === 2,
        },
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
