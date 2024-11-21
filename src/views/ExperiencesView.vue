<script setup>
import { RouterLink } from 'vue-router'

import HeroImage from '@/assets/images/Experiences_Page/Experiences-00-Hero.jpg'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
import BaseSlider from '@/components/BaseSlider.vue'

const bannerText =
  "Whether it's a quiet walk through misty forests or a cozy evening under the stars, Mahha dii Meru curates gentle, heartfelt experiences that warm the spirit. Let every step, glance, and breath be a shared moment of calm, wrapped in the soft embrace of love and nature."

const cardContent = [
  {
    title: 'Trekking & Picnic at Waterfall',
    image: 'Experiences-03',
  },
  {
    title: 'Offroad & Picnic Afternoon Tea',
    image: 'Experiences-04',
  },
  {
    title: 'Canyoneering',
    image: 'Experiences-05',
  },
  {
    title: 'Bike Trekking',
    image: 'Experiences-06',
  },
]

const getImageUrl = (image) => {
  return new URL(`../assets/images/Experiences_Page/${image}.jpg`, import.meta.url)
}
</script>

<template>
  <BaseHero fTitle="Whispers of Endless Joy" lTitle="in Every Moment" :img="HeroImage" />
  <BaseBanner :text="bannerText" />

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[#705729]/75 from-20 via-[#705729]/40 via-10 to-[#705729]/20 to-20 flex flex-col-reverse sm:flex-row justify-between sm:items-center"
  >
    <section
      class="w-[95%] sm:w-[40%] grid gap-y-5 place-items-start mx-auto max-sm:mt-10 sm:relative"
    >
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        Rejuvenation Awaits in <br />
        Nature's Embrace
      </BaseSubTitle>
      <p class="text-dark-shade-2 sm:text-sm text-md w-full sm:w-[60%] text-justify">
        Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
        sanctuary designed for romance, with breathtaking views that invite you to linger longer and
        create unforgettable memories with your loved one.
      </p>
      <RouterLink to="/accommodation">
        <BaseButton text="MAKE RESERVATION" icon-color="#45462A" font-size="text-xl" />
      </RouterLink>
      <figure class="absolute sm:-top-96 top-20 left-5 sm:left-0 sm:right-10 w-40 sm:w-[384px]">
        <img src="../assets/images/Experiences_Page/Experiences-01.jpg" alt="" class="w-full" />
      </figure>
    </section>
    <figure class="w-[70%] sm:w-[40%] self-end">
      <img src="../assets/images/Experiences_Page/Experiences-02.jpg" alt="" class="w-full" />
    </figure>
  </section>

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto py-28 sm:py-60 w-full h-full bg-gradient-to-b from-[#705729]/20 to-[#705729]/20"
  >
    <section class="w-full text-center">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="mb-5">
        Unwind and Explore at <br class="sm:hidden" />
        Your Own Pace
      </BaseSubTitle>
      <p class="sm:w-[55%] w-full mx-auto mb-10 text-dark-shade-3 text-base">
        Immerse yourself in a variety of experiences, from peaceful nature walks to thrilling
        outdoor adventures. Whether you're seeking relaxation or excitement, our curated activities
        offer something for every mood and moment.
      </p>
    </section>
    <section
      class="w-full flex gap-x-10 overflow-x-auto snap-x snap-mandatory scroll-smooth sm:grid grid-cols-4 sm:gap-x-10 sm:overflow-x-hidden"
    >
      <article
        v-for="(item, index) in cardContent"
        :key="index"
        class="flex-shrink-0 w-64 snap-center sm:w-auto"
      >
        <img :src="getImageUrl(item.image)" alt="Judul Konten" class="w-full h-auto object-cover" />
        <section class="mt-5">
          <h2 class="text-dark-default text-base font-bold">{{ item.title }}</h2>
          <button class="text-accent-default font-bold text-sm cursor-pointer">View Details</button>
        </section>
      </article>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto sm:pt-28 pb-40 sm:py-60 w-full h-full bg-gradient-to-b from-[#705729]/20 to-[#705729]/20 flex flex-col sm:flex-row justify-between sm:items-center"
  >
    <figure class="w-[70%] sm:w-[40%]">
      <img src="../assets/images/Experiences_Page/Experiences-07.jpg" alt="" class="w-full" />
    </figure>
    <section class="w-[95%] sm:w-[40%] max-sm:pt-[200px] grid gap-y-5 place-items- sm:relative">
      <BaseSubTitle text-color="text-dark-default" text-size="text-xl">
        Moments to Remember, <br />
        Spaces to Cherish
      </BaseSubTitle>
      <p class="text-dark-shade-2 sm:text-sm text-md w-full sm:w-[60%] text-justify">
        Create lasting memories in our serene and private dining spaces, perfect for intimate
        gatherings or meaningful celebrations. Each occasion is tailored with care, ensuring a
        beautiful experience in a setting that feels uniquely yours.
      </p>
      <RouterLink to="/accommodation">
        <BaseButton text="CONTACT US" icon-color="#45462A" font-size="text-base" />
      </RouterLink>
      <figure
        class="absolute sm:-bottom-[24rem] max-sm:bottom-[30rem] sm:left-0 right-10 w-40 sm:w-[384px]"
      >
        <img src="../assets/images/Experiences_Page/Experiences-08.jpg" alt="" class="w-full" />
      </figure>
    </section>
  </section>

  <section>
    <BaseSlider
      :images="[
        'Experiences_Page/Experiences-09.jpg',
        'Experiences_Page/Experiences-010.jpg',
        'Experiences_Page/Experiences-09.jpg',
        'Experiences_Page/Experiences-010.jpg',
      ]"
    />
  </section>
</template>
