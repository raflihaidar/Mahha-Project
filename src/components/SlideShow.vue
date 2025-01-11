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
const isChange = ref(true)
let intervalId = null

// Fungsi untuk memulai slideshow otomatis
const startSlideshow = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      isChange.value = false
      setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % props.images.length
        isChange.value = true
      }, 500)
    }, 5000)
  }
}

// Fungsi untuk menghentikan slideshow
const stopSlideshow = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// Fungsi untuk mendeteksi scroll di semua device
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop === 0) {
    startSlideshow()
  } else {
    stopSlideshow()
  }
}

// Mulai slideshow saat komponen di-mount
onMounted(() => {
  startSlideshow()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

// Hentikan slideshow saat komponen di-unmount
onUnmounted(() => {
  stopSlideshow()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <figure class="lg:w-[43.5rem] 2xl:w-[53vw] h-full w-[90%] relative">
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
