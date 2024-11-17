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
  <section
    :style="{ backgroundImage: `url(${imgSrc})` }"
    class="relative w-full h-screen bg-cover bg-center"
  >
    <!-- Gradient Atas -->
    <div
      class="absolute top-0 w-full h-40 bg-gradient-to-b"
      :class="[topGradient.fromColor, topGradient.toColor]"
    ></div>

    <!-- Gradient Bawah -->
    <div
      class="absolute bottom-0 w-full h-56 bg-gradient-to-b"
      :class="[bottomGradient.fromColor, bottomGradient.toColor]"
    ></div>

    <!-- Konten -->
    <div class="mix-blend-screen"></div>
  </section>
</template>
