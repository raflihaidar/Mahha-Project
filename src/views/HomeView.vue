<script setup>
import { defineAsyncComponent } from 'vue'

import HeroImage from '@/assets/images/Home_Page/Home-00-Hero.webp'
import Image1 from '@/assets/images/Home_Page/Home-03.webp'
import Image2 from '@/assets/images/Home_Page/Home-06.webp'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
const BookingPopup = defineAsyncComponent(() => import('@/components/BookingPopup.vue'))
const BaseMap = defineAsyncComponent(() => import('@/components/BaseMap.vue'))
const BaseBackground = defineAsyncComponent(() => import('@/components/BaseBackground.vue'))

const bannerText = [
  'An escape for the romantics to rejuvenate self and loved ones from the overstimulation of city bustle. Immerse in the charm of the picturesque beauty of Puncak Bogor through the gentle care of our embrace. A tranquil and exquisite haven to refresh the senses.',
  'At Mahha dii Meru, time slows down, and the world fades away. Embrace the gentle rhythms of nature as you step into a haven of love, serenity, and renewal—where every moment is crafted to rekindle your spirit and deepen your connection with those you cherish.',
]

const directMap = () => {
  window.open('https://maps.app.goo.gl/zZQHKpEfwHfYNR7b6', '_blank')
}
</script>

<template>
  <BaseHero fTitle="Exquisite Escapism" lTitle="To A Picturesque Haven" :img="HeroImage" />
  <BaseBanner :text="bannerText[0]" />
  <section
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto pt-60 pb-20 w-full h-full bg-gradient-to-b from-[#705729]/75 from-20 via-[#705729]/40 via-10 to-[#e1e1d3] to-20 flex flex-col lg:flex-row justify-between lg:items-center"
  >
    <div data-scroll data-scroll-repeat class="w-full lg:w-1/2 h-full overflow-hidden">
      <figure
        data-scroll
        data-scroll-speed="-1"
        class="w-[15.125rem] md:w-[25rem] lg:w-[30.5rem] 2xl:w-[80%] h-auto parallax-section"
      >
        <img
          src="../assets/images/Home_Page/Home-01.webp"
          alt="A charming house nestled among vibrant green trees, creating a serene and picturesque natural setting."
          class="w-full h-full parallax-image"
          loading="lazy"
        />
      </figure>
    </div>
    <section
      class="w-[95%] lg:w-[40%] grid gap-y-3 sm:gap-y-5 place-items-start pt-10 lg:pt-0 lg:relative"
    >
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
        A Haven of Intimate and <br />
        Timeless Serenity
      </BaseSubTitle>
      <p
        class="text-dark-shade-2 text-xs 2xl:text-base font-thin w-full lg:max-w-[17.5rem] 2xl:max-w-[22rem]"
      >
        Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
        sanctuary designed for romance, with breathtaking views that invite you to linger longer and
        create unforgettable memories with your loved one.
      </p>
      <a :href="$router.resolve({ name: 'accommodation' }).href">
        <BaseButton
          text="EXPLORE ACCOMMODATION"
          text-color="text-dark-default"
          icon-color="#45462A"
        />
      </a>
      <!-- Gambar Kecil Kanan -->
      <div
        data-scroll
        data-scroll-repeat
        class="absolute lg:-top-96 top-20 z-50 lg:left-0 right-10 w-full max-w-[9.75rem] sm:max-w-[12rem] md:max-w-[18.75rem] lg:max-w-96 overflow-hidden"
      >
        <figure data-scroll data-scroll-speed="-1" class="w-full h-auto">
          <img
            src="../assets/images/Home_Page/Home-02.webp"
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
    gradientFromColor="from-[#e1e1d3]"
    gradientFromPercent="from-80"
    gradientToColor="to-[#e1e1d3]"
    gradientToPercent="to-20"
  />

  <BaseBackground
    :img-src="Image1"
    :top-gradient="{
      fromColor: 'from-light-shade-3/0',
      toColor: 'to-light-shade-3/100',
    }"
    :bottom-gradient="{
      fromColor: 'from-dark-default/0 ',
      toColor: 'to-dark-default/100',
    }"
  />

  <section
    class="sm:px-10 mx-auto space-y-10 md:py-60 pt-20 pb-32 w-full h-full bg-gradient-to-b from-dark-default/100 from-50 via-dark-default/80 via-40 to-[#E1E1D3]/100 to-10 flex flex-col lg:flex-row justify-between"
  >
    <article class="lg:w-1/2 w-full flex justify-center">
      <div class="lg:w-1/2 w-[90%] mx-auto">
        <BaseSubTitle
          text-color="text-light-default"
          text-size="text-2xl"
          class="2xl:text-3xl mb-5"
        >
          Whispers of Endless Joy <br />
          in Every Moment
        </BaseSubTitle>
        <p
          class="lg:w-[17.5rem] 2xl:w-[22rem] 2xl:place-self-start 2xl:text-base place-self-center text-light-shade-1 text-xs font-thin mb-5"
        >
          Whether it's a quiet walk through misty forests or a cozy evening under the stars, Mahha
          dii Meru curates gentle, heartfelt experiences that warm the spirit. Let every step,
          glance, and breath be a shared moment of calm, wrapped in the soft embrace of love and
          nature.
        </p>

        <a :href="$router.resolve({ name: 'experiences' }).href">
          <BaseButton
            text="DISCOVER EXPERIENCE"
            text-color="text-light-default"
            icon-color="#FCFCF0"
          />
        </a>
      </div>
    </article>

    <section class="lg:w-1/2 h-full flex justify-center items-end gap-x-5">
      <figure class="overflow-hidden sm:w-[17.5rem] w-28 h-fit" data-scroll data-scroll-repeat>
        <img
          src="@/assets/images/Home_Page/Home-04.webp"
          alt="A picturesque mountain landscape visible through a window, highlighting the serene beauty of the outdoors."
          class="w-full h-full"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
      <figure class="overflow-hidden sm:w-96 w-[12.5rem] h-fit" data-scroll data-scroll-repeat>
        <img
          src="@/assets/images/Home_Page/Home-05.webp"
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
    class="w-full h-full bg-gradient-to-b mix-blend-normal from-[#E1E1D3]/100 from-50 to-[#E1E1D3]/100 to-50"
  >
    <section class="w-[95%] mx-auto flex flex-col gap-y-3 sm:flex-row justify-between items-center">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        How To Get Here
      </BaseSubTitle>
      <BaseButton
        text="VIEW DIRECTIONS"
        text-color="text-dark-default"
        icon-color="#45462A"
        @action="directMap"
      />
    </section>
    <section class="w-full h-auto">
      <BaseMap />
    </section>
  </section>

  <BaseBackground
    :img-src="Image2"
    :top-gradient="{
      fromColor: 'from-light-shade-3/0 ',
      toColor: 'to-light-shade-3/100',
    }"
    :bottom-gradient="{
      fromColor: 'from-dark-default/0 ',
      toColor: 'to-dark-default/100',
    }"
  />

  <BookingPopup />
</template>
