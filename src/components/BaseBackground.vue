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
  <section class="overflow-hidden w-full h-screen relative">
    <section
      :style="{ backgroundImage: `url(${imgSrc})` }"
      class="w-full h-full bg-cover bg-center"
    >
      <!-- Konten -->
    </section>

    <!-- Gradient Atas -->
    <div class="absolute top-0 mix-blend-screen z-50"></div>
    <div
      class="absolute top-0 w-full h-32 bg-gradient-to-t"
      :class="[topGradient.fromColor, topGradient.toColor]"
    ></div>

    <!-- Gradient Bawah -->
    <div
      class="absolute bottom-0 w-full h-60 bg-gradient-to-b"
      :class="[bottomGradient.fromColor, bottomGradient.toColor]"
    ></div>
    <div class="mix-blend-screen"></div>
  </section>
</template>
