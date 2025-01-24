<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { defineAsyncComponent, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { sendWhatsAppMessage } from '@/utils/waDirect.js'
import useWindowSize from '@/utils/useWindowSize.js'
import { useDiningStore } from '@/stores/dining.js'

import LoadingScreen from '@/components/LoadingScreen.vue'
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

const router = useRouter()
const { windowWidth } = useWindowSize()
const BASE_IMAGE_URL = 'https:///admin.mahharesorts.com/storage/public/'
const foodPDF = '/document/food.pdf'
const beveragesPDF = '/document/beverages.pdf'

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
    item: ['Foods Menu', 'Beverages Menu'],
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

const store = useDiningStore()
const { heroData, bannerData, contentHighlight, sliderImages, isLoading, error } =
  storeToRefs(store)

const viewMenu = (content) => {
  if (content == 'Foods Menu') window.open(foodPDF, '_blank')
  else if (content === 'Beverages Menu') window.open(beveragesPDF, '_blank')
}

onBeforeMount(async () => {
  await store.fetchAllData()
})
</script>

<template>
  <div v-if="!isLoading">
    <BaseHero
      :fTitle="heroData.ftitle"
      :lTitle="heroData.stitle"
      :img="BASE_IMAGE_URL + heroData.images[0].file_path"
    />

    <BaseBanner :text="bannerData.description" :mobile-icon="true" />

    <section v-if="windowWidth <= 768">
      <SliderSwiper
        id="swiper-2"
        :type-navigation="2"
        :images="[
          BASE_IMAGE_URL + contentHighlight[0].images[0].file_path,
          BASE_IMAGE_URL + contentHighlight[1].images[0].file_path,
          BASE_IMAGE_URL + contentHighlight[2].images[0].file_path,
          BASE_IMAGE_URL + contentHighlight[3].images[0].file_path,
        ]"
        from="from-[rgba(112,87,41,0.80)]"
        via="via-[rgba(112,87,41,0.40)]"
        to="to-[rgba(112,87,41,0.40)]"
        color-icon="#45462A"
        text-color="text-light-default"
      />
    </section>

    <section
      class="mx-auto space-y-10 pb-40 w-full h-full bg-gradient-to-b from-[rgba(112,87,41,0.40)] sm:from-[#86754f] to-[#e1e1d3] bg-[#e1e1d3] via-[#e1e1d3]"
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
              {{ contentHighlight[0].ftitle }} <br />
              <span v-if="contentHighlight[0].stitle">{{ contentHighlight[0].stitle }}</span>
            </BaseSubTitle>
            <p
              class="w-full place-self-center text-dark-shade-2 text-xs 2xl:text-base font-thin mb-5"
            >
              {{ contentHighlight[0].description }}
            </p>
            <a href="#menu-list">
              <BaseButton text="VIEW MENU" text-color="text-dark-default" icon-color="#45462A" />
            </a>
          </div>
        </article>

        <section
          v-if="windowWidth > 768"
          class="lg:w-[43.5rem] w-[90%] flex flex-row-reverse sm:flex-row justify-end gap-x-5 object-cover"
        >
          <figure
            data-scroll
            data-scroll-repeat
            class="sm:w-[20.75rem] 2xl:w-[25.5rem] z-0 w-full h-fit flex-shrink-0 overflow-hidden relative group"
          >
            <img
              :src="BASE_IMAGE_URL + contentHighlight[0].images[0].file_path"
              :alt="contentHighlight[0].alt_img ? contentHighlight[0].alt_img : ''"
              class="w-full h-full group-hover:opacity-0 transition-opacity cursor-pointer"
              data-scroll
              data-scroll-speed="-1"
            />

            <img
              :src="BASE_IMAGE_URL + contentHighlight[1].images[0].file_path"
              :alt="contentHighlight[1].alt_img ? contentHighlight[1].alt_img : ''"
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
              :src="BASE_IMAGE_URL + contentHighlight[2].images[0].file_path"
              :alt="contentHighlight[1].alt_img ? contentHighlight[1].alt_img : ''"
              class="w-full h-full group-hover:opacity-0"
              data-scroll
              data-scroll-speed="-1"
            />

            <img
              :src="BASE_IMAGE_URL + contentHighlight[3].images[0].file_path"
              :alt="contentHighlight[3].alt_img ? contentHighlight[3].alt_img : ''"
              class="w-full h-full object-cover absolute top-0 group-hover:opacity-100 opacity-0 transition-opacity"
              data-scroll
              data-scroll-speed="-1"
            />
          </figure>
        </section>
      </section>
    </section>

    <SliderSwiper
      :images="sliderImages"
      from="from-[#e1e1d3]"
      via="via[#e1e1d3]"
      to="to-[#e1e1d3]"
      color-icon="#45462A"
      text-color="text-dark-default"
    />

    <section class="mx-auto space-y-10 lg:py-52 py-36 w-full h-full bg-[#e1e1d3]">
      <div class="lg:w-[95%] mx-auto">
        <section class="w-full flex flex-col lg:flex-row justify-between items-center">
          <SlideShow
            :images="[
              `${BASE_IMAGE_URL + contentHighlight[5].images[0].file_path}`,
              `${BASE_IMAGE_URL + contentHighlight[6].images[0].file_path}`,
              `${BASE_IMAGE_URL + contentHighlight[7].images[0].file_path}`,
              `${BASE_IMAGE_URL + contentHighlight[8].images[0].file_path}`,
            ]"
          />
          <article class="lg:w-[30.5rem] 2xl:w-[35rem] w-full flex justify-center">
            <div class="lg:w-[17.5rem] 2xl:w-[23rem] w-[95vw] mx-auto pt-16 lg:pt-0">
              <BaseSubTitle
                text-color="text-dark-default"
                text-size="text-2xl"
                class="mb-5 2xl:text-3xl"
              >
                {{ contentHighlight[4].ftitle }} <br />
                <span v-if="contentHighlight[4].stitle">{{ contentHighlight[4].stitle }}</span>
              </BaseSubTitle>
              <p
                class="w-full place-self-center text-dark-shade-3 text-xs 2xl:text-base font-thin mb-5"
              >
                {{ contentHighlight[0].description }}
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
            :id="index == 1 ? 'menu-list' : ''"
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
                @click="viewMenu(content)"
              >
                {{ content }}
              </li>
            </ul>
          </article>
        </section>
      </section>
    </section>

    <BaseBackground
      :imgSrc="BASE_IMAGE_URL + contentHighlight[9].images[0].file_path"
      :top-gradient="{
        fromColor: 'from-light-shade-3/0 ',
        toColor: 'to-light-shade-3/100',
      }"
      :bottom-gradient="{
        fromColor: 'from-dark-default/0 ',
        toColor: 'to-dark-default/100',
      }"
    />
  </div>
  <div v-else>
    <LoadingScreen />
  </div>
</template>
