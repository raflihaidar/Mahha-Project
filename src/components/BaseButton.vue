<script setup>
import ButtonIcon from '@/assets/icons/ButtonIcon.vue'

const props = defineProps({
  text: String,
  textColor: String,
  fontSize: String,
  iconColor: {
    type: String,
    default: '#FCFCF0',
  },
  icon: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <button>
    <p :class="[{ 'mb-2': icon }, `${textColor}`, `${fontSize}`]">{{ text }}</p>
    <ButtonIcon :color="iconColor" v-if="icon" />
  </button>
</template>
