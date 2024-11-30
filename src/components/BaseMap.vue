<script setup>
import { ref, onMounted } from 'vue'
import Map from '@/assets/icons/Map.vue'

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

onMounted(() => {
  const container = document.getElementById('map-container')
  container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2
})
</script>

<template>
  <section class="sm:w-full w-full flex flex-col sm:overflow-auto h-auto relative">
    <section class="flex my-0 mx-auto overflow-x-auto whitespace-nowrap w-full" id="map-container">
      <Map :distances="places" @update="updateDistance" />
    </section>
    <p
      class="absolute bottom-0 md:bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-sm lg:text-lg"
    >
      {{ distance }} km
    </p>
  </section>
</template>

<style scoped>
.map-container {
  direction: rtl;
}
</style>
