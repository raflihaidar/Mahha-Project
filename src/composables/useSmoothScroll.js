import Lenis from 'lenis'
import gsap from 'gsap/all'

export const useSmoothScroll = () => {
  const scrollLenis = new Lenis({
    duration: 2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.5,
  })

  gsap.ticker.add((time) => {
    scrollLenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}
