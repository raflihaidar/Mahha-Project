<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'
import BaseCalendar from './BaseCalendar.vue'
import CloseIcon from '../assets/icons/CloseIcon.vue'

const isMenuOpen = ref(false)
const calenderOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
// Menutup menu ketika route berubah
const route = useRoute()

watch(
  () => route.path,
  () => (isMenuOpen.value = false),
)
</script>

<template>
  <Teleport to="body">
    <nav
      class="fixed top-0 text-light-default w-full flex justify-between items-center bg-transparent px-3 py-2 sm:px-10 z-50"
    >
      <ul class="cursor-pointer hidden md:block text-xs font-thin">
        <li>
          <a :href="$router.resolve({ name: 'accommodation' }).href">ACCOMMODATION </a>
        </li>
        <li>
          <a :href="$router.resolve({ name: 'experiences' }).href">EXPERIENCES </a>
        </li>
        <li>
          <a :href="$router.resolve({ name: 'dining' }).href">DINING </a>
        </li>
      </ul>
      <section class="text-xs cursor-pointer block md:hidden" @click="isMenuOpen = true">
        <p>MENU</p>
      </section>
      <a :href="$router.resolve({ name: 'home' }).href">
        <figure class="w-auto cursor-pointer">
          <img class="w-full" src="../assets/images/Logo.svg" alt="Logo Mahha diii MERU" />
        </figure>
      </a>
      <section>
        <BaseButton
          class="hidden md:block"
          text="BOOK YOUR STAY"
          iconColor="#FCFCF0"
          textColor="text-light-default"
          fontSize="text-xs"
          font-weight="font-thin"
          @click="calenderOpen = true"
        />

        <BaseButton
          class="block md:hidden"
          text="BOOK"
          iconColor="#FCFCF0"
          textColor="text-light-default"
          fontSize="text-xs"
          :icon="false"
          @click="calenderOpen = true"
        />
      </section>

      <BaseCalendar :isOpen="calenderOpen" @close="calenderOpen = false" />
    </nav>
  </Teleport>

  <Teleport to="body">
    <section
      v-if="isMenuOpen"
      class="fixed flex flex-col justify-between w-screen h-[90%] p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-default z-50"
    >
      <nav class="w-full relative">
        <RouterLink to="/">
          <figure class="w-auto absolute cursor-pointer left-1/2 transform -translate-x-1/2">
            <img src="../assets/images/Logo.svg" alt="Logo" class="w-full h-full" />
          </figure>
        </RouterLink>
        <CloseIcon @click="closeMenu" class="ml-auto cursor-pointer" />
      </nav>

      <ul class="w-full grid gap-y-3 text-center text-light-default text-3xl font-medium">
        <li>
          <RouterLink to="/accommodation">Accommodation</RouterLink>
        </li>
        <li>
          <RouterLink to="/experiences">Experiences</RouterLink>
        </li>
        <li>
          <RouterLink to="/dining">Dining</RouterLink>
        </li>
      </ul>
      <footer class="w-full font-medium text-xl text-center text-light-default">
        <h3>BOOK YOUR STAY</h3>
      </footer>
    </section>
  </Teleport>
</template>
