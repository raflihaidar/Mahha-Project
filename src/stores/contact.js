import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useContactStore = defineStore('contact', () => {
  const BASEURL = 'https:///admin.mahharesorts.com/api'
  const contactData = ref([])
  const reservationNumber = ref(null)
  const contactUsNumber = ref(null)

  const isLoading = ref(false)
  const error = ref(null)

  const fetchAllData = async () => {
    isLoading.value = true
    try {
      const { data } = await axios.get(`${BASEURL}/contact`)

      reservationNumber.value = data.data.find((item) => item.id == 1)
      contactUsNumber.value = data.data.find((item) => item.id == 2)
      contactData.value = data.data
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return {
    reservationNumber,
    contactUsNumber,
    contactData,
    fetchAllData,
  }
})
