<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeRouteLeave } from 'vue-router'

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  fTitle: String,
  lTitle: String,
  img: String,
})

const headerRef = ref(null)
const textRef = ref(null)
const subtext = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 2 } })

  // Animasi background header
  tl.fromTo(
    headerRef.value,
    { scale: 1.1, opacity: 0 }, // Background lebih besar dan transparan
    { scale: 1, opacity: 1 }, // Kembali ke ukuran normal dan terlihat
  )
    // Animasi teks utama
    .fromTo(
      textRef.value,
      { opacity: 0, y: 50 }, // Transparan dan sedikit di bawah
      { opacity: 1, y: 0 },
      '<+=0.5', // Animasi mulai 0.5 detik setelah animasi sebelumnya
    )
    // Animasi subteks
    .fromTo(
      subtext.value,
      { opacity: 0 }, // Transparan dan sedikit di bawah
      { opacity: 1 },
      '<+=0.5', // Dimulai setelah teks utama selesai
    )

  // Efek parallax untuk background header
  gsap.to(headerRef.value, {
    backgroundPosition: '50% 0%', // Background bergerak ke atas
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top top', // Animasi dimulai saat header masuk viewport
      end: 'bottom top', // Animasi selesai saat header keluar viewport
      scrub: true, // Sinkronkan animasi dengan scroll
    },
  })
})

// Menggunakan beforeRouteLeave untuk animasi saat meninggalkan halaman
onBeforeRouteLeave((to, from, next) => {
  const leaveTl = gsap.timeline({
    onComplete: () => {
      next() // Melanjutkan navigasi setelah animasi selesai
    },
  })

  leaveTl.to(headerRef.value, {
    scale: 1.1, // Background menjadi lebih besar
    opacity: 0, // Background menjadi transparan
    duration: 0.8, // Durasi 0.8 detik
    ease: 'power2.inOut', // Easing yang lebih tajam
  })
})
</script>


<template>
  <header ref="headerRef" :style="{ backgroundImage: `url(${img})` }"
    class="w-full h-full bg-cover bg-center md:bg-top md:px-0 relative z-10">
    <div class="text-center flex flex-col justify-center items-center h-screen md:w-full w-[95%] mx-auto z-30 relative">
      <h1 ref="textRef"
        class="text-4xl sm:text-6xl lg:text-8xl font-normal leading-tight text-light-default will-change-transform"
        data-scroll data-scroll-speed="2">
        {{ fTitle }} <br />
        {{ lTitle }}
      </h1>
    </div>

    <p ref="subtext"
      class="w-full text-center text-xs sm:text-base absolute top-[95vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-dark-shade-3 cursor-pointer z-30 font-bold">
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
