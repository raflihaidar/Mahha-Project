<script setup>
import ButtonBookingIcon from '@/assets/icons/ButtonBookingIcon.vue';
</script>
<template>
  <nav class="fixed top-0 w-full flex justify-between items-center bg-transparent px-10 py-2 z-50">
    <section class="font font-Moulin text-sm text-light-default">
      <p>ACCOMODATION</p>
      <p>EXPERIENCES</p>
      <p>DINNER</p>
    </section>
    <figure class="w-auto cursor-pointer">
      <img class="w-full" src="../assets/images/Logo.svg" alt="Logo Mahha diii MERU" />
    </figure>
    <section>
      <button class="font font-Moulin text-sm text-light-default cursor-pointer">
        <p>BOOK YOUR STAY</p>
        <ButtonBookingIcon />
      </button>
    </section>
  </nav>
</template>
