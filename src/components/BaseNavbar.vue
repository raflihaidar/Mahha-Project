<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
  <nav
    class="fixed top-0 text-light-default w-full flex justify-between items-center bg-transparent px-3 py-2 sm:px-10 z-50"
  >
    <section class="text-sm hidden sm:block">
      <p>ACCOMODATION</p>
      <p>EXPERIENCES</p>
      <p>DINNER</p>
    </section>
    <section class="text-md cursor-pointer block sm:hidden">
      <p>MENU</p>
    </section>
    <figure class="w-auto cursor-pointer">
      <img class="w-full" src="../assets/images/Logo.svg" alt="Logo Mahha diii MERU" />
    </figure>
    <section>
      <BaseButton
        class="hidden sm:block"
        text="BOOK YOUR STAY"
        iconColor="#FCFCF0"
        textColor="text-light-default"
        fontSize="text-sm"
      />

      <BaseButton
        class="block sm:hidden"
        text="BOOK"
        iconColor="#FCFCF0"
        textColor="text-light-default"
        fontSize="text-md"
        :icon="false"
      />
    </section>
  </nav>
</template>
