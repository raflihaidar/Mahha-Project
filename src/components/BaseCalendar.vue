<script setup>
import CloseIcon from '@/assets/icons/CloseIcon.vue'
import NextIcon from '@/assets/icons/NextIcon.vue'
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])

// Tahun dan bulan saat ini
const currentYear = ref(dayjs().year())
const currentMonth = ref(dayjs().month())

// Pilihan tanggal
const checkInDate = ref(null)
const checkOutDate = ref(null)

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
      fullDate: dayjs().month(month).year(year).date(date).format('YYYY-MM-DD')
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
    checkOutDate.value = date > checkInDate.value ? date : checkInDate.value
  } else {
    checkInDate.value = date
    checkOutDate.value = null
  }
}

// Rentang waktu
const isInRange = (date) => {
  return (
    checkInDate.value &&
    checkOutDate.value &&
    date > checkInDate.value &&
    date < checkOutDate.value
  )
}
</script>

<template>
  <Teleport to="body">
    <section class="fixed bg-black bg-opacity-70 w-screen h-screen top-0" v-if="isOpen">
      <main
        class="w-1/2 h-auto p-16 bg-light-default border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <!-- Bagian Input Guest, Check-in, dan Check-out -->
        <section class="flex justify-between gap-x-5 items-start">
          <div class="w-full grid border-b border-dark-default">
            <label for="guestInput">Guest</label>
            <select name="guestInput" id="guestInput" class="bg-inherit">
              <option value=""></option>
            </select>
          </div>
          <div class="w-full grid border-b border-dark-default">
            <label for="checkin">Check-in</label>
            <input type="text" name="checkin" id="checkin" :value="checkInDate || 'Select date'" disabled>
          </div>
          <div class="w-full grid border-b border-dark-default">
            <label for="checkout">Check-out</label>
            <input type="text" name="checkout" id="checkout" :value="checkOutDate || 'Select date'" disabled>
          </div>
        </section>

        <CloseIcon class="absolute top-5 right-5 cursor-pointer" color="#000" @close="emits('close')" />

        <!-- Kalender -->
        <section class="w-full h-full">
          <header class="w-full h-auto relative flex justify-between mt-10 text-dark-default">
            <section class="w-1/2 flex justify-center gap-x-3">
              <h4>{{ dayjs().month(currentMonth).format('MMMM') }}</h4>
              <h4>{{ currentYear }}</h4>
            </section>
            <section class="w-1/2 flex justify-center gap-x-3">
              <h4>{{ dayjs().month((currentMonth + 1) % 12).format('MMMM') }}</h4>
              <h4>{{ currentMonth === 11 ? currentYear + 1 : currentYear }}</h4>
            </section>
          </header>

          <section class="w-full h-full flex justify-between items-center gap-x-10 cursor-pointer">
            <!-- Kalender Bulan Ini -->
            <div class="w-full h-full">
              <div class="grid grid-cols-7 font-thin text-dark-default my-5 place-items-center">
                <p v-for="day in days" :key="day">{{ day.substr(0, 2) }}</p>
              </div>

              <div class="w-full h-full grid grid-cols-7 bg-white p-3 place-items-center gap-x-0">
                <template v-for="(d, index) in dates" :key="index">
                  <div v-if="!d"></div>
                  <button v-else class="w-full h-full px-3 py-3 font-thin text-sm text-dark-default"
                    @click="selected(d.fullDate)" :class="{
      'bg-dark-default text-light-default': d.fullDate === checkInDate || d.fullDate === checkOutDate,
      'bg-light-shade-3': isInRange(d.fullDate),
      'hover:bg-light-shade-3 transition-colors': d.fullDate !== checkInDate && d.fullDate !== checkOutDate
    }">
                    <span>{{ d.date }}</span>
                  </button>
                </template>
              </div>
            </div>

            <!-- Kalender Bulan Berikutnya -->
            <div class="w-full h-full">
              <div class="grid grid-cols-7 font-thin text-dark-default my-5 place-items-center">
                <p v-for="day in days" :key="day">{{ day.substr(0, 2) }}</p>
              </div>

              <div class="w-full h-full grid grid-cols-7 bg-white p-3 place-items-center gap-x-0">
                <template v-for="(d, index) in nextMonthDates" :key="index">
                  <div v-if="!d"></div>
                  <button v-else class="w-full h-full px-3 py-3 font-thin text-sm text-dark-default"
                    @click="selected(d.fullDate)" :class="{
      'bg-dark-default text-light-default': d.fullDate === checkInDate || d.fullDate === checkOutDate,
      'bg-light-shade-3': isInRange(d.fullDate),
      'hover:bg-light-shade-3 transition-colors': d.fullDate !== checkInDate && d.fullDate !== checkOutDate
    }">
                    <span>{{ d.date }}</span>
                  </button>
                </template>
              </div>
            </div>
          </section>
        </section>

        <div class="flex justify-center mt-10">
          <button class="bg-dark-default text-light-default w-fit px-6 py-4">Search</button>
        </div>
      </main>
    </section>
  </Teleport>
</template>
