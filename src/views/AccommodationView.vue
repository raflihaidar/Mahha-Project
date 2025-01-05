<script setup>
import { defineAsyncComponent } from 'vue'
import HeroImage from '@/assets/images/Accommodation_Page/Accommodation-00-Hero.webp'
import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
import BaseButton from '../components/BaseButton.vue'

const SliderSwiper = defineAsyncComponent(() => import('@/components/SliderSwiper.vue'))

import BedIcon from '@/assets/icons/accommodation/BedIcon.vue'
import ShowerIcon from '@/assets/icons/accommodation/ShowerIcon.vue'
import SunIcon from '@/assets/icons/accommodation/SunIcon.vue'
import WifiIcon from '@/assets/icons/accommodation/WifiIcon.vue'
import GlassIcon from '@/assets/icons/accommodation/GlassIcon.vue'
import CupIcon from '@/assets/icons/accommodation/CupIcon.vue'
import TVIcon from '@/assets/icons/accommodation/TVIcon.vue'
import PlateIcon from '@/assets/icons/accommodation/PlateIcon.vue'

const bannerText =
  'Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a sanctuary designed for romance with breathtaking views that invite you to linger longer and create unforgettable memories with your loved one.'

const suite = [
  {
    title: 'King-Sized Bed',
    description: 'Enjoy a restful night in a king-sized bed with premium linens for comfort.',
    icon: BedIcon,
  },
  {
    title: 'Private Balcony',
    description: 'Step onto your private balcony and enjoy serene views of nature.',
    icon: SunIcon,
  },
  {
    title: 'En-Suite Bathroom',
    description: 'Relax in a modern en-suite bathroom with a soaking tub and rainfall shower.',
    icon: ShowerIcon,
  },
  {
    title: 'Complimentary Wi-Fi',
    description: 'Stay connected with complimentary high-speed Wi-Fi available throughout.',
    icon: WifiIcon,
  },
  {
    title: 'Mini Bar',
    description:
      'A well-stocked mini bar with a selection of beverages and snacks for your enjoyment.',
    icon: GlassIcon,
  },
  {
    title: 'Coffee and Tea Maker',
    description: 'Start your mornings with a freshly brewed coffee or tea from your in-room maker.',
    icon: CupIcon,
  },
  {
    title: 'Smart TV',
    description: 'Unwind with your favorite shows and movies on a high-definition smart TV.',
    icon: TVIcon,
  },
  {
    title: 'Room Service',
    description: 'Enjoy 24-hour room service with delicious dishes delivered to your door.',
    icon: PlateIcon,
  },
]

const fullAmenities = [
  {
    category: 'Room Comforts',
    amenities: [
      'King-Sized Bed',
      'Private Balcony',
      'En-Suite Bathroom',
      'Air Conditioning',
      'Smart TV',
    ],
  },
  {
    category: 'Wellness & Relaxation',
    amenities: [
      'In-Room Jacuzzi',
      'Luxury Toiletries',
      'Bathrobes and Slippers',
      'Rainfall Shower',
      "Couple's Spa Packages",
    ],
  },
  {
    category: 'Dining & Refreshments',
    amenities: [
      'Mini Bar',
      'Coffee and Tea Maker',
      '24-Hour Room Service',
      'In-Room Dining',
      'Complimentary Bottled Water',
    ],
  },
  {
    category: 'Outdoor & Nature',
    amenities: [
      'Private Garden Access',
      'Outdoor Lounge Chairs',
      'Nature Trails',
      'Picnic Area',
      'Outdoor Firepit',
    ],
  },
  {
    category: 'Tech & Connectivity',
    amenities: [
      'Complimentary Wi-Fi',
      'USB Charging Ports',
      'Bluetooth Speaker',
      'International Power Outlets',
      'Smart Lighting System',
    ],
  },
  {
    category: 'Guest Services',
    amenities: [
      'Daily Housekeeping',
      'Laundry Service',
      'Airport Shuttle',
      'Concierge Service',
      'Luggage Storage',
    ],
  },
]
</script>

<template>
  <BaseHero :img="HeroImage" fTitle="A Haven of Intimate" lTitle="and Timeless Serenity" />

  <BaseBanner :text="bannerText" :mobile-icon="true" />

  <section
    class="px-3 pb-28 relative gap-y-5 lg:px-10 lg:pb-52 lg:mx-auto pt-20 w-full h-full bg-gradient-to-b from-[rgba(112,87,41,0.85)] max-sm:from-10% to-[#e1e1d3]"
  >
    <section
      class="lg:w-[90%] w-full h-full flex flex-col lg:flex-row gap-x-36 justify-between lg:items-center"
    >
      <figure
        class="w-full mb-10 lg:mb-0 lg:w-[43.5rem] 2xl:w-[50rem] overflow-hidden"
        data-scroll
        data-scroll-repeat
      >
        <img
          src="../assets/video/accommodation/video.png"
          alt=""
          class="w-full h-full"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>

      <section class="w-full lg:w-[17.5rem] 2xl:w-[30%]">
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
          A Haven of Intimate and <br />
          Timeless Serenity
        </BaseSubTitle>
        <p class="text-dark-shade-2 text-xs 2xl:text-base mt-5 font-thin w-full 2xl:max-w-[23rem]">
          Our rooms are crafted with love and care, inviting you to sink into comfort and intimacy.
          Surrounded by nature’s quiet elegance, each space is a cocoon of warmth where you and your
          loved one can rest, reconnect, and let the world drift away.
        </p>
      </section>
    </section>
  </section>

  <section class="px-3 relative gap-y-5 lg:mx-auto lg:px-10 w-full h-full bg-[#e1e1d3]">
    <BaseSubTitle text-color="text-dark-default" text-size="lg:text-2xl" class="text-xl">
      Details of your Suite
    </BaseSubTitle>
    <section
      class="lg:w-full w-full h-full flex flex-col lg:flex-row justify-between lg:items-center"
    >
      <section
        class="w-full max-sm:mt-16 lg:w-1/2 h-full grid grid-cols-2 gap-x-5 gap-y-10 lg:gap-28"
      >
        <div
          class="w-full lg:px-5"
          v-for="(item, index) in suite.filter((item, index) => index < 4)"
          :key="index"
        >
          <component :is="item.icon" />
          <h3 class="text-dark-default text-base text-[14px] 2xl:text-xl mt-5 pb-3">
            {{ item.title }}
          </h3>
          <p class="text-dark-shade-3 text-xs 2xl:text-base font-thin">{{ item.description }}</p>
        </div>
      </section>
      <figure
        class="w-full lg:w-[30.5rem] 2xl:w-[35rem] max-lg:mt-16 overflow-hidden border"
        data-scroll
        data-scroll-repeat
      >
        <img
          src="../assets/images/Accommodation_Page/Accommodation-01.webp"
          alt="A serene hot tub situated on a wooden deck, surrounded by lush jungle foliage and vibrant greenery"
          class="w-full h-full"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto lg:pt-32 pb-24 w-full h-full bg-[#e1e1d3] flex flex-col-reverse lg:flex-row justify-between lg:items-center"
  >
    <figure
      class="w-full lg:w-[30.5rem] 2xl:w-[35rem] max-sm:mt-16 overflow-hidden"
      data-scroll
      data-scroll-repeat
    >
      <img
        src="../assets/images/Accommodation_Page/Accommodation-02.webp"
        alt=" A bathroom featuring a sink and a mirror, showcasing a clean and modern design."
        class="w-full h-auto"
        data-scroll
        data-scroll-speed="-1"
        loading="lazy"
      />
    </figure>
    <section class="lg:w-[50%] w-full">
      <section
        class="w-[95%] lgw-full h-full mt-20 lg:mt-28 grid gap-x-5 gap-y-10 grid-cols-2 lg:gap-28"
      >
        <div
          class="w-full lg:px-5"
          v-for="(item, index) in suite.filter((item, index) => index >= 4)"
          :key="index"
        >
          <component :is="item.icon" />
          <h3 class="text-dark-default text-base text-[14px] 2xl:text-xl mt-5 pb-3">
            {{ item.title }}
          </h3>
          <p class="text-dark-shade-3 text-xs 2xl:text-base font-thin">{{ item.description }}</p>
        </div>
      </section>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto pt-24 pb-8 w-full h-full bg-[#e1e1d3] flex flex-col lg:flex-row justify-between lg:items-center"
  >
    <section class="lg:w-full pb-28">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        Full Amenities
      </BaseSubTitle>
      <section class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mt-16 w-full">
        <div v-for="(item, index) in fullAmenities" :key="index">
          <h3 class="text-dark-default text-xs 2xl:text-base mb-5">{{ item.category }}</h3>
          <ul>
            <li
              v-for="(amenity, amenityIndex) in item.amenities"
              :key="amenityIndex"
              class="text-dark-shade-3 text-xs 2xl:text-base font-thin mb-2"
            >
              {{ amenity }}
            </li>
          </ul>
        </div>
      </section>
    </section>
  </section>

  <SliderSwiper
    :images="[
      'Accommodation_Page/Accommodation-04.webp',
      'Accommodation_Page/Accommodation-00-Hero.webp',
      'Accommodation_Page/Accommodation-04.webp',
      'Accommodation_Page/Accommodation-00-Hero.webp',
    ]"
    from="from-[#e1e1d3]"
    to="to-dark-default/100"
    color-icon="#fff"
  />
</template>
