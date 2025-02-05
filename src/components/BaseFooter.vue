<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useContactStore } from '@/stores/contact.js'
import dayjs from 'dayjs'
import { storeToRefs } from 'pinia'
import { formatContact } from '../utils/formatedNumber'

// Reactive variable untuk waktu dan tanggal
const currentTime = ref(dayjs().format('h:mm:ss A'))
const currentDate = ref(dayjs().format('dddd, D MMM YYYY'))
const store = useContactStore()
const { contactData } = storeToRefs(store)

// Function untuk memperbarui waktu setiap detik
const updateTime = () => {
  currentTime.value = dayjs().format('h:mm:ss A')
}

// Jalankan interval untuk memperbarui waktu
onMounted(() => {
  setInterval(updateTime, 1000) // Update waktu setiap 1 detik
})

onBeforeMount(async () => {
  await store.fetchAllData()
})
</script>

<template>
  <footer
    class="bg-dark-default lg:px-10 px-5 lg:pt-28 pb-5 flex flex-col lg:space-y-52 space-y-20 z-50"
  >
    <section
      class="flex flex-col lg:flex-row space-y-10 justify-between items-center mt-28 lg:mt-0 text-light-default"
    >
      <figure class="w-auto cursor-pointer">
        <img class="w-full" src="../assets/images/Logo.svg" alt="Logo Mahha diii MERU" />
      </figure>
      <ul
        class="flex flex-col lg:flex-row items-center text-center gap-y-3 gap-x-5 uppercase text-xs 2xl:text-base font-thin"
      >
        <li>
          <a :href="$router.resolve({ name: 'accommodation' }).href">Accomodation</a>
        </li>
        <li>
          <a :href="$router.resolve({ name: 'experiences' }).href">Experiences</a>
        </li>
        <li>
          <a :href="$router.resolve({ name: 'dining' }).href">Dining</a>
        </li>
      </ul>
    </section>
    <section class="w-full grid lg:grid-cols-4 gap-y-5 gap-x-10 text-xs 2xl:text-base">
      <div>
        <section class="text-light-default border-b-[0.5px] pb-3 mb-3 border-[#96742A]">
          <h3>Location</h3>
        </section>
        <address
          class="text-light-shade-1 font-thin not-italic w-[20.5rem] lg:w-[17.5rem] 2xl:w-full"
        >
          Jl. Raya Puncak No.90, Tugu Selatan, Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat 16750
        </address>
      </div>
      <div>
        <section class="text-light-default border-b-[0.5px] pb-3 mb-3 border-[#96742A]">
          <h3>Contact</h3>
        </section>
        <section class="text-light-shade-1 font-thin">
          <p v-for="(item, index) in contactData" :key="index">
            {{ item.type === 'phone' ? formatContact(item.number) : item.email }}
          </p>
        </section>
      </div>
      <div>
        <section
          class="flex justify-between items-center text-light-default border-b-[0.5px] pb-3 mb-3 border-[#96742A]"
        >
          <h3>Time</h3>
          <p>GMT+7</p>
        </section>
        <section class="text-light-shade-1 font-thin">
          <p>{{ currentDate }}</p>
          <p>{{ currentTime }}</p>
        </section>
      </div>
      <div>
        <section
          class="flex justify-between items-center text-light-default border-b-[0.5px] pb-3 mb-3 border-[#96742A]"
        >
          <h3>Weather</h3>
          <p>18°</p>
        </section>
        <section class="text-light-shade-1 font-thin">
          <p>High 24°</p>
          <p>Low 14°</p>
        </section>
      </div>
    </section>
    <section class="w-full flex justify-between items-center">
      <ul class="w-fit flex justify-center gap-x-3">
        <li>
          <a href="https://www.instagram.com/mahharesorts/" aria-label="Follow us on Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#96742a" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                />
                <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="#96742a"
              d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="-4.5 -2 24 24"
          >
            <path
              fill="#96742a"
              d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265"
            />
          </svg>
        </li>
      </ul>
      <section class="text-light-shade-1 md:text-xs 2xl:text-base font-thin text-[0.625rem]">
        <p>© Mahha dii Meru 2024. All Rights Reserved.</p>
      </section>
    </section>
  </footer>
</template>
