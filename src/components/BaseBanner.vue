<script setup>
import BannerDecoration from '../assets/icons/BannerDecoration.vue'
import BannerDecorationMobile from '../assets/icons/graphicsMobileIcon.vue'

const props = defineProps({
  text: String,
  textColor: {
    type: String,
    default: 'text-light-shade-1',
  },
  gradientFromColor: {
    type: String,
    default: 'from-[#45462A]/100', // Warna default untuk gradient awal
  },
  gradientFromPercent: {
    type: String,
    default: 'from-10%', // Persentase default untuk gradient awal (tanpa simbol %)
  },
  gradientToColor: {
    type: String,
    default: 'to-[#705729]/80', // Warna default untuk gradient akhir
  },
  gradientToPercent: {
    type: String,
    default: 'to-90%', // Persentase default untuk gradient akhir (tanpa simbol %)
  },
  mobileIcon: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <article
    class="w-full h-full py-32 lg:py-40 lg:px-60 mx-auto bg-gradient-to-b relative"
    :class="[
      `${gradientFromColor}`,
      `${gradientFromPercent}`,
      `${gradientToColor}`,
      `${gradientToPercent}`,
    ]"
  >
    <div class="text-center w-full h-full">
      <div class="w-full h-full absolute top-0 right-0 hidden lg:flex lg:justify-between">
        <BannerDecoration />
        <BannerDecoration class="-scale-100" />
      </div>

      <div :class="mobileIcon ? 'block' : 'hidden'">
        <div class="w-full h-auto lg:hidden absolute -top-28 right-0 flex justify-between">
          <BannerDecorationMobile />
          <BannerDecorationMobile class="-scale-100" />
        </div>
      </div>

      <p
        data-scroll
        data-scroll-speed="2"
        :class="`${textColor} will-change-transform font-light lg:w-[50rem] w-[20.5rem] mx-auto text-base md:text-xl 2xl:text-2xl 2xl:w-[60vw] `"
      >
        {{ text }}
      </p>
    </div>
    <div class="w-full h-10 mix-blend-screen"></div>
  </article>
</template>
