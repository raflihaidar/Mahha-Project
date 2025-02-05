<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import ButtonSlider from './ButtonSlider.vue'
import { ref, onMounted } from 'vue'
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

onMounted(() => {
  console.log(props.images)
})

const BASE_IMAGE_URL = 'https://admin.mahharesorts.com/storage/public/'
</script>

<template>
  <section class="w-full z-30 -mb-[1px] bg-gradient-to-b" :class="[`${from}`, `${via}`, `${to}`]">
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
          spaceBetween: 30,
        },
      }"
      class="relative w-[95vw] lg:w-full mx-auto"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <figure
          class="relative mx-auto"
          :class="
            typeNavigation === 2
              ? 'w-full h-full'
              : 'lg:w-full lg:h-[39rem] 2xl:w-[50vw] 2xl:h-[50vw] w-[24rem] h-[24rem]'
          "
        >
          <img
            :src="typeNavigation !== 2 ? BASE_IMAGE_URL + item.file_path : item"
            alt="Slide"
            class="w-full h-full object-cover"
          />
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
