<template>
  <section ref="trigger" :class="className">
    <section ref="target">
      <slot></slot>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWindowSize } from '@vueuse/core'

// Component props
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  speed: {
    type: Number,
    default: 1,
  },
  id: {
    type: String,
    default: 'parallax',
  },
  start: {
    type: String,
    default: 'top bottom',
  },
  end: {
    type: String,
    default: 'bottom top',
  },
})

// Refs
const trigger = ref(null)
const target = ref(null)
const timeline = ref(null)

// Window size
const { width: windowWidth } = useWindowSize()

onMounted(() => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Calculate parallax movement
  const y = computed(() => windowWidth.value * props.speed * 0.1)

  // Create quick setter for Y position
  const setY = gsap.quickSetter(target.value, 'y', 'px')

  // Create timeline with ScrollTrigger
  timeline.value = gsap.timeline({
    scrollTrigger: {
      id: props.id,
      trigger: trigger.value,
      scrub: true,
      start: props.start,
      end: props.bottom,
      onUpdate: (e) => {
        setY(e.progress * y.value)
      },
    },
  })
})

// Kill timeline on unmount
onUnmounted(() => {
  timeline.value?.kill()
})
</script>
