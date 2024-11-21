<script setup>
const props = defineProps({
  fTitle: String,
  lTitle: String,
  img: String,
})
</script>

<template>
  <header
    :style="{ backgroundImage: `url(${img})` }"
    class="font-bold sw-full h-full bg-cover bg-center sm:bg-top sm:px-0 relative"
  >
    <div
      class="text-center font-Moulin flex flex-col justify-center items-center h-screen sm:w-full w-[95%] mx-auto"
    >
      <h1 class="text-4xl sm:text-4xl lg:text-8xl font-bold leading-tight text-light-default z-20">
        {{ fTitle }} <br />
        {{ lTitle }}
      </h1>
    </div>
    <p
      class="absolute top-[90vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-dark-shade-3 cursor-pointer z-20"
    >
      Scroll Down To Discover
    </p>
    <div class="w-full h-96 bg-gradient-to-b from-[#45462A00] to-[#45462A]"></div>
    <div class="bg-black w-full h-full absolute bottom-0 top-0 bg-opacity-50 z-10">
      <div
        class="absolute bottom-0 w-full h-96 bg-gradient-to-b from-[#45462A00] to-[#45462A]"
      ></div>
    </div>
    <div class="mix-blend-screen"></div>
  </header>
</template>

<style scoped>
header {
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;
}
</style>
