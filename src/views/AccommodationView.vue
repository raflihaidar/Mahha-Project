<script setup>
import { defineAsyncComponent } from 'vue'
import HeroImage from '@/assets/images/Accommodation_Page/Accommodation-00-Hero.webp'
import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'

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

  <BaseBanner :text="bannerText" />

  <section
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto py-48 w-full h-full bg-gradient-to-b from-[rgba(112,87,41,0.75)] to-[#e1e1d3]"
  >
    <section
      class="lg:w-[90%] w-full h-full flex flex-col lg:flex-row justify-between lg:items-center"
    >
      <figure
        class="w-full mb-10 lg:mb-0 lg:w-[43.5rem] overflow-hidden"
        data-scroll
        data-scroll-repeat
      >
        <template>
          <BaseHero fTitle="Exquisite Escapism" lTitle="To A Picturesque Haven" :img="HeroImage" />
          <BaseBanner :text="bannerText[0]" />
          <section
            class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[#705729]/75 from-20 via-[#705729]/40 via-10 to-[#705729]/20 to-20 flex flex-col lg:flex-row justify-between lg:items-center"
          >
            <div data-scroll data-scroll-repeat class="w-[70%] h-full lg:w-[40%] overflow-hidden">
              <figure class="w-full h-full" data-scroll data-scroll-speed="-1">
                <img
                  src="../assets/images/Home_Page/Home-01.webp"
                  alt="A charming house nestled among vibrant green trees, creating a serene and picturesque natural setting."
                  class="w-full h-auto"
                  loading="lazy"
                />
              </figure>
            </div>
            <section class="w-[95%] lg:w-[40%] grid gap-y-5 place-items-start lg:relative">
              <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
                A Haven of Intimate and <br />
                Timeless Serenity
              </BaseSubTitle>
              <p
                class="text-dark-shade-2 sm:text-base text-base font-thin w-full lg:w-[60%] text-justify"
              >
                Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is
                a sanctuary designed for romance, with breathtaking views that invite you to linger
                longer and create unforgettable memories with your loved one.
              </p>
              <a :href="$router.resolve({ name: 'accommodation' }).href">
                <BaseButton
                  text="EXPLORE ACCOMMODATION"
                  text-color="text-dark-default"
                  icon-color="#45462A"
                />
              </a>
              <div
                data-scroll
                data-scroll-repeat
                class="absolute lg:-top-96 md:-top-72 top-20 lg:left-0 right-10 w-40 lg:w-[384px] md:w-[300px] overflow-hidden"
              >
                <figure class="w-full h-full" data-scroll data-scroll-speed="-1">
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
            gradientFromColor="from-[#705729]/20"
            gradientFromPercent="from-80"
            gradientToColor="to-[#705729]/20"
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
            class="sm:px-10 mx-auto space-y-10 py-60 w-full h-full bg-gradient-to-b mix-blend-screen from-dark-default/100 from-50 via-dark-default/80 via-40 to-dark-default/0 to-10 flex flex-col lg:flex-row justify-between"
          >
            <article class="lg:w-1/2 w-full flex justify-center">
              <div class="lg:w-1/2 w-[90%] mx-auto">
                <BaseSubTitle text-color="text-light-default" text-size="text-2xl" class="mb-5">
                  Whispers of Endless Joy <br />
                  in Every Moment
                </BaseSubTitle>
                <p
                  class="w-full place-self-center text-light-shade-1 text-base font-thin text-justify mb-5"
                >
                  Whether it's a quiet walk through misty forests or a cozy evening under the stars,
                  Mahha dii Meru curates gentle, heartfelt experiences that warm the spirit. Let
                  every step, glance, and breath be a shared moment of calm, wrapped in the soft
                  embrace of love and nature.
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

            <section class="lg:w-1/2 flex justify-center items-end gap-x-5">
              <figure class="overflow-hidden sm:w-72 w-28 h-fit" data-scroll data-scroll-repeat>
                <img
                  src="@/assets/images/Home_Page/Home-04.webp"
                  alt="A picturesque mountain landscape visible through a window, highlighting the serene beauty of the outdoors."
                  class="w-full h-full"
                  data-scroll
                  data-scroll-speed="-1"
                  loading="lazy"
                />
              </figure>
              <figure class="overflow-hidden sm:w-96 w-52 h-fit" data-scroll data-scroll-repeat>
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
            class="w-full h-full bg-gradient-to-b mix-blend-screen from-[#E1E1D3]/0 from-50 to-[#E1E1D3]/100 to-50"
          >
            <section class="w-[95%] mx-auto flex flex-col sm:flex-row justify-between items-center">
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
        <img
          src="../assets/video/accommodation/video.png"
          alt=""
          class="w-full h-full"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
      <section class="w-full lg:w-[17.5rem]">
        <BaseSubTitle text-color="text-dark-default" text-size="sm:text-2xl" class="text-xl">
          A Haven of Intimate and <br />
          Timeless Serenity
        </BaseSubTitle>
        <p class="text-dark-shade-2 text-sm mt-5 font-thin w-full">
          Our rooms are crafted with love and care, inviting you to sink into comfort and intimacy.
          Surrounded by nature’s quiet elegance, each space is a cocoon of warmth where you and your
          loved one can rest, reconnect, and let the world drift away.
        </p>
      </section>
    </section>
  </section>

  <section class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto pt-60 w-full h-full bg-[#e1e1d3]">
    <BaseSubTitle text-color="text-dark-default" text-size="lg:text-2xl" class="text-xl">
      Details of your Suite
    </BaseSubTitle>
    <section class="w-full h-full flex flex-col lg:flex-row justify-between lg:items-center">
      <section
        class="w-full max-sm:mt-16 lg:w-1/2 h-full grid grid-cols-2 gap-x-5 gap-y-10 lg:gap-28"
      >
        <div
          class="w-full lg:px-5"
          v-for="(item, index) in suite.filter((item, index) => index < 4)"
          :key="index"
        >
          <component :is="item.icon" />
          <h3 class="text-dark-default text-base mt-5">{{ item.title }}</h3>
          <p class="text-dark-shade-3 text-sm font-thin">{{ item.description }}</p>
        </div>
      </section>
      <figure
        class="w-full lg:w-[30.5rem] max-lg:mt-16 overflow-hidden"
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
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto lg:pt-60 w-full h-full bg-[#e1e1d3] flex flex-col-reverse lg:flex-row justify-between lg:items-center"
  >
    <figure
      class="w-full lg:w-[30.5rem] max-sm:mt-16 overflow-hidden"
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
      <section class="w-full h-full mt-20 lg:mt-28 grid gap-x-5 gap-y-10 grid-cols-2 lg:gap-28">
        <div
          class="w-full lg:px-5"
          v-for="(item, index) in suite.filter((item, index) => index >= 4)"
          :key="index"
        >
          <component :is="item.icon" />
          <h3 class="text-dark-default text-base mt-5">{{ item.title }}</h3>
          <p class="text-dark-shade-3 text-sm font-thin">{{ item.description }}</p>
        </div>
      </section>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto pt-60 w-full h-full bg-[#e1e1d3] flex flex-col lg:flex-row justify-between lg:items-center"
  >
    <section class="lg:w-full pb-28">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        Full Amenities
      </BaseSubTitle>
      <section class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mt-16 w-full">
        <div v-for="(item, index) in fullAmenities" :key="index">
          <h3 class="text-dark-default text-sm mb-5">{{ item.category }}</h3>
          <ul>
            <li
              v-for="(amenity, amenityIndex) in item.amenities"
              :key="amenityIndex"
              class="text-dark-shade-3 text-sm font-thin mb-2"
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
