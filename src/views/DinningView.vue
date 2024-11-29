<script setup>
import { RouterLink } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import HeroImage from '@/assets/images/Dining_Page/Dining-00-Hero.jpg'
import BackgroundImage from '@/assets/images/Dining_Page/Dining-09.jpg'
import Image1 from '@/assets/images/Dining_Page/Dining-07.jpg'
import Image2 from '@/assets/images/Dining_Page/Dining-08.jpg'
import Image3 from '@/assets/images/Dining_Page/Dining-09.jpg'
import Image4 from '@/assets/images/Dining_Page/Dining-10.jpg'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
import SlideShow from '@/components/SlideShow.vue'
import BookIcon from '@/assets/icons/dinning/BookIcon.vue'
import ClockIcon from '@/assets/icons/dinning/ClockIcon.vue'
import PlateIcon from '@/assets/icons/accommodation/PlateIcon.vue'

const SliderSwiper = defineAsyncComponent(() => import('@/components/SliderSwiper.vue'))
const BaseBackground = defineAsyncComponent(() => import('@/components/BaseBackground.vue'))

const bannerText =
  'Indulge in a dining experience that blends fresh, seasonal ingredients with the tranquil beauty of nature. From local delicacies to international favorites, every dish is thoughtfully prepared to create a moment of pure culinary delight, set against the serene backdrop of Puncak.'

const generalInformation = [
  {
    title: 'Opening Hours',
    item: [
      'Breakfast 6:30 AM - 10:30 AM',
      ' Lunch 12:00 PM - 6:00 PM',
      ' Dinner 6:00 PM - 11:00 PM',
    ],
    icon: ClockIcon,
  },
  {
    title: 'Menu',
    item: ['Foods Menu', ' Beverages Menu', 'Desserts Menu'],
    icon: BookIcon,
  },
  {
    title: 'Book Your Table',
    item: [
      'Reserve your table to experience an unforgettable dining journey, where nature’s elegance meets exceptional culinary artistry in every dish.',
    ],
    icon: PlateIcon,
  },
]
</script>

<template>
  <BaseHero fTitle="Culinary Escape in " lTitle="the Mountain Air" :img="HeroImage" />
  <BaseBanner :text="bannerText" />

  <section
    class="sm:px-10 mx-auto space-y-10 sm:py-60 max-sm:pb-36 w-full h-full bg-gradient-to-b from-[#705729]/75 from-20 via-[#705729]/40 via-10 to-[#705729]/20 to-20 flex flex-col-reverse sm:flex-row justify-center items-center">
    <article class="sm:w-[45%] w-full flex justify-start">
      <div class="sm:w-1/2 w-[90%] mx-auto pt-5 sm:pt-10">
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="mb-5">
          Symphony of Flavors and <br />
          Refreshments
        </BaseSubTitle>
        <p class="w-full place-self-center text-dark-shade-2 text-base font-thin text-justify mb-5">
          Explore a diverse selection of handcrafted beverages and exquisite dishes, each
          thoughtfully created to satisfy your senses. From refreshing drinks to gourmet meals,
          indulge in flavors that reflect the essence of our culinary philosophy.
        </p>
        <RouterLink to="/experiences">
          <BaseButton text="VIEW MENU" text-color="text-dark-default" icon-color="#45462A" />
        </RouterLink>
      </div>
    </article>

    <section class="sm:w-[50%] w-[90%] flex flex-row-reverse sm:flex-row justify-end gap-x-5 object-cover">
      <figure data-scroll data-scroll-repeat
        class="sm:w-1/2 z-0 w-full h-fit flex-shrink-0 overflow-hidden relative group">
        <img src="@/assets/images/Dining_Page/Dining-01.jpg" alt=""
          class="w-full h-full group-hover:opacity-0 transition-opacity cursor-pointer" data-scroll
          data-scroll-speed="-1" />

        <img src="@/assets/images/Dining_Page/Dining-02.jpg" alt="Dining Image 3"
          class="w-full h-full object-cover absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </figure>
      <figure data-scroll data-scroll-repeat class="sm:w-1/2 w-full h-fit flex-shrink-0 overflow-hidden relative group">
        <img src="@/assets/images/Dining_Page/Dining-03.jpg" alt="" class="w-full h-full group-hover:opacity-0"
          data-scroll data-scroll-speed="-1" />

        <img src="@/assets/images/Dining_Page/Dining-04.jpg" alt="Dining Image 4"
          class="w-full h-full object-cover absolute top-0 group-hover:opacity-100 opacity-0 transition-opacity" />
      </figure>
    </section>
  </section>

  <SliderSwiper :images="[
    'Dining_Page/Dining-06.jpg',
    'Dining_Page/Dining-07.jpg',
    'Dining_Page/Dining-06.jpg',
    'Dining_Page/Dining-07.jpg',
  ]" via="via-[#705729]/20" to="to-[#705729]/20" color-icon="#45462A" text-color="text-dark-default" />

  <section
    class="sm:px-10 mx-auto space-y-10 sm:py-60 py-36 w-full h-full bg-gradient-to-b from-[#705729]/20 to-[#705729]/20 flex flex-col sm:flex-row justify-between items-center">
    <SlideShow :images="[Image1, Image2, Image3, Image4]" />
    <article class="sm:w-1/2 w-full flex justify-center">
      <div class="sm:w-1/2 w-[90%] mx-auto">
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="mb-5">
          Exclusive Spaces for <br />
          Unforgettable Moments
        </BaseSubTitle>
        <p class="w-full place-self-center text-dark-shade-3 text-base font-thin text-justify mb-5">
          Enjoy intimate gatherings and special occasions in the peaceful elegance of our private
          dining areas. Thoughtfully designed and tailored to your needs, each event becomes a
          cherished memory in a setting of quiet beauty.
        </p>
        <RouterLink to="/experiences">
          <BaseButton text="MAKE RESERVATION" text-color="text-dark-default" icon-color="#45462A" />
        </RouterLink>
      </div>
    </article>
  </section>

  <section class="sm:px-10 mx-auto space-y-10 pb-60 w-full h-full bg-gradient-to-b from-[#705729]/20 to-[#705729]/20">
    <section class="sm:w-full w-[90%] mx-auto">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="mb-5 w-[90%]">
        General Information
      </BaseSubTitle>
      <section class="w-full grid sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-10">
        <article v-for="(item, index) in generalInformation" :key="index"
          class="sm:w-full p-5 border-[#CBCAB9] border hover:border-accent-default transition-colors cursor-pointer">
          <component :is="item.icon" class="mb-5" />
          <h3 class="text-dark-default text-base mb-5">{{ item.title }}</h3>
          <ul>
            <li v-for="(content, number) in item.item" :key="number"
              :class="[{ 'underline underline-offset-1': index === 1 }]" class="text-sm font-thin text-dark-shade-2">
              {{ content }}
            </li>
          </ul>
        </article>
      </section>
    </section>
  </section>

  <BaseBackground :img-src="BackgroundImage" :top-gradient="{
    fromColor: 'from-light-shade-3/0 ',
    toColor: 'to-light-shade-3/100',
  }" :bottom-gradient="{
    fromColor: 'from-dark-default/0 ',
    toColor: 'to-dark-default/100',
  }" />
</template>
