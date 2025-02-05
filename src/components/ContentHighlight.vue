<script setup>
import { defineAsyncComponent } from 'vue'

const BaseSubTitle = defineAsyncComponent(() => import('@/BaseSubTitle'))
</script>

<template>
  <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
    A Haven of Intimate and <br />
    Timeless Serenity
  </BaseSubTitle>
  <p
    class="text-dark-shade-2 text-xs 2xl:text-base font-thin w-full lg:max-w-[17.5rem] 2xl:max-w-[22rem]"
  >
    Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a sanctuary
    designed for romance, with breathtaking views that invite you to linger longer and create
    unforgettable memories with your loved one.
  </p>
  <a :href="$router.resolve({ name: 'accommodation' }).href">
    <BaseButton text="EXPLORE ACCOMMODATION" text-color="text-dark-default" icon-color="#45462A" />
  </a>
</template>
