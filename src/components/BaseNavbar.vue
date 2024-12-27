<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'
import BaseCalendar from './BaseCalendar.vue'
import CloseIcon from '../assets/icons/CloseIcon.vue'
import GraphicsMobileIcon from '../assets/icons/graphicsMobileIcon.vue'

const isMenuOpen = ref(false)
const calenderOpen = ref(false)
const isChange = ref(false)
const route = useRoute()

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(
  () => route.path,
  () => (isMenuOpen.value = false),
)

const navigateWithAnimation = (event) => {
  event.preventDefault()
  const targetUrl = event.target.href

  setTimeout(() => {
    isChange.value = true
    window.location.href = targetUrl
  }, 800)
}
</script>

<template>
  <Teleport to="body">
    <nav
      class="fixed top-0 text-light-default w-full flex justify-between items-center bg-transparent px-3 py-2 sm:px-10 z-50"
    >
      <ul class="cursor-pointer hidden md:block text-xs 2xl:text-base font-thin justify-self-start">
        <li>
          <a href="/accommodation" @click="navigateWithAnimation">ACCOMMODATION</a>
        </li>
        <li>
          <a href="/experiences" @click="navigateWithAnimation">EXPERIENCES</a>
        </li>
        <li>
          <a href="/dining" @click="navigateWithAnimation">DINING</a>
        </li>
      </ul>
      <section class="text-xs cursor-pointer block md:hidden" @click="isMenuOpen = true">
        <p>MENU</p>
      </section>
      <a :href="$router.resolve({ name: 'home' }).href">
        <figure class="w-auto cursor-pointer">
          <img
            class="w-[80%] md:w-full mx-auto"
            src="../assets/images/Logo.svg"
            alt="Logo Mahha diii MERU"
          />
        </figure>
      </a>
      <section class="w-fit justify-self-end">
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

  <!-- Mobile Navigation -->
  <Teleport to="body">
    <section
      v-if="isMenuOpen"
      class="fixed flex flex-col justify-between w-screen h-full p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-default z-50"
    >
      <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <GraphicsMobileIcon />
        <GraphicsMobileIcon />
      </div>
      <nav class="w-full relative">
        <a :href="$router.resolve({ name: 'home' }).href">
          <figure class="w-auto absolute cursor-pointer left-1/2 transform -translate-x-1/2">
            <img src="../assets/images/Logo.svg" alt="Logo" class="w-full h-full" />
          </figure>
        </a>
        <CloseIcon @click="closeMenu" class="ml-auto cursor-pointer" />
      </nav>

      <ul
        class="w-full grid gap-y-2 text-center text-light-default text-[2rem] font-thin capitalize"
      >
        <li>
          <a href="/accommodation" @click="navigateWithAnimation">Accommodation</a>
        </li>
        <li>
          <a href="/experiences" @click="navigateWithAnimation">Experiences</a>
        </li>
        <li>
          <a href="/dining" @click="navigateWithAnimation">Dining</a>
        </li>
      </ul>
      <footer class="w-full font-medium text-xl text-center text-light-default">
        <h3>BOOK YOUR STAY</h3>
      </footer>
    </section>
  </Teleport>
</template>
