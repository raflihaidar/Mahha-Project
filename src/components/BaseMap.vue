<script setup>
import Map from '@/assets/icons/Map.vue'
import { ref } from 'vue'

const distance = ref(0)

const places = {
  airport: 70,
  botani: 30,
  city_center: 50,
  bogor_train: 30,
  baranang: 30,
  leuwi: 120,
  kerjati: 175,
}

const updateDistance = (place) => {
  distance.value = place
}
</script>

<template>
  <section
    class="sm:w-full flex flex-col justify-center items-center overflow-x-scroll sm:overflow-auto h-auto relative">
    <Map :distances="places" @update="updateDistance" />
    <p class="absolute bottom-0 md:bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-sm lg:text-lg">
      {{ distance }} km
    </p>
  </section>
</template>
