<script setup>
import gsap from 'gsap'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import bikeImage from '@/assets/images/Experiences_Page/Experiences-06.jpg'
import CloseIcon from '../assets/icons/CloseIcon.vue'
import { sendWhatsAppMessage } from '@/utils/waDirect.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  subTitle: String,
  title: String,
  contents: Array,
})

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

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

// Transisi
const onBeforeEnter = (el) => {
  if (!isMobile.value) {
    el.style.transform = 'translateX(-100vw)'
  } else {
    el.style.transform = 'translateY(100vh)'
  }
}

const onEnter = (el, done) => {
  if (!isMobile.value) {
    gsap.to(el, {
      duration: 0.5,
      opacity: 1,
      translateX: '0vw',
      ease: 'power1.inOut',
    })
  } else {
    gsap.to(el, {
      duration: 0.5,
      opacity: 1,
      translateY: '0vh',
      ease: 'power1.inOut',
    })
  }
  done()
}

const beforeLeave = (el) => {
  if (!isMobile.value) {
    el.style.transform = 'translateX(0vw)'
  } else {
    el.style.transform = 'translateY(0vh)'
  }
}

const onLeave = (el, done) => {
  if (!isMobile.value) {
    gsap.to(el, {
      duration: 0.5,
      opacity: 1,
      translateX: '-100vw',
      ease: 'power1.inOut',
      onComplete: done,
    })
  } else {
    gsap.to(el, {
      duration: 0.5,
      opacity: 1,
      translateY: '100vh',
      ease: 'power1.inOut',
      onComplete: done,
    })
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-30"
      v-if="isOpen"
      @click="closeModal"
    ></div>
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @before-leave="beforeLeave"
      @leave="onLeave"
      :css="false"
    >
      <article
        class="sm:w-[50vw] w-full top-0 left-0 h-full fixed overflow-y-scroll no-scrollbar z-[100]"
        v-if="isOpen"
      >
        <div class="w-full sm:h-[70%] h-1/2 z-50 relative">
          <img :src="bikeImage" alt="Bike trekking experience" class="w-full h-full object-top" />
          <div
            class="absolute bottom-0 w-full h-64 bg-gradient-to-b from-[#45462A00] to-[#45462A]"
          ></div>
          <div class="mix-blend-screen"></div>
          <button class="absolute top-5 right-10">
            <CloseIcon @click="closeModal" />
          </button>
        </div>

        <section class="w-full h-fit sm:py-28 py-20 sm:px-28 px-5 bg-dark-default">
          <h3 class="text-light-shade-1 uppercase text-base font-medium">{{ subTitle }}</h3>
          <h2 class="text-light-default text-2xl mt-5">{{ title }}</h2>
          <div class="w-full my-16">
            <p class="text-light-shade-1 mb-10" v-for="(item, index) in contents" :key="index">
              {{ item }}
            </p>
          </div>
          <BaseButton
            text="MAKE RESERVATION"
            text-color="text-light-default"
            font-size="text-sm"
            icon-color="#FCFCF0"
            @action="sendWhatsAppMessage"
          />
        </section>
      </article>
    </transition>
  </Teleport>
</template>
