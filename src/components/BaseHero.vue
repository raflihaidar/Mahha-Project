<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  fTitle: String,
  lTitle: String,
  img: String,
  bgPosition: {
    type: String,
    default: 'center',
  },
  overlayOpacity: {
    type: String,
    default: '0.5',
  },
})

const headerRef = ref(null)
const textRef = ref(null)
const subtext = ref(null)

onMounted(() => {
  // Memastikan fungsi tersedia untuk komponen lain
  //
  const headerHeight = headerRef.value?.offsetHeight

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

  document.body.addEventListener('click', (event) => {
    // Pastikan elemen yang diklik adalah <a>
    if (event.target.tagName === 'A') {
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
    }
  })
})
</script>

<template>
  <header
    id="hero"
    ref="headerRef"
    :style="{
      backgroundImage: `url(${img})`,
      backgroundPosition: `${bgPosition}`,
    }"
    class="w-full h-full bg-cover bg-fixed bg-no-repeat md:px-0 relative z-10 bg-dark-default"
  >
    <div
      class="text-center flex flex-col justify-center items-center lg:h-screen h-[80vh] md:w-full w-[20rem] mx-auto z-30 relative"
    >
      <h1
        ref="textRef"
        class="absolute top-[45vh] w-full text-[2rem] leading-[2.2rem] md:text-6xl lg:text-[4rem] 2xl:text-[5rem] font-normal text-light-default will-change-transform"
        data-scroll
        data-scroll-speed="2"
      >
        {{ fTitle }} <br />
        <span class="lg:mt-1 lg:inline-block"> {{ lTitle }}</span>
      </h1>
    </div>

    <p
      ref="subtext"
      class="w-full text-center text-[0.625rem] 2xl:text-base absolute lg:bottom-[45vh] bottom-48 text-dark-shade-3 cursor-pointer z-30 font-normal"
    >
      SCROLL DOWN TO DISCOVER
    </p>

    <div class="w-full h-72"></div>

    <div
      class="bg-black w-full h-full absolute bottom-0 top-0"
      :style="{
        backgroundColor: 'rgba(0, 0, 0, ' + overlayOpacity + ')',
      }"
    ></div>
    <div
      class="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-[#45462A00] to-[#45462A]/100"
    ></div>
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
