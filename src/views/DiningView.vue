<script setup>
import { RouterLink } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { sendWhatsAppMessage } from '@/utils/waDirect.js'

import HeroImage from '@/assets/images/Dining_Page/Dining-00-Hero.webp'
import BackgroundImage from '@/assets/images/Dining_Page/Dining-09.webp'
import Image1 from '@/assets/images/Dining_Page/Dining-07.webp'
import Image2 from '@/assets/images/Dining_Page/Dining-08.webp'
import Image3 from '@/assets/images/Dining_Page/Dining-09.webp'
import Image4 from '@/assets/images/Dining_Page/Dining-10.webp'
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
  <BaseBanner :text="bannerText" :mobile-icon="true" />

  <section class="lg:hidden">
    <SliderSwiper
      id="swiper-2"
      :type-navigation="2"
      :images="[
        'Dining_Page/Dining-01.webp',
        'Dining_Page/Dining-02.webp',
        'Dining_Page/Dining-03.webp',
        'Dining_Page/Dining-04.webp',
      ]"
      from="from-[rgba(112,87,41,0.80)]"
      via="via-[rgba(112,87,41,0.40)]"
      to="to-[rgba(112,87,41,0.40)]"
      color-icon="#45462A"
      text-color="text-light-default"
    />
  </section>

  <section
    class="mx-auto space-y-10 pb-40 w-full h-full bg-gradient-to-b from-[rgba(112,87,41,0.40)] lg:from-[#86754f] to-[#e1e1d3] bg-[#e1e1d3] via-[#e1e1d3]"
  >
    <section
      class="lg:w-[95%] mx-auto w-full flex flex-col-reverse sm:flex-row justify-between items-center"
    >
      <article class="lg:w-[30.5rem] w-full lg:pl-[7rem] 2xl:pl-[9rem]">
        <div class="sm:w-[17.5rem] 2xl:w-[23rem] sm:mx-0 w-[90%] mx-auto pt-16 lg:pt-0">
          <BaseSubTitle
            text-color="text-dark-default"
            text-size="text-2xl"
            class="mb-5 2xl:text-3xl"
          >
            Symphony of Flavors and <br />
            Refreshments
          </BaseSubTitle>
          <p
            class="w-full place-self-center text-dark-shade-2 text-xs 2xl:text-base font-thin mb-5"
          >
            Explore a diverse selection of handcrafted beverages and exquisite dishes, each
            thoughtfully created to satisfy your senses. From refreshing drinks to gourmet meals,
            indulge in flavors that reflect the essence of our culinary philosophy.
          </p>
          <RouterLink to="/experiences">
            <BaseButton text="VIEW MENU" text-color="text-dark-default" icon-color="#45462A" />
          </RouterLink>
        </div>
      </article>

      <section
        class="lg:w-[43.5rem] w-[90%] hidden lg:flex flex-row-reverse sm:flex-row justify-end gap-x-5 object-cover"
      >
        <figure
          data-scroll
          data-scroll-repeat
          class="sm:w-[20.75rem] 2xl:w-[25.5rem] z-0 w-full h-fit flex-shrink-0 overflow-hidden relative group"
        >
          <img
            src="@/assets/images/Dining_Page/Dining-01.webp"
            alt=""
            class="w-full h-full group-hover:opacity-0 transition-opacity cursor-pointer"
            data-scroll
            data-scroll-speed="-1"
          />

          <img
            src="@/assets/images/Dining_Page/Dining-02.webp"
            alt="Dining Image 3"
            class="w-full h-full object-cover absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity"
            data-scroll
            data-scroll-speed="-1"
          />
        </figure>
        <figure
          data-scroll
          data-scroll-repeat
          class="sm:w-[20.75rem] 2xl:w-[25.5rem] z-0 group1/2 w-full h-fit flex-shrink-0 overflow-hidden relative group"
        >
          <img
            src="@/assets/images/Dining_Page/Dining-03.webp"
            alt=""
            class="w-full h-full group-hover:opacity-0"
            data-scroll
            data-scroll-speed="-1"
          />

          <img
            src="@/assets/images/Dining_Page/Dining-04.webp"
            alt="Dining Image 4"
            class="w-full h-full object-cover absolute top-0 group-hover:opacity-100 opacity-0 transition-opacity"
            data-scroll
            data-scroll-speed="-1"
          />
        </figure>
      </section>
    </section>
  </section>

  <SliderSwiper
    :images="[
      'Dining_Page/Dining-05.webp',
      'Dining_Page/Dining-06.webp',
      'Dining_Page/Dining-05.webp',
      'Dining_Page/Dining-06.webp',
    ]"
    from="from-[#e1e1d3]"
    via="via[#e1e1d3]"
    to="to-[#e1e1d3]"
    color-icon="#45462A"
    text-color="text-dark-default"
  />

  <section class="mx-auto space-y-10 lg:py-52 py-36 w-full h-full bg-[#e1e1d3]">
    <div class="lg:w-[95%] mx-auto">
      <section class="w-full flex flex-col lg:flex-row justify-between items-center">
        <SlideShow :images="[Image1, Image2, Image3, Image4]" />
        <article class="lg:w-[30.5rem] 2xl:w-[35rem] w-full flex justify-center">
          <div class="lg:w-[17.5rem] 2xl:w-[23rem] w-[90%] mx-auto pt-16 lg:pt-0">
            <BaseSubTitle
              text-color="text-dark-default"
              text-size="text-2xl"
              class="mb-5 2xl:text-3xl"
            >
              Exclusive Spaces for <br />
              Unforgettable Moments
            </BaseSubTitle>
            <p
              class="w-full place-self-center text-dark-shade-3 text-xs 2xl:text-base font-thin mb-5"
            >
              Enjoy intimate gatherings and special occasions in the peaceful elegance of our
              private dining areas. Thoughtfully designed and tailored to your needs, each event
              becomes a cherished memory in a setting of quiet beauty.
            </p>
            <BaseButton
              text="MAKE RESERVATION"
              text-color="text-dark-default"
              icon-color="#45462A"
              @action="sendWhatsAppMessage"
            />
          </div>
        </article>
      </section>
    </div>
  </section>

  <section class="lg:px-10 mx-auto space-y-10 lg:pb-28 pb-20 w-full h-full bg-[#e1e1d3]">
    <section class="lg:w-full w-[90%] mx-auto">
      <BaseSubTitle
        text-color="text-dark-default"
        text-size="text-2xl"
        class="lg:mb-16 mb-8 w-[90%]"
      >
        General Information
      </BaseSubTitle>
      <section class="w-full grid lg:grid-cols-3 grid-cols-1 gap-x-[2rem] gap-y-10">
        <article
          v-for="(item, index) in generalInformation"
          :key="index"
          @click="
            () => {
              if (index === 2) sendWhatsAppMessage()
            }
          "
          class="lg:w-full p-5 border-[#CBCAB9] border hover:border-accent-default transition-colors cursor-pointer"
        >
          <component :is="item.icon" class="mb-5" />
          <h3 class="text-dark-default text-base mb-5">{{ item.title }}</h3>
          <ul>
            <li
              v-for="(content, number) in item.item"
              :key="number"
              :class="[{ 'underline underline-offset-1': index === 1 }]"
              class="text-xs 2xl:text-base font-thin text-dark-shade-2"
            >
              {{ content }}
            </li>
          </ul>
        </article>
      </section>
    </section>
  </section>

  <BaseBackground
    :img-src="BackgroundImage"
    :top-gradient="{
      fromColor: 'from-light-shade-3/0 ',
      toColor: 'to-light-shade-3/100',
    }"
    :bottom-gradient="{
      fromColor: 'from-dark-default/0 ',
      toColor: 'to-dark-default/100',
    }"
  />
</template>
