<script setup>
import CloseIcon from '@/assets/icons/CloseIcon.vue'
import NextIcon from '@/assets/icons/NextIcon.vue'
import PrevIcon from '@/assets/icons/PreviousIcon.vue'
import UserIcon from '@/assets/icons/calendar/UserIcon.vue'
import CalendarInIcon from '@/assets/icons/calendar/CalendarInIcon.vue'
import CalendarOutIcon from '@/assets/icons/calendar/CalendarOutIcon.vue'

import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import PlusIcon from '../assets/icons/PlusIcon.vue'
import MinusIcon from '../assets/icons/MinusIcon.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['close'])

// Tahun dan bulan saat ini
const currentYear = ref(dayjs().year())
const currentMonth = ref(dayjs().month())

// Pilihan tanggal
const checkInDate = ref(null)
const checkOutDate = ref(null)

const guestModal = ref(false)
const guestQty = ref({
  adults: 1,
  childrens: 0,
  infants: 0,
})

// Fungsi untuk menambah atau mengurangi jumlah tamu
const increaseQty = (type) => {
  if (type === 'adults') guestQty.value.adults += 1
  if (type === 'childrens') guestQty.value.childrens += 1
  if (type === 'infants') guestQty.value.infants += 1
}

const decreaseQty = (type) => {
  if (type === 'adults' && guestQty.value.adults > 1) guestQty.value.adults -= 1
  if (type === 'childrens' && guestQty.value.childrens > 0) guestQty.value.childrens -= 1
  if (type === 'infants' && guestQty.value.infants > 0) guestQty.value.infants -= 1
}

// Hari dalam seminggu
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Fungsi untuk menghasilkan tanggal dalam bulan tertentu
const generateCalendar = (month, year) => {
  const daysInMonth = dayjs().month(month).year(year).daysInMonth()
  const firstDayOfWeek = dayjs().month(month).year(year).startOf('month').day()

  const dates = Array.from({ length: firstDayOfWeek }, () => null) // Placeholder untuk offset awal
  for (let date = 1; date <= daysInMonth; date++) {
    dates.push({
      date,
      fullDate: dayjs().month(month).year(year).date(date).format('ddd, DD MMM YYYY'),
    })
  }
  return dates
}

// Kalender saat ini dan bulan berikutnya
const dates = computed(() => generateCalendar(currentMonth.value, currentYear.value))

const nextMonthDates = computed(() => {
  const nextMonth = (currentMonth.value + 1) % 12
  const nextYear = currentMonth.value === 11 ? currentYear.value + 1 : currentYear.value
  return generateCalendar(nextMonth, nextYear)
})

// Pilih tanggal
const selected = (date) => {
  if (!date) return

  if (!checkInDate.value) {
    checkInDate.value = date
  } else if (!checkOutDate.value) {
    checkOutDate.value = dayjs(date).isAfter(dayjs(checkInDate.value)) ? date : checkInDate.value
  } else {
    checkInDate.value = date
    checkOutDate.value = null
  }
}

const isPastDate = (date) => dayjs(date).isBefore(dayjs(), 'day')

// Rentang waktu
const isInRange = (date) => {
  const parsedCheckIn = dayjs(checkInDate.value)
  const parsedCheckOut = dayjs(checkOutDate.value)

  return (
    checkInDate.value &&
    checkOutDate.value &&
    dayjs(date).isAfter(parsedCheckIn) &&
    dayjs(date).isBefore(parsedCheckOut)
  )
}

const handleSlide = () => {
  currentMonth.value += 1

  if (currentMonth.value === 12) {
    currentMonth.value = 0
    currentYear.value += 1
  }
}

const handlePrevious = () => {
  if (currentMonth.value !== 0) {
    currentMonth.value -= 1 // Kurangi bulan
  }
}

const onBook = () => {
  const link = 'https://secure.guestaps.com/'
  let merchant_id = 'mahha'

  location.href =
    link +
    merchant_id +
    '/hotel-filter-redirect/' +
    checkInDate.value +
    '/' +
    checkOutDate.value +
    '/promo_code_empty' +
    '?guest=' +
    guestQty.value.adults +
    '-' +
    guestQty.value.childrens +
    '-' +
    guestQty.value.infants +
    ''
}

const handleClose = () => {
  emits('close')
  currentYear.value = dayjs().year()
  currentMonth.value = dayjs().month()
  checkOutDate.value = null
  checkInDate.value = null
  guestQty.value = {
    adults: 1,
    childrens: 0,
    infants: 0,
  }
}
</script>

<template>
  <Teleport to="body">
    <section class="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-50" v-if="isOpen">
      <main
        class="sm:w-[50rem] w-full sm:p-12 p-6 sm:h-auto h-full bg-light-default absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <!-- Bagian Input Guest, Check-in, dan Check-out -->
        <section class="flex flex-col sm:flex-row justify-between gap-x-5 items-start">
          <div
            class="w-full flex gap-x-5 items-center relative text-dark-default border-b border-dark-default mb-3"
          >
            <UserIcon />
            <label for="guestInput">
              Guest
              <div
                type="text"
                name="guestInput"
                id="guestInput"
                class="w-full h-6 bg-inherit cursor-pointer"
                @click="guestModal = !guestModal"
              >
                <p class="text-xs">
                  <span>{{ guestQty.adults }} Adults, </span>
                  <span> {{ guestQty.childrens }} Children, </span>
                  <span>{{ guestQty.infants }} Infants</span>
                </p>
              </div>
            </label>
            <div
              class="absolute -bottom-56 z-[999] w-full bg-white px-3 pt-3 rounded-lg shadow-md"
              v-if="guestModal"
            >
              <div class="w-full mb-2 py-2 flex justify-between items-center border-b">
                <section class="w-1/2 self-end">
                  <p>Adults</p>
                  <p class="text-xs">Ages 17 or above</p>
                </section>
                <section class="flex w-1/2 items-center text-center justify-between gap-x-5">
                  <button
                    class="w-fit h-fit rounded-full shadow-md p-2 cursor-pointer"
                    @click="decreaseQty('adults')"
                  >
                    <MinusIcon />
                  </button>
                  <p>{{ guestQty.adults }}</p>
                  <button
                    class="rounded-full shadow-md p-2 cursor-pointer"
                    @click="increaseQty('adults')"
                  >
                    <PlusIcon />
                  </button>
                </section>
              </div>
              <div class="w-full mb-2 py-2 flex justify-between items-center border-b">
                <section class="w-1/2 self-end">
                  <p>Childrens</p>
                  <p class="text-xs">Ages 2 - 16</p>
                </section>
                <section class="flex w-1/2 items-center justify-between gap-x-5">
                  <button
                    class="rounded-full shadow-md p-2 cursor-pointer"
                    @click="decreaseQty('childrens')"
                  >
                    <MinusIcon />
                  </button>
                  <p>{{ guestQty.childrens }}</p>
                  <button
                    class="rounded-full shadow-md p-2 cursor-pointer"
                    @click="increaseQty('childrens')"
                  >
                    <PlusIcon />
                  </button>
                </section>
              </div>
              <div class="w-full flex py-2 justify-between items-center border-b">
                <section class="w-1/2 self-end">
                  <p>Infants</p>
                  <p class="text-xs">Under 2</p>
                </section>
                <section class="flex w-1/2 items-center justify-between gap-x-5">
                  <button
                    class="rounded-full shadow-md p-2 cursor-pointer"
                    @click="decreaseQty('infants')"
                  >
                    <MinusIcon />
                  </button>
                  <p>{{ guestQty.infants }}</p>
                  <button
                    class="rounded-full shadow-md p-2 cursor-pointer"
                    @click="increaseQty('infants')"
                  >
                    <PlusIcon />
                  </button>
                </section>
              </div>
            </div>
          </div>
          <div
            class="w-full flex gap-x-5 items-center text-dark-default border-b border-dark-default mb-3"
          >
            <CalendarInIcon />
            <label for="checkin" class="grid">
              Check-in
              <div type="text" name="checkin" id="checkin" class="w-full h-6 bg-inherit">
                <p class="text-xs">
                  {{ checkInDate }}
                </p>
              </div>
            </label>
          </div>
          <div
            class="w-full flex gap-x-5 items-center text-dark-default border-b border-dark-default mb-3"
          >
            <CalendarOutIcon />
            <label for="checkout" class="grid">
              Check-out
              <div type="text" name="checkout" id="checkout" class="w-full h-6 bg-inherit">
                <p class="text-xs">
                  {{ checkOutDate }}
                </p>
              </div>
            </label>
          </div>
        </section>

        <CloseIcon
          class="absolute top-5 right-5 cursor-pointer"
          color="#000"
          @close="handleClose"
        />

        <!-- Kalender -->
        <section class="w-full sm:h-full h-auto">
          <header
            class="w-full h-auto relative flex justify-between text-dark-default text-[0.875rem] mt-5"
          >
            <section class="sm:w-1/2 w-full flex justify-center gap-x-3">
              <h4>{{ dayjs().month(currentMonth).format('MMMM') }}</h4>
              <h4>{{ currentYear }}</h4>
            </section>
            <section class="w-1/2 sm:flex justify-center gap-x-3 hidden">
              <h4>
                {{
                  dayjs()
                    .month((currentMonth + 1) % 12)
                    .format('MMMM')
                }}
              </h4>
              <h4>{{ currentMonth === 11 ? currentYear + 1 : currentYear }}</h4>
            </section>

            <PrevIcon
              v-if="currentMonth != 0"
              color="#45462A"
              @click="handlePrevious"
              class="absolute top-0 left-0 z-50 cursor-pointer"
            />

            <NextIcon
              color="#45462A"
              @click="handleSlide"
              class="absolute top-0 right-0 z-50 cursor-pointer"
            />
          </header>

          <section
            class="max-w-full h-full flex justify-between sm:items-stretch items-center gap-x-10 cursor-pointer"
          >
            <!-- Kalender Bulan Ini -->
            <div class="w-full h-full">
              <div
                class="grid grid-cols-7 font-thin text-dark-default my-5 place-items-center text-[0.875rem]"
              >
                <p v-for="day in days" :key="day">{{ day }}</p>
              </div>

              <div
                class="sm:w-full sm:h-full w-full h-[40%] grid grid-cols-7 bg-white sm:p-3 place-items-center gap-x-0"
              >
                <template v-for="(d, index) in dates" :key="index">
                  <div v-if="!d"></div>
                  <button
                    v-else
                    class="w-full h-full px-3 py-3 font-thin text-[0.875rem] text-dark-default"
                    @click="selected(d.fullDate)"
                    :class="{
                      'bg-dark-default text-light-default':
                        d.fullDate === checkInDate || d.fullDate === checkOutDate,
                      'bg-light-shade-3': isInRange(d.fullDate),
                      'hover:bg-light-shade-3 transition-colors':
                        d.fullDate !== checkInDate && d.fullDate !== checkOutDate,
                      'opacity-20': isPastDate(d.fullDate),
                    }"
                    :disabled="isPastDate(d.fullDate)"
                  >
                    <span>{{ d.date }}</span>
                  </button>
                </template>
              </div>
            </div>

            <!-- Kalender Bulan Berikutnya -->
            <div class="w-full h-full hidden sm:block">
              <div class="grid grid-cols-7 font-thin text-dark-default my-5 place-items-center">
                <p v-for="day in days" :key="day">{{ day }}</p>
              </div>

              <div class="w-full h-full grid grid-cols-7 bg-white p-3 place-items-center gap-x-0">
                <template v-for="(d, index) in nextMonthDates" :key="index">
                  <div v-if="!d"></div>
                  <button
                    v-else
                    class="w-full h-full px-3 py-3 font-thin text-[0.875rem] text-dark-default"
                    @click="selected(d.fullDate)"
                    :class="{
                      'bg-dark-default text-light-default':
                        d.fullDate === checkInDate || d.fullDate === checkOutDate,
                      'bg-light-shade-3': isInRange(d.fullDate),
                      'hover:bg-light-shade-3 transition-colors':
                        d.fullDate !== checkInDate && d.fullDate !== checkOutDate,
                    }"
                  >
                    <span>{{ d.date }}</span>
                  </button>
                </template>
              </div>
            </div>
          </section>
        </section>

        <div class="w-full h-auto mx-auto sm:w-[5.875rem] mt-5 border" @click="onBook">
          <button class="w-full bg-dark-default text-xs text-light-default py-4 px-6">
            SEARCH
          </button>
        </div>
      </main>
    </section>
  </Teleport>
</template>
