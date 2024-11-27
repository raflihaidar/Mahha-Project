<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

const props = defineProps({
  imgSrc: {
    type: String,
    required: true, // Gambar harus diberikan
  },
  topGradient: {
    type: Object,
    default: () => ({
      fromColor: 'from-[#fff]/0', // Warna awal gradient
      toColor: 'to-[#000]/0', // Warna akhir gradient
    }),
  },
  bottomGradient: {
    type: Object,
    default: () => ({
      fromColor: 'from-[#000]/0',
      toColor: 'to-[#fff]/0',
    }),
  },
})

</script>

<template>
  <section class="overflow-hidden w-full h-screen relative" data-scroll data-scroll-repeat>
    <!-- Gradient Atas -->
    <div class="absolute top-0 w-full h-40 bg-gradient-to-b" :class="[topGradient.fromColor, topGradient.toColor]">
    </div>
    <section :style="{ backgroundImage: `url(${imgSrc})` }" data-scroll data-scroll-speed="-1.5"
      class=" w-full h-full bg-cover bg-center">


      <!-- Konten -->
    </section>
    <!-- Gradient Bawah -->
    <div class="absolute bottom-0 w-full h-56 bg-gradient-to-b"
      :class="[bottomGradient.fromColor, bottomGradient.toColor]"></div>
    <div class="mix-blend-screen"></div>
  </section>
</template>
