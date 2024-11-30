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

const emits = defineEmits(['action'])

const handleAction = () => {
  emits('action')
}
</script>

<template>
  <button @click="handleAction">
    <p
      :class="[
        { 'mb-2': icon },
        `${textColor}`,
        `sm:${fontSize}`,
        'font-normal',
        'text-sm',
        'cursor-pointer',
      ]"
    >
      {{ text }}
    </p>
    <ButtonIcon :color="iconColor" v-if="icon" />
  </button>
</template>
