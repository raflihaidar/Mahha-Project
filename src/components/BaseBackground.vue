<script setup>
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
  <section class="overflow-hidden w-full h-screen relative shadow-" data-scroll data-scroll-repeat>
    <!-- Gradient Atas -->
    <div
      class="absolute z-50 top-0 w-full h-40 bg-gradient-to-b"
      :class="[topGradient.fromColor, topGradient.toColor]"
    ></div>
    <div class="mix-blend-screen"></div>

    <section
      :style="{ backgroundImage: `url(${imgSrc})` }"
      data-scroll
      data-scroll-speed="-1.5"
      class="w-full h-full bg-cover bg-center"
    >
      <!-- Konten -->
    </section>
    <!-- Gradient Bawah -->
    <div
      class="absolute bottom-0 w-full h-56 bg-gradient-to-b"
      :class="[bottomGradient.fromColor, bottomGradient.toColor]"
    ></div>
    <div class="mix-blend-screen"></div>
  </section>
</template>
