<script setup>
import BannerDecoration from '../assets/icons/BannerDecoration.vue'

const props = defineProps({
  text: String,
  textColor: {
    type: String,
    default: 'text-light-shade-1',
  },
  gradientFromColor: {
    type: String,
    default: 'from-[#45462A]', // Warna default untuk gradient awal
  },
  gradientFromPercent: {
    type: String,
    default: 'from-5', // Persentase default untuk gradient awal (tanpa simbol %)
  },
  gradientToColor: {
    type: String,
    default: 'to-[#705729BF]', // Warna default untuk gradient akhir
  },
  gradientToPercent: {
    type: String,
    default: 'from-90', // Persentase default untuk gradient akhir (tanpa simbol %)
  },
})
</script>

<template>
  <article
    class="w-full h-full pt-28 mx-auto bg-gradient-to-b"
    :class="[
      `${gradientFromColor}`,
      `${gradientFromPercent}`,
      `${gradientToColor}`,
      `${gradientToPercent}`,
    ]"
  >
    <div class="text-center w-full">
      <div class="w-full gap-x-10 flex justify-evenly absolute">
        <BannerDecoration />
        <BannerDecoration />
      </div>
      <p
        data-scroll
        data-scroll-speed="2"
        :class="`${textColor} will-change-transform font-light lg:w-[50rem] w-[95vw] py-32  mx-auto text-base md:text-xl 2xl:text-2xl 2xl:w-[60vw] `"
      >
        {{ text }}
      </p>
    </div>
    <div class="w-full h-10 mix-blend-screen"></div>
  </article>
</template>
