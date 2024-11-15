<script setup>
import BaseBanner from '../components/BaseBanner.vue';
const props = defineProps({
  title: String,
  backgroundImage: String
})
</script>


<template>
  <header :style="{ backgroundImage: `url(${backgroundImage})` }" class="w-full h-full bg-cover bg-top">
    <div class="text-center flex flex-col justify-center items-center h-screen w-full">
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-light-default">
        Exquisite Escapism
      </h1>
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-light-default">
        To A Picturesque Haven
      </h1>
    </div>
    <p class="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shade-3 cursor-pointer z-20">
      Scroll Down To
      Discover
    </p>
    <BaseBanner />
    <div class="bg-black w-full h-screen absolute opacity-30">
    </div>
  </header>
</template>
