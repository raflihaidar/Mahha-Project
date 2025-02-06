import { useContactStore } from '../stores/contact'
import { storeToRefs } from 'pinia'

export const formatPhoneNumber = (countryCode, number) => {
  return `${countryCode.replace('+', '')}${number}`
}

export const sendWhatsAppMessage = () => {
  const store = useContactStore()
  const { reservationNumber } = storeToRefs(store)

  // Memisahkan country_code dan number, lalu memformatnya
  const countryCode = reservationNumber.value.country_code
  const number = reservationNumber.value.number
  const formattedPhoneNumber = formatPhoneNumber(countryCode, number)

  const message = encodeURIComponent(reservationNumber.value.message)

  const url = `https://wa.me/${formattedPhoneNumber}?text=${message}`
  window.open(url, '_blank')
}

export const moreInfo = () => {
  const store = useContactStore()
  const { contactUsNumber } = storeToRefs(store)

  const countryCode = contactUsNumber.value.country_code
  const number = contactUsNumber.value.number
  const formattedPhoneNumber = formatPhoneNumber(countryCode, number)

  const message = contactUsNumber.value.message
    ? encodeURIComponent(contactUsNumber.value.message)
    : ''

  const url = `https://wa.me/${formattedPhoneNumber}?text=${message}`
  window.open(url, '_blank')
}
