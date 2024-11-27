<script setup>
import { RouterLink } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import HeroImage from '@/assets/images/Home_Page/Home-00-Hero.jpg'
import Image1 from '@/assets/images/Home_Page/Home-03.jpg'
import Image2 from '@/assets/images/Home_Page/Home-06.jpg'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'

const BaseMap = defineAsyncComponent(() => import('@/components/BaseMap.vue'))
const BaseBackground = defineAsyncComponent(() => import('@/components/BaseBackground.vue'))

const bannerText = [
  'An escape for the romantics to rejuvenate self and loved ones from the overstimulation of city bustle. Immerse in the charm of the picturesque beauty of Puncak Bogor through the gentle care of our embrace. A tranquil and exquisite haven to refresh the senses.',
  'At Mahha dii Meru, time slows down, and the world fades away. Embrace the gentle rhythms of nature as you step into a haven of love, serenity, and renewal—where every moment is crafted to rekindle your spirit and deepen your connection with those you cherish.',
]
</script>

<template>
  <BaseHero fTitle="Exquisite Escapism" lTitle="To A Picturesque Haven" :img="HeroImage" />
  <BaseBanner :text="bannerText[0]" />
  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[#705729]/75 from-20 via-[#705729]/40 via-10 to-[#705729]/20 to-20 flex flex-col sm:flex-row justify-between sm:items-center"
  >
    <div data-scroll data-scroll-repeat class="w-[70%] h-full sm:w-[40%] overflow-hidden">
      <figure class="w-full h-full" data-scroll data-scroll-speed="-1">
        <img
          src="../assets/images/Home_Page/Home-01.jpg"
          alt="A charming house nestled among vibrant green trees, creating a serene and picturesque natural setting."
          class="w-full h-auto"
          loading="lazy"
        />
      </figure>
    </div>
    <section class="w-[95%] sm:w-[40%] grid gap-y-5 place-items-start sm:relative">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        A Haven of Intimate and <br />
        Timeless Serenity
      </BaseSubTitle>
      <p class="text-dark-shade-2 sm:text-base text-base font-thin w-full sm:w-[60%] text-justify">
        Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
        sanctuary designed for romance, with breathtaking views that invite you to linger longer and
        create unforgettable memories with your loved one.
      </p>
      <RouterLink to="/accommodation">
        <BaseButton
          text="EXPLORE ACCOMMODATION"
          text-color="text-dark-default"
          icon-color="#45462A"
        />
      </RouterLink>
      <div
        data-scroll
        data-scroll-repeat
        class="absolute sm:-top-96 top-20 sm:left-0 right-10 w-40 sm:w-[384px] overflow-hidden"
      >
        <figure class="w-full h-full" data-scroll data-scroll-speed="-1">
          <img
            src="../assets/images/Home_Page/Home-02.jpg"
            alt=" A woman sits peacefully on a circular patio, embraced by abundant greenery and lush plants, offering a calming environment."
            class="w-full h-full"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  </section>

  <BaseBanner
    :text="bannerText[1]"
    textColor="text-dark-default"
    gradientFromColor="from-[#705729]/20"
    gradientFromPercent="from-80"
    gradientToColor="to-[#705729]/20"
    gradientToPercent="to-20"
  />

  <BaseBackground
    :img-src="Image1"
    :top-gradient="{
      fromColor: 'from-light-shade-2/20',
      toColor: 'to-light-shade-2/0',
    }"
    :bottom-gradient="{
      fromColor: 'from-dark-default/0 ',
      toColor: 'to-dark-default/100',
    }"
  />

  <section
    class="sm:px-10 mx-auto space-y-10 py-60 w-full h-full bg-gradient-to-b mix-blend-screen from-dark-default/100 from-50 via-dark-default/80 via-40 to-dark-default/0 to-10 flex flex-col sm:flex-row justify-between"
  >
    <article class="sm:w-1/2 w-full flex justify-center">
      <div class="sm:w-1/2 w-[90%] mx-auto">
        <BaseSubTitle text-color="text-light-default" text-size="text-2xl" class="mb-5">
          Whispers of Endless Joy <br />
          in Every Moment
        </BaseSubTitle>
        <p
          class="w-full place-self-center text-light-shade-1 text-base font-thin text-justify mb-5"
        >
          Whether it's a quiet walk through misty forests or a cozy evening under the stars, Mahha
          dii Meru curates gentle, heartfelt experiences that warm the spirit. Let every step,
          glance, and breath be a shared moment of calm, wrapped in the soft embrace of love and
          nature.
        </p>
        <RouterLink to="/experiences">
          <BaseButton
            text="DISCOVER EXPERIENCE"
            text-color="text-light-default"
            icon-color="#FCFCF0"
          />
        </RouterLink>
      </div>
    </article>

    <section class="w-full flex justify-center items-end gap-x-5">
      <figure class="overflow-hidden sm:w-72 w-28 h-fit" data-scroll data-scroll-repeat>
        <img
          src="@/assets/images/Home_Page/Home-04.jpg"
          alt="A picturesque mountain landscape visible through a window, highlighting the serene beauty of the outdoors."
          class="w-full h-full"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
      <figure class="overflow-hidden sm:w-96 w-52 h-fit" data-scroll data-scroll-repeat>
        <img
          src="@/assets/images/Home_Page/Home-05.jpg"
          alt="Aerial view of a lush jungle resort, showcasing vibrant greenery and elegant structures nestled among the trees."
          class="w-full h-full"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
    </section>
  </section>

  <section
    class="w-full h-full bg-gradient-to-b mix-blend-screen from-[#E1E1D3]/0 from-50 to-[#E1E1D3]/100 to-50"
  >
    <section class="w-[95%] mx-auto flex justify-between items-center">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        How To Get Here
      </BaseSubTitle>
      <BaseButton text="VIEW DIRECTIONS" text-color="text-dark-default" icon-color="#45462A" />
    </section>
    <section class="w-full h-auto">
      <BaseMap />
    </section>
  </section>

  <BaseBackground
    :img-src="Image2"
    :top-gradient="{
      fromColor: 'from-light-default/0 ',
      toColor: 'to-light-default/0',
    }"
    :bottom-gradient="{
      fromColor: 'from-dark-default/0 ',
      toColor: 'to-dark-default/100',
    }"
  />
</template>
