<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

// Index gambar saat ini
const currentIndex = ref(0)
const isChange = ref(true) // Awalnya true untuk merender gambar pertama
let intervalId = null

// Fungsi untuk memulai slideshow otomatis
const startSlideshow = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      isChange.value = false // Set ke false untuk memulai transisi keluar
      setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % props.images.length
        isChange.value = true // Set ke true untuk memulai transisi masuk
      }, 500) // Waktu ini sesuai dengan durasi transisi (0.5s)
    }, 5000) // Ganti gambar setiap 5 detik
  }
}

// Fungsi untuk menghentikan slideshow
const stopSlideshow = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// Fungsi untuk memantau posisi scroll
const handleScroll = () => {
  if (window.scrollY === 0) {
    startSlideshow() // Mulai slideshow jika tidak di-scroll
  } else {
    stopSlideshow() // Hentikan slideshow jika di-scroll
  }
}

// Mulai slideshow dan tambahkan listener ketika komponen di-mount
onMounted(() => {
  startSlideshow()
  window.addEventListener('scroll', handleScroll)
})

// Hentikan slideshow dan hapus listener ketika komponen di-unmount
onUnmounted(() => {
  stopSlideshow()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <figure class="lg:w-[43.5rem] h-full w-[90%] relative">
    <Transition name="fade">
      <img
        v-if="isChange"
        :src="images[currentIndex]"
        alt="Slideshow"
        class="sm:w-full h-full object-cover"
      />
    </Transition>
  </figure>
</template>

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
