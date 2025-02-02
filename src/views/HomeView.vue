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
  <BaseHero
    fTitle="Exquisite Escapism"
    lTitle="To A Picturesque Haven"
    :img="HeroImage"
    overlay-opacity="0.25"
  />
  <BaseBanner :text="bannerText[0]" :mobile-icon="true" />
  <section
    class="px-3 lg:px-0 pt-40 max-sm:pt-56 pb-28 relative gap-y-5 w-full h-full bg-gradient-to-b from-[#86754f] from-90 to-[#e1e1d3] to-10"
  >
    <div class="w-[95%] mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
      <div data-scroll data-scroll-repeat class="w-full lg:w-1/2 h-full overflow-hidden">
        <figure
          data-scroll
          data-scroll-speed="-1"
          class="w-[15.125rem] md:w-[25rem] lg:w-[30.5rem] 2xl:w-[80%] h-auto parallax-section will-change-transform"
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
        class="w-[95%] lg:w-[40%] grid gap-y-3 sm:gap-y-5 place-items-start pt-10 lg:pt-20 2xl:pt-48 lg:relative"
      >
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
          A Haven of Intimate and <br />
          Timeless Serenity
        </BaseSubTitle>
        <p
          class="text-dark-shade-2 text-xs 2xl:text-base font-thin w-full lg:max-w-[17.5rem] 2xl:max-w-[22rem]"
        >
          Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
          sanctuary designed for romance, with breathtaking views that invite you to linger longer
          and create unforgettable memories with your loved one.
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
          class="absolute lg:-top-72 top-20 z-50 lg:left-0 right-10 w-[9.75rem] sm:w-[12rem] md:w-[18.75rem] lg:w-96 2xl:w-[29rem] overflow-hidden"
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
    </div>
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
    class="mx-auto lg:pt-20 lg:pb-28 pt-20 pb-32 w-full h-full bg-gradient-to-b from-dark-default/100 from-30 to-[#E1E1D3]/100 to-70"
  >
    <div class="w-[95%] mx-auto flex flex-col lg:flex-row justify-between">
      <article class="w-full">
        <div class="w-[90vw] mx-auto lg:w-full lg:pl-[6.5rem] 2xl:pl-[9rem]">
          <BaseSubTitle
            text-color="text-light-default"
            text-size="text-2xl"
            class="2xl:text-3xl mb-5"
          >
            Whispers of Endless Joy <br />
            in Every Moment
          </BaseSubTitle>
          <p
            class="lg:w-[17.5rem] 2xl:w-[23rem] 2xl:place-self-start 2xl:text-base text-light-shade-1 text-xs font-thin mb-5"
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

      <section
        class="w-[90vw] max-sm:mx-auto max-sm:mt-16 h-full flex lg:justify-center items-end gap-x-5"
      >
        <figure
          class="overflow-hidden lg:w-[17.5rem] 2xl:w-[24rem] w-28 h-fit"
          data-scroll
          data-scroll-repeat
        >
          <img
            src="@/assets/images/Home_Page/Home-04.webp"
            alt="A picturesque mountain landscape visible through a window, highlighting the serene beauty of the outdoors."
            class="w-full h-full"
            data-scroll
            data-scroll-speed="-1"
            loading="lazy"
          />
        </figure>
        <figure
          class="overflow-hidden lg:w-96 2xl:w-[27rem] w-[12.5rem] h-fit"
          data-scroll
          data-scroll-repeat
        >
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
    </div>
  </section>

  <section class="w-full h-full mix-blend-normal bg-[#e1e1d3] -mb-[1px] z-50">
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
      fromColor: 'from-[#e1e1d3]/0 ',
      toColor: 'to-[#e1e1d3]/100',
    }"
    :bottom-gradient="{
      fromColor: 'from-dark-default/0 ',
      toColor: 'to-dark-default/100',
    }"
  />

  <BookingPopup />
</template>
