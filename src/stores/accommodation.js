import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccommodationStore = defineStore('accommodation', () => {
  const BASEURL = 'https://admin.mahharesorts.com/api'
  const heroData = ref(null)
  const bannerData = ref(null)
  const contentHighlight = ref([])
  const sliderImages = ref([]) // Menyimpan data gambar langsung
  const isLoading = ref(false)
  const error = ref(null)

  const fetchAllData = async () => {
    if (heroData.value && bannerData.value && contentHighlight.value) return

    isLoading.value = true
    try {
      const [heroRes, bannerRes, contentHighlightRes, sliderRes] = await Promise.all([
        axios.get(`${BASEURL}/sections/hero`),
        axios.get(`${BASEURL}/sections/banner`),
        axios.get(`${BASEURL}/sections/content-highlight`),
        axios.get(`${BASEURL}/sliders`),
      ])

      // Filter dan assign data berdasarkan pages_name
      heroData.value =
        heroRes.data.data.find((item) => item.page.pages_name === 'accommodation') || null
      bannerData.value = bannerRes.data.data.find((item) => item.page.pages_name === 'home') || null
      contentHighlight.value =
        contentHighlightRes.data.data.filter((item) => item.page.pages_name === 'accommodation') ||
        []

      // Ambil array images langsung dari data slider dan masukkan ke sliderImages
      sliderImages.value = sliderRes.data.data
        .flatMap((item) => item.images) // Ambil array gambar dari setiap item
        .filter((image) => image.pages_name === 'accommodation') // Filter berdasarkan pages_name
        .sort((a, b) => b.id - a.id) // Urutkan berdasarkan id secara menurun
        .slice(0, 4) // Batasi hanya 4 item
    } catch (err) {
      console.log(error)
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return {
    heroData,
    bannerData,
    contentHighlight,
    sliderImages,
    isLoading,
    error,
    fetchAllData,
  }
})
