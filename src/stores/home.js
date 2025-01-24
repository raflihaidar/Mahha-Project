import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useHomeStore = defineStore('home', () => {
  const BASEURL = 'https://admin.mahharesorts.com/api/sections'
  const heroData = ref(null)
  const bannerData = ref(null)
  const contentHighlight = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const fetchAllData = async () => {
    if (heroData.value && bannerData.value && contentHighlight.value) return

    isLoading.value = true
    try {
      const [heroRes, bannerRes, contentHighlightRes] = await Promise.all([
        axios.get(`${BASEURL}/hero`),
        axios.get(`${BASEURL}/banner`),
        axios.get(`${BASEURL}/content-highlight`),
      ])

      // console.log('Hero Response : ', heroRes)
      // console.log('Banner Response : ', bannerRes)

      // Filter and assign data based on pages_name
      heroData.value = heroRes.data.data.find((item) => item.page.pages_name === 'home') || null
      bannerData.value = bannerRes.data.data.find((item) => item.page.pages_name === 'home') || null

      contentHighlight.value =
        contentHighlightRes.data.data.filter((item) => item.page.pages_name === 'home') || []

      // console.log('Content State Response : ', typeof contentHighlight.value)
      // console.log('Hero State Response : ', typeof heroData.value)
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
    isLoading,
    error,
    fetchAllData,
  }
})
