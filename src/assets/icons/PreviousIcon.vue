<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#fff',
  },
})
</script>

<template>
  <svg
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.23843 7.82197C3.14155 7.91885 3.14155 8.07822 3.23843 8.1751L9.98843 14.9251C10.0853 15.022 10.2447 15.022 10.3416 14.9251C10.4384 14.8282 10.4384 14.6688 10.3416 14.572L3.76968 8.0001L10.3447 1.42822C10.4416 1.33135 10.4416 1.17197 10.3447 1.0751C10.2478 0.978223 10.0884 0.978223 9.99155 1.0751L3.24155 7.8251L3.23843 7.82197Z"
      :fill="color"
    />
  </svg>
</template>
