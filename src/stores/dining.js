import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDiningStore = defineStore('dining', () => {
  const BASEURL = 'https:///admin.mahharesorts.com/api'
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

      // Filter and assign data based on pages_name
      heroData.value = heroRes.data.data.find((item) => item.page.pages_name === 'dining') || null
      bannerData.value =
        bannerRes.data.data.find((item) => item.page.pages_name === 'dining') || null
      contentHighlight.value =
        contentHighlightRes.data.data.filter((item) => item.page.pages_name === 'dining') || []
      // Ambil array images langsung dari data slider dan masukkan ke sliderImages
      sliderImages.value = sliderRes.data.data
        .flatMap((item) => item.images) // Ambil array gambar dari setiap item
        .filter((image) => image.pages_name === 'dining') // Filter berdasarkan pages_name
        .sort((a, b) => b.id - a.id) // Urutkan berdasarkan id secara menurun
        .slice(0, 4) // Batasi hanya 4 item
    } catch (err) {
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
