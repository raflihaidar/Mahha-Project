<script setup>
import gsap from 'gsap'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import CloseIcon from '../assets/icons/CloseIcon.vue'
import { sendWhatsAppMessage } from '@/utils/waDirect.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  img: String,
  subTitle: String,
  title: String,
  contents: String,
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
      class="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-75"
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
        class="lg:w-[50vw] w-full top-0 left-0 h-full fixed overflow-y-scroll no-scrollbar z-[100]"
        v-if="isOpen"
      >
        <div
          class="w-full sm:h-[80%] h-1/2 z-50 relative bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${img})` }"
        >
          <div
            class="absolute z-50 bottom-0 w-full h-[60vh] bg-gradient-to-b from-dark-default/0 to-dark-default/100"
          ></div>
          <div class="mix-blend-screen"></div>
          <button class="absolute top-5 right-10">
            <CloseIcon @click="closeModal" />
          </button>
        </div>

        <section class="w-full h-fit sm:py-16 py-20 sm:px-16 px-5 bg-dark-default">
          <h3 class="text-light-shade-1 uppercase text-base font-medium">{{ subTitle }}</h3>
          <h2 class="text-light-default text-2xl mt-5 w-[20.5rem] lg:w-full">{{ title }}</h2>
          <div class="w-full my-10 font-thin">
            <p class="text-light-shade-1 mb-7 text-xs 2xl:text-base">
              {{ contents }}
            </p>
          </div>
          <BaseButton
            text="MAKE RESERVATION"
            text-color="text-light-default"
            font-size="text-xs"
            icon-color="#FCFCF0"
            @action="sendWhatsAppMessage"
          />
        </section>
      </article>
    </transition>
  </Teleport>
</template>
