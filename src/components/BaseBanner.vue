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
    class="w-full text-center mx-auto bg-gradient-to-b mix-blend-screen"
    :class="[
      `${gradientFromColor}`,
      `${gradientFromPercent}`,
      `${gradientToColor}`,
      `${gradientToPercent}`,
    ]"
  >
    <div class="relative">
      <span class="w-full justify-between flex">
        <BannerDecoration />
        <BannerDecoration />
      </span>
      <p
        :class="`font-Moulin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${textColor} sm:w-[75vw] w-[95vw]  py-32 box-border mx-auto text-xl sm:text-2xl`"
      >
        {{ text }}
      </p>
    </div>
    <div class="w-full h-10 mix-blend-screen"></div>
  </article>
</template>
