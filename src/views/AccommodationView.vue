<script setup>
import HeroImage from '@/assets/images/Accommodation_Page/Accommodation-00-Hero.jpg'
import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
import BaseSlider from '@/components/BaseSlider.vue'

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
    description:
      'A well-stocked mini bar with a selection of beverages and snacks for your enjoyment.',
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
  <BaseHero :img="HeroImage" fTitle="A Haven of Intimate " lTitle="and Timeless Serenity" />
  <BaseBanner :text="bannerText" />
  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[#705729]/75 from-20 via-[#705729]/40 via-10 to-[#705729]/20 to-20 flex flex-col sm:flex-row justify-between sm:items-center"
  >
    <figure class="w-full mb-10 sm:mb-0 sm:w-1/2">
      <img src="../assets/video/accommodation/video.png" alt="" class="w-full" />
    </figure>
    <section class="sm:w-[30%]">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        A Haven of Intimate and <br />
        Timeless Serenity
      </BaseSubTitle>
      <p class="text-dark-shade-2 sm:text-sm mt-5 text-md w-full sm:w-[60%] text-justify">
        Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
        sanctuary designed for romance, with breathtaking views that invite you to linger longer and
        create unforgettable memories with your loved one.
      </p>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[#705729]/20 from-20 to-[#705729]/20 to-20 flex flex-col sm:flex-row justify-between sm:items-start"
  >
    <section class="w-full sm:w-[50%]">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        Details of your Suite
      </BaseSubTitle>
      <section class="w-full h-full mt-28 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-28">
        <div
          class="w-full sm:px-5"
          v-for="(item, index) in suite.filter((item, index) => index < 4)"
        >
          <component :is="item.icon" />
          <h3 class="text-dark-default text-lg sm:text-xl font-bold mt-5">{{ item.title }}</h3>
          <p class="text-dark-shade-3 text-sm sm:text-base">{{ item.description }}</p>
        </div>
      </section>
    </section>
    <figure class="w-full sm:w-[40%] max-sm:mt-16">
      <img src="../assets/images/Accommodation_Page/Accommodation-01.jpg" alt="" class="w-full" />
    </figure>
  </section>

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto sm:pt-60 w-full h-full bg-gradient-to-b from-[#705729]/20 from-20 to-[#705729]/20 to-20 flex flex-col-reverse sm:flex-row justify-between sm:items-start"
  >
    <figure class="w-full sm:w-[40%] max-sm:mt-16">
      <img src="../assets/images/Accommodation_Page/Accommodation-02.jpg" alt="" class="w-full" />
    </figure>
    <section class="sm:w-[50%] w-full">
      <section class="w-full h-full mt-20 sm:mt-28 grid gap-x-5 gap-y-10 grid-cols-2 sm:gap-28">
        <div
          class="w-full sm:px-5"
          v-for="(item, index) in suite.filter((item, index) => index >= 4)"
        >
          <component :is="item.icon" />
          <h3 class="text-dark-default text-lg font-bold mt-5">{{ item.title }}</h3>
          <p class="text-dark-shade-3 text-sm sm:text-base font-normal">{{ item.description }}</p>
        </div>
      </section>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[#705729]/20 from-20 to-[#705729]/20 to-20 flex flex-col sm:flex-row justify-between sm:items-center"
  >
    <section class="sm:w-full pb-28">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        Full Amenities
      </BaseSubTitle>
      <section class="grid sm:grid-cols-6 grid-cols-2 gap-x-5 gap-y-10 mt-16">
        <div v-for="(item, index) in fullAmenities" :key="index">
          <h3 class="text-dark-default font-bold mb-5">{{ item.category }}</h3>
          <ul>
            <li
              v-for="(amenity, amenityIndex) in item.amenities"
              :key="amenityIndex"
              class="text-dark-shade-3 text-sm sm:text-base font-normal mb-2"
            >
              {{ amenity }}
            </li>
          </ul>
        </div>
      </section>
    </section>
  </section>

  <section>
    <BaseSlider
      :images="[
        'Accommodation_Page/Accommodation-04.jpg',
        'Accommodation_Page/Accommodation-00-Hero.jpg',
        'Accommodation_Page/Accommodation-04.jpg',
        'Accommodation_Page/Accommodation-00-Hero.jpg',
      ]"
    />
  </section>
</template>
