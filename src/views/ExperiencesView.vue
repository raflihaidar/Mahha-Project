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
import { sendWhatsAppMessage, moreInfo } from '@/utils/waDirect.js'

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
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto pt-60 w-full h-full bg-gradient-to-b from-[rgba(112,87,41,0.75)] to-[#e1e1d3]"
  >
    <section
      class="lg:w-[90%] w-full flex flex-col-reverse ml-auto lg:flex-row justify-between lg:items-center"
    >
      <section
        class="w-[95%] lg:w-[17.5rem] grid gap-y-5 place-items-start max-sm:mx-auto max-lg:mt-10 lg:relative"
      >
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
          Rejuvenation Awaits in <br />
          Nature's Embrace
        </BaseSubTitle>
        <p class="text-dark-shade-2 font-thin text-xs w-full">
          Experience deep relaxation at our serene spa, where personalized treatments are designed
          to soothe the body and calm the mind. Surrounded by nature, let our expert therapists
          guide you into a peaceful state of renewal and tranquility.
        </p>
        <BaseButton
          text="MAKE RESERVATION"
          icon-color="#45462A"
          text-color="text-dark-default"
          @action="sendWhatsAppMessage"
        />
        <figure
          class="absolute lg:-top-96 top-20 left-5 lg:left-0 lg:right-10 w-40 lg:w-96 md:w-[300px] overflow-hidden"
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
      <figure
        class="w-[70%] sm:w-[30.5rem] self-end overflow-hidden lg:mr-5 lg:mt-0 mt-5"
        data-scroll
        data-scroll-repeat
      >
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
  </section>

  <section
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto py-28 lg:py-60 w-full h-full bg-[#e1e1d3]"
  >
    <section class="w-full text-center">
      <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="mb-5">
        Unwind and Explore at <br class="lg:hidden" />
        Your Own Pace
      </BaseSubTitle>
      <p class="lg:w-[37rem] w-full mx-auto mb-10 text-dark-shade-3 text-xs font-thin">
        Immerse yourself in a variety of experiences, from peaceful nature walks to thrilling
        outdoor adventures. Whether you're seeking relaxation or excitement, our curated activities
        offer something for every mood and moment.
      </p>
    </section>

    <section
      class="w-full flex gap-x-10 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar lg:grid grid-cols-4 sm:gap-x-10 lg:overflow-x-hidden"
    >
      <article
        v-for="(item, index) in cardContent"
        :key="index"
        class="flex-shrink-0 w-64 snap-center lg:w-auto group"
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
          <h2 class="text-dark-default lg:text-base text-sm">{{ item.subTitle }}</h2>
          <button
            class="text-accent-default text-xs cursor-pointer group-hover:blur-[1px]"
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
    class="px-3 relative gap-y-5 lg:px-10 lg:mx-auto lg:pt-28 pb-40 lg:py-60 w-full h-full bg-[#e1e1d3]"
  >
    <section class="lg:w-[80%] w-full flex flex-col lg:flex-row justify-between lg:items-center">
      <figure class="w-[70%] lg:w-[30.5rem] overflow-hidden" data-scroll data-scroll-repeat>
        <img
          src="../assets/images/Experiences_Page/Experiences-07.jpg"
          alt="An outdoor wedding reception featuring elegantly arranged tables and chairs under a clear blue sky"
          class="w-full h-auto"
          data-scroll
          data-scroll-speed="-1"
          loading="lazy"
        />
      </figure>
      <section class="w-[95%] lg:w-[17.5rem] pt-[200px] md:pt-96 lg:pt-0 grid gap-y-5 sm:relative">
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
          Moments to Remember, <br />
          Spaces to Cherish
        </BaseSubTitle>
        <p class="text-dark-shade-2 font-thin text-xs w-full">
          Create lasting memories in our serene and private dining spaces, perfect for intimate
          gatherings or meaningful celebrations. Each occasion is tailored with care, ensuring a
          beautiful experience in a setting that feels uniquely yours.
        </p>
        <RouterLink to="/accommodation">
          <BaseButton
            text="CONTACT US"
            icon-color="#45462A"
            text-color="text-dark-default"
            font-size="text-base"
            @action="moreInfo"
          />
        </RouterLink>
        <figure
          class="absolute lg:-bottom-[24rem] bottom-[24rem] md:bottom-60 right-10 lg:left-0 w-40 lg:w-96 md:w-[300px] overflow-hidden"
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
  </section>

  <SliderSwiper
    :images="[
      'Experiences_Page/Experiences-09.jpg',
      'Experiences_Page/Experiences-010.jpg',
      'Experiences_Page/Experiences-09.jpg',
      'Experiences_Page/Experiences-010.jpg',
    ]"
    from="from-[#e1e1d3]"
    to="to-dark-default/100"
  />
</template>
