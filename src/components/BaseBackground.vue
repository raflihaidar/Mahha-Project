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
  <section class="overflow-hidden w-full h-full relative z-30 -mb-1">
    <section
      :style="imgSrc ? { backgroundImage: `url(${imgSrc})` } : ''"
      class="w-screen h-screen bg-cover bg-center backface-hidden will-change-transform"
    >
      <!-- Konten -->
    </section>

    <!-- Gradient Atas -->
    <!-- <div class="absolute -top-1 mix-blend-screen z-50"></div> -->
    <div
      class="absolute -top-1 w-full h-1/4 bg-gradient-to-t"
      :class="[topGradient.fromColor, topGradient.toColor]"
    ></div>

    <!-- Gradient Bawah -->
    <div
      class="absolute -bottom-1 w-full h-1/2 bg-gradient-to-b"
      :class="[bottomGradient.fromColor, bottomGradient.toColor]"
    ></div>
    <!-- <div class="mix-blend-screen"></div> -->
  </section>
</template>

<style scoped>
.scale-101 {
  transform: scale(1.01);
}

.backface-hidden {
  backface-visibility: hidden;
}
</style>
