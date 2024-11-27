<script setup>
import { RouterLink } from 'vue-router'

import HeroImage from '@/assets/images/Experiences_Page/Experiences-00-Hero.jpg'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
import SliderSwiper from '../components/SliderSwiper.vue'
import BaseModal from '@/components/BaseModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
const modalData = ref({
  title: '',
  subTitle: '',
  contents: [],
})

const bannerText =
  "Whether it's a quiet walk through misty forests or a cozy evening under the stars, Mahha dii Meru curates gentle, heartfelt experiences that warm the spirit. Let every step, glance, and breath be a shared moment of calm, wrapped in the soft embrace of love and nature."

const cardContent = [
  {
    subTitle: 'Trekking & Picnic at Waterfall',
    image: 'Experiences-03',
    description:
      'People admiring a majestic waterfall in the jungle, enveloped by rich foliage and the sound of flowing water',
  },
  {
    subTitle: 'Offroad & Picnic Afternoon Tea',
    image: 'Experiences-04',
    description:
      'A convoy of four jeeps navigates a rugged dirt road, surrounded by expansive fields under a clear sky',
  },
  {
    subTitle: 'Canyoneering',
    image: 'Experiences-05',
    description:
      'Two people ski through a waterfall, highlighting the excitement and beauty of winter sports in a natural landscape.',
  },
  {
    subTitle: 'Bike',
    image: 'Experiences-06',
    description:
      'A serene sunset illuminates a cluster of tents nestled among trees in a tranquil forest setting.',
  },
]

const getImageUrl = (image) => {
  return new URL(`../assets/images/Experiences_Page/${image}.jpg`, import.meta.url)
}

const openModal = (item) => {
  modalData.value = {
    subTitle: item.subTitle,
  }
  showModal.value = true
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
      <p class="text-dark-shade-2 font-thin text-base w-full sm:w-[60%] text-justify">
        Let the quiet elegance of our rooms envelop you in warmth and comfort. Each space is a
        sanctuary designed for romance, with breathtaking views that invite you to linger longer and
        create unforgettable memories with your loved one.
      </p>
      <RouterLink to="/accommodation">
        <BaseButton text="MAKE RESERVATION" icon-color="#45462A" />
      </RouterLink>
      <figure
        class="absolute sm:-top-96 top-20 left-5 sm:left-0 sm:right-10 w-40 sm:w-[384px] overflow-hidden"
        data-scroll
        data-scroll-repeat
      >
        <img
          src="../assets/images/Experiences_Page/Experiences-01.jpg"
          data-scroll
          data-scroll-speed="-1"
          alt="A woman receiving a soothing foot massage in a tranquil spa setting, enhancing her relaxation and comfort."
          class="w-full h-full"
          loading="lazy"
        />
      </figure>
    </section>
    <figure class="w-[70%] sm:w-[40%] self-end overflow-hidden" data-scroll data-scroll-repeat>
      <img
        src="../assets/images/Experiences_Page/Experiences-02.jpg"
        alt="A woman relaxes at a spa while receiving a soothing facial mask treatment"
        class="w-full h-full"
        data-scroll
        data-scroll-speed="-1"
        loading="lazy"
      />
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
      <p class="sm:w-[55%] w-full mx-auto mb-10 text-dark-shade-3 text-base font-thin">
        Immerse yourself in a variety of experiences, from peaceful nature walks to thrilling
        outdoor adventures. Whether you're seeking relaxation or excitement, our curated activities
        offer something for every mood and moment.
      </p>
    </section>

    <section
      class="w-full flex gap-x-10 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar sm:grid grid-cols-4 sm:gap-x-10 sm:overflow-x-hidden"
    >
      <article
        v-for="(item, index) in cardContent"
        :key="index"
        class="flex-shrink-0 w-64 snap-center sm:w-auto group"
      >
        <figure class="overflow-hidden" data-scroll data-scroll-repeat>
          <img
            :src="getImageUrl(item.image)"
            :alt="item.description"
            loading="lazy"
            class="w-full h-auto object-cover group-hover:scale-110 ease-out duration-500 transition-transform"
          />
        </figure>
        <section class="mt-5">
          <h2 class="text-dark-default text-xl">{{ item.subTitle }}</h2>
          <button
            class="text-accent-default text-sm cursor-pointer group-hover:blur-[1px]"
            @click="openModal(item)"
          >
            VIEW DETAILS
          </button>
        </section>
      </article>

      <BaseModal
        :isOpen="showModal"
        @closeModal="showModal = false"
        :subTitle="modalData.subTitle"
        title="Pedal Through Nature’s Serene Trails"
        :contents="[
          'Set out on a thrilling bike trek through the lush, scenic trails of Puncak. Wind your way through verdant forests, peaceful meadows, and breathtaking vistas, as you feel the cool mountain breeze guide you along the path. Whether you’re seeking a gentle ride or an adventurous challenge, our trails offer the perfect balance of tranquility and excitement.',
          'Each turn of the trail reveals something new—hidden paths, local wildlife, and stunning viewpoints that will leave you in awe of nature’s beauty. This is more than just a bike ride; it’s an immersive journey through the heart of Puncak’s natural wonders.',
        ]"
      >
      </BaseModal>
    </section>
  </section>

  <section
    class="px-3 relative gap-y-5 sm:px-10 sm:mx-auto sm:pt-28 pb-40 sm:py-60 w-full h-full bg-gradient-to-b from-[#705729]/20 to-[#705729]/20 flex flex-col sm:flex-row justify-between sm:items-center"
  >
    <figure class="w-[70%] sm:w-[40%] overflow-hidden" data-scroll data-scroll-repeat>
      <img
        src="../assets/images/Experiences_Page/Experiences-07.jpg"
        alt="An outdoor wedding reception featuring elegantly arranged tables and chairs under a clear blue sky"
        class="w-full h-auto"
        data-scroll
        data-scroll-speed="-1"
        loading="lazy"
      />
    </figure>
    <section class="w-[95%] sm:w-[40%] max-sm:pt-[200px] grid gap-y-5 place-items- sm:relative">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
        Moments to Remember, <br />
        Spaces to Cherish
      </BaseSubTitle>
      <p class="text-dark-shade-2 font-thin text-base w-full sm:w-[60%] text-justify">
        Create lasting memories in our serene and private dining spaces, perfect for intimate
        gatherings or meaningful celebrations. Each occasion is tailored with care, ensuring a
        beautiful experience in a setting that feels uniquely yours.
      </p>
      <RouterLink to="/accommodation">
        <BaseButton text="CONTACT US" icon-color="#45462A" font-size="text-base" />
      </RouterLink>
      <figure
        class="absolute sm:-bottom-[24rem] max-sm:bottom-[30rem] sm:left-0 right-10 w-40 sm:w-[384px] overflow-hidden"
        data-scroll
        data-scroll-repeat
      >
        <img
          src="../assets/images/Experiences_Page/Experiences-08.jpg"
          alt=""
          class="w-full h-auto"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
    </section>
  </section>

  <SliderSwiper
    :images="[
      'Experiences_Page/Experiences-09.jpg',
      'Experiences_Page/Experiences-010.jpg',
      'Experiences_Page/Experiences-09.jpg',
      'Experiences_Page/Experiences-010.jpg',
    ]"
  />
</template>
