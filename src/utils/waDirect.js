export const sendWhatsAppMessage = () => {
  const message = encodeURIComponent(
    'Selamat datang di Mahha Resorts! Terima kasih telah menghubungi kami. Kami sangat menanti kedatangan Anda. Resepsionis kami akan segera membalas pesan Anda untuk memberikan bantuan yang Anda butuhkan. Selamat menikmati waktu Anda bersama kami!',
  )

  const url = `https://wa.me/6287760619919?text=${message}`
  window.open(url, '_blank')
}
