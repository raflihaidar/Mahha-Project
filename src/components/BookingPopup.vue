<script setup>
import { sendWhatsAppMessage } from '@/utils/waDirect.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import bookingPopupImage from '@/assets/images/booking-popup.png'
import BaseButton from '@/components/BaseButton.vue'
import CloseIcon from '@/assets/icons/CloseIcon.vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue'

// Responsif untuk mobile
const isMobile = ref(window.innerWidth <= 768)

// Menambahkan event listener untuk resize
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const beforeEnter = (el) => {
  if (!isMobile.value) {
    el.style.transform = 'translateX(100%)' // Desktop, dari kanan
  } else {
    el.style.transform = 'translateY(100%)' // Mobile, dari bawah
  }
  el.style.transition = 'transform 0.5s ease-out'
}

const enter = (el) => {
  el.offsetHeight // trigger reflow
  if (!isMobile.value) {
    el.style.transform = 'translateX(0)' // Desktop, muncul
  } else {
    el.style.transform = 'translateY(0)' // Mobile, muncul
  }
}

const leave = (el) => {
  if (!isMobile.value) {
    el.style.transform = 'translateX(100%)' // Desktop, keluar ke kanan
  } else {
    el.style.transform = 'translateY(100%)' // Mobile, keluar ke bawah
  }
  el.style.transition = 'transform 0.5s ease-out'
}

const isOpen = ref(false)

onMounted(() => {
  setTimeout(() => {
    isOpen.value = true
  }, 5000)
})
</script>

<template>
  <Teleport to="body">
    <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <section class="w-screen h-screen fixed top-0" v-if="isOpen">
        <section
          class="sm:w-[360px] sm:h-[222px] w-full h-auto bg-no-repeat bg-cover absolute bottom-0 sm:right-0 text-light-default px-10 py-10"
          :style="{ backgroundImage: `url(${bookingPopupImage})` }"
        >
          <h3 class="text-2xl mb-3">Direct Booking Benefits</h3>
          <ul class="font-thin text-sm mb-3">
            <li class="flex items-center">
              <CheckIcon />
              Best rate guarantee
            </li>
            <li class="flex items-center">
              <CheckIcon />
              Free upgrade on arrival (upon availability)
            </li>
            <li class="flex items-center">
              <CheckIcon />
              Tailored stay experience
            </li>
          </ul>
          <BaseButton text="BOOK NOW" @click="sendWhatsAppMessage" />
          <CloseIcon
            class="absolute top-5 right-5 cursor-pointer"
            size="0.7rem"
            @close="isOpen = false"
          />
        </section>
      </section>
    </Transition>
  </Teleport>
</template>
