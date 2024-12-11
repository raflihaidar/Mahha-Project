<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: Array,
})

// Index gambar saat ini
const currentIndex = ref(0)
const isChange = ref(true) // Awalnya true untuk merender gambar pertama
let intervalId

// Fungsi untuk memulai slideshow otomatis
const startSlideshow = () => {
  intervalId = setInterval(() => {
    isChange.value = false // Set ke false untuk memulai transisi keluar
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length
      isChange.value = true // Set ke true untuk memulai transisi masuk
    }, 100) // Waktu ini sesuai dengan durasi transisi (0.5s)
  }, 5000) // Ganti gambar setiap 5 detik
}

// Fungsi untuk menghentikan slideshow
const stopSlideshow = () => {
  clearInterval(intervalId)
}

// Mulai slideshow ketika komponen di-mount
onMounted(() => {
  startSlideshow()
})

// Hentikan slideshow ketika komponen di-unmount
onUnmounted(() => {
  stopSlideshow()
})
</script>

<style>
/* Transisi untuk efek fade */
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
</style>

<template>
  <figure class="lg:w-1/2 h-fit w-[90%] relative">
    <Transition name="fade">
      <img
        v-if="isChange"
        :src="images[currentIndex]"
        alt="Slideshow"
        class="sm:w-full h-fit object-cover"
      />
    </Transition>
  </figure>
</template>
