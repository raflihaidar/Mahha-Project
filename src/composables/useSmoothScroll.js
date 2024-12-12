import Lenis from 'lenis'

export const useSmoothScroll = () => {
  const scrollLenis = new Lenis({
    duration: 2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.5,
  })

  const raf = (time) => {
    scrollLenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
