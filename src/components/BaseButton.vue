<script setup>
import ButtonIcon from '@/assets/icons/ButtonIcon.vue'

const props = defineProps({
  text: String,
  textColor: String,
  fontSize: String,
  fontWeight: {
    type: String,
    default: 'font-normal',
  },
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
  <button @click="handleAction" class="group">
    <p
      :class="[
        { 'mb-2': icon },
        `${textColor}`,
        `sm:${fontSize}`,
        `${fontWeight}`,
        'text-xs',
        'cursor-pointer',
      ]"
    >
      {{ text }}
    </p>
    <ButtonIcon
      :color="iconColor"
      v-if="icon"
      class="group-hover:translate-y-1 transition-transform"
    />
  </button>
</template>
