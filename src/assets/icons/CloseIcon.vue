<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#FCFCF0',
  },
  size: {
    type: String,
    default: '1rem',
  },
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="close"
  >
    <g clip-path="url(#clip0_210_2847)">
      <path
        d="M13.3176 13.8836C13.4728 14.0388 13.7283 14.0388 13.8836 13.8836C14.0388 13.7283 14.0388 13.4728 13.8836 13.3176L6.56597 6L13.8836 -1.31758C14.0388 -1.47284 14.0388 -1.72828 13.8836 -1.88355C13.7283 -2.03882 13.4728 -2.03882 13.3176 -1.88355L6 5.43403L-1.31758 -1.88355C-1.47284 -2.03882 -1.72828 -2.03882 -1.88355 -1.88355C-2.03882 -1.72828 -2.03882 -1.47284 -1.88355 -1.31758L5.43403 6L-1.88355 13.3176C-2.03882 13.4728 -2.03882 13.7283 -1.88355 13.8836C-1.72828 14.0388 -1.47284 14.0388 -1.31758 13.8836L6 6.56597L13.3176 13.8836Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_210_2847">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
