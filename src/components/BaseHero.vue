<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

const setLocomotiveScroll = () => {
  const scroll = new LocomotiveScroll({
    el: headerRef.value,
  });
}

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  fTitle: String,
  lTitle: String,
  img: String,
});

const headerRef = ref(null);
const textRef = ref(null);
const subtext = ref(null);

onMounted(() => {
  setLocomotiveScroll()
  // Efek parallax untuk background header
  gsap.to(headerRef.value, {
    backgroundPosition: "50% 0%", // Background bergerak ke atas
    scrollTrigger: {
      trigger: headerRef.value,
      start: "top top", // Animasi dimulai saat header masuk viewport
      end: "bottom top", // Animasi selesai saat header keluar viewport
      scrub: true, // Sinkronkan animasi dengan scroll
    },
  });
});
</script>

<template>
  <header ref="headerRef" :style="{ backgroundImage: `url(${img})` }"
    class="w-full h-full bg-cover bg-center sm:bg-top sm:px-0 relative z-10">
    <div class="text-center flex flex-col justify-center items-center h-screen sm:w-full w-[95%] mx-auto z-30 relative">
      <h1 ref="textRef" class="text-4xl sm:text-4xl lg:text-8xl font-normal leading-tight text-light-default"
        data-scroll data-scroll-speed="2">
        {{ fTitle }} <br />
        {{ lTitle }}
      </h1>
    </div>

    <p ref="subtext" class="absolute top-[80vh] left-[45%] transform -translate-x-1/2 -translate-y-1/2 text-dark-shade-3
        cursor-pointer z-30 font-medium" data-scroll data-scroll-speed="2">
      SCROLL DOWN TO DISCOVER
    </p>

    <div class="w-full h-96 bg-gradient-to-b from-[#45462A00] to-[#45462A] z-0"></div>

    <div class="bg-black w-full h-full absolute bottom-0 top-0 bg-opacity-50 z-0">
      <div class="absolute bottom-0 w-full h-96 bg-gradient-to-b from-[#45462A00] to-[#45462A]"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  /* Firefox */
  image-rendering: -o-crisp-edges;
  /* Opera */
  image-rendering: -webkit-optimize-contrast;
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;
}
</style>
