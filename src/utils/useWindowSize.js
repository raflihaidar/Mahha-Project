// src/utils/useWindowSize.js
import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowSize() {
  const windowWidth = ref(window.innerWidth)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { windowWidth }
}
