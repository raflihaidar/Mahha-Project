<script setup>
import HeroImage from '@/assets/images/Home_Page/Home-00-Hero.jpeg'
import Image1 from '@/assets/images/Home_Page/Home-03.jpg'
import Image2 from '@/assets/images/Home_Page/Home-06.jpg'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseSubTitle from '../components/BaseSubTitle.vue'
import BaseBackground from '../components/BaseBackground.vue'

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
    <figure class="w-[70%] sm:w-[40%]">
      <img src="../assets/images/Home_Page/Home-01.jpg" alt="" class="w-full" />
    </figure>
    <section class="w-[95%] sm:w-[40%] grid gap-y-5 place-items-start sm:relative">
      <BaseSubTitle text-color="text-dark-default" text-size="text-xl">
        A Haven of Intimate and <br />
        Timeless Serenity
      </BaseSubTitle>
      <p class="text-dark-shade-2 sm:text-sm text-md w-full sm:w-[60%] text-justify">
        Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
        sanctuary designed for romance, with breathtaking views that invite you to linger longer and
        create unforgettable memories with your loved one.
      </p>
      <BaseButton text="Explore Accomodation" icon-color="#45462A" font-size="text-xl" />
      <figure class="absolute sm:-top-96 top-20 sm:left-0 right-10 w-40 sm:w-[384px]">
        <img src="../assets/images/Home_Page/Home-02.jpg" alt="" class="w-full" />
      </figure>
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
    class="sm:px-10 mx-auto space-y-10 py-60 w-full h-full bg-gradient-to-b from-dark-default/100 from-50 via-dark-default/80 via-40 to-dark-default/10 to-10 flex flex-col sm:flex-row justify-between"
  >
    <article class="sm:w-1/2 w-full flex justify-center">
      <div class="sm:w-1/2 w-[90%] mx-auto">
        <BaseSubTitle text-color="text-light-default" text-size="text-xl" class="mb-5">
          Whispers of Endless Joy <br />
          in Every Moment
        </BaseSubTitle>
        <p class="w-full place-self-center text-light-shade-1 text-sm text-justify mb-5">
          Whether it's a quiet walk through misty forests or a cozy evening under the stars, Mahha
          dii Meru curates gentle, heartfelt experiences that warm the spirit. Let every step,
          glance, and breath be a shared moment of calm, wrapped in the soft embrace of love and
          nature.
        </p>
        <BaseButton
          text="Discover Experience"
          text-color="text-light-default"
          icon-color="#FCFCF0"
        />
      </div>
    </article>

    <figure class="w-full flex justify-center items-end gap-x-5">
      <img src="@/assets/images/Home_Page/Home-04.jpg" alt="" class="sm:w-72 w-28 h-fit" />
      <img src="@/assets/images/Home_Page/Home-05.jpg" alt="" class="sm:w-96 w-52 h-fit" />
    </figure>
  </section>

  <!-- <section></section> -->
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
