<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'
import BaseCalendar from './BaseCalendar.vue'
import CloseIcon from '../assets/icons/CloseIcon.vue'

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

  // You can now use currentScrollPosition.value to check scroll position
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
      <ul class="cursor-pointer hidden md:block text-xs 2xl:text-base font-thin">
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
      <a href="/" @click="navigateWithAnimation">
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
</template>
