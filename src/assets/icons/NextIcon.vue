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
      d="M12.0947 7.82197C12.1916 7.91885 12.1916 8.07822 12.0947 8.1751L5.34468 14.9251C5.2478 15.022 5.08843 15.022 4.99155 14.9251C4.89468 14.8282 4.89468 14.6688 4.99155 14.572L11.5634 8.0001L4.98843 1.42822C4.89155 1.33135 4.89155 1.17197 4.98843 1.0751C5.0853 0.978223 5.24468 0.978223 5.34155 1.0751L12.0916 7.8251L12.0947 7.82197Z"
      :fill="color"
    />
  </svg>
</template>
