<script setup>
import { defineAsyncComponent, onBeforeMount } from 'vue'
import { useHomeStore } from '@/stores/home.js'
import { storeToRefs } from 'pinia'

import LoadingScreen from '@/components/LoadingScreen.vue'
import BaseHero from '@/components/BaseHero.vue'
import BaseButton from '@/components/BaseButton.vue'
const BaseSubTitle = defineAsyncComponent(() => import('@/components/BaseSubTitle.vue'))
const BaseBanner = defineAsyncComponent(() => import('@/components/BaseBanner.vue'))
const BookingPopup = defineAsyncComponent(() => import('@/components/BookingPopup.vue'))
const BaseMap = defineAsyncComponent(() => import('@/components/BaseMap.vue'))
const BaseBackground = defineAsyncComponent(() => import('@/components/BaseBackground.vue'))
const BaseImage = defineAsyncComponent(() => import('@/components/BaseImage.vue'))

const BASE_IMAGE_URL = 'https:///admin.mahharesorts.com/storage/public/'

const directMap = () => {
  window.open('https://maps.app.goo.gl/zZQHKpEfwHfYNR7b6', '_blank')
}

const store = useHomeStore()
const { heroData, bannerData, contentHighlight, isLoading, error } = storeToRefs(store)

onBeforeMount(async () => {
  await store.fetchAllData()
})
</script>

<template>
  <div v-if="!isLoading">
    <!-- Start Hero Section -->
    <BaseHero
      :fTitle="heroData.ftitle"
      :lTitle="heroData.stitle"
      :img="BASE_IMAGE_URL + heroData.images[0].file_path"
      overlay-opacity="0.25"
    />
    <!-- End Hero Section -->

    <!-- Start Banner Section-->
    <BaseBanner :text="bannerData.description" :mobile-icon="true" />
    <!-- End Banner Section -->

    <!-- Start Content Highlight 1-->
    <section
      class="px-3 lg:px-0 pt-40 max-sm:pt-56 pb-28 relative gap-y-5 w-full h-full bg-gradient-to-b from-[#86754f] from-90 to-[#e1e1d3] to-10"
    >
      <div class="w-[95%] mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
        <div class="w-full lg:w-1/2 h-full overflow-hidden">
          <BaseImage
            :src="BASE_IMAGE_URL + contentHighlight[0].images[0].file_path || null"
            :alt="contentHighlight[1].alt_img ? contentHighlight[1].alt_img : ''"
            data-scroll-speed="-1"
          />
        </div>
        <section
          class="w-[95%] lg:w-[40%] grid gap-y-3 sm:gap-y-5 place-items-start pt-10 lg:pt-20 2xl:pt-48 lg:relative"
        >
          <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
            {{ contentHighlight[0].ftitle }} <br />
            {{ contentHighlight[0].stitle }}
          </BaseSubTitle>
          <p
            class="text-dark-shade-2 text-xs 2xl:text-base font-thin w-full lg:max-w-[17.5rem] 2xl:max-w-[22rem]"
          >
            {{ contentHighlight[0].description }}
          </p>
          <a :href="$router.resolve({ name: 'accommodation' }).href">
            <BaseButton
              text="EXPLORE ACCOMMODATION"
              text-color="text-dark-default"
              icon-color="#45462A"
            />
          </a>

          <!-- Thumbnail -->
          <div
            data-scroll
            data-scroll-repeat
            class="absolute lg:-top-72 top-20 z-50 lg:left-0 right-10 w-[9.75rem] sm:w-[12rem] md:w-[18.75rem] lg:w-96 2xl:w-[29rem] overflow-hidden"
          >
            <BaseImage
              :src="BASE_IMAGE_URL + contentHighlight[1].images[0].file_path"
              :alt="contentHighlight[1].alt_img ? contentHighlight[1].alt_img : ''"
              figure-classes="w-full h-auto"
              image-classes="w-full h-full"
              data-scroll-speed="-1"
            />
          </div>
          <!-- Thumbnail -->
        </section>
      </div>
    </section>
    <!-- End Content Highlight 1 -->

    <BaseBanner
      :text="bannerData.description"
      textColor="text-dark-default"
      gradientFromColor="from-[#e1e1d3]"
      gradientFromPercent="from-80"
      gradientToColor="to-[#e1e1d3]"
      gradientToPercent="to-20"
    />

    <BaseBackground
      :imgSrc="BASE_IMAGE_URL + contentHighlight[2].images[0].file_path"
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
              {{ contentHighlight[3].ftitle }} <br />
              {{ contentHighlight[3].stitle }}
            </BaseSubTitle>
            <p
              class="lg:w-[17.5rem] 2xl:w-[23rem] 2xl:place-self-start 2xl:text-base text-light-shade-1 text-xs font-thin mb-5"
            >
              {{ contentHighlight[3].description }}
            </p>
            <a :href="$router.resolve({ name: 'experiences' }).href">
              <BaseButton
                text="EXPLORE EXPERIENCES"
                text-color="text-light-default"
                icon-color="#FCFCF0"
              />
            </a>
          </div>
        </article>

        <section
          class="w-[90vw] max-sm:mx-auto max-sm:mt-16 h-full flex lg:justify-center items-end gap-x-5"
        >
          <BaseImage
            :src="BASE_IMAGE_URL + contentHighlight[3].images[0].file_path"
            :alt="contentHighlight[3].alt_img ? contentHighlight[3].alt_img : ''"
            figure-classes="overflow-hidden lg:w-[17.5rem] 2xl:w-[24rem] w-28 h-fit"
            image-classes="w-full h-full"
            data-scroll-speed="-1"
          />

          <BaseImage
            :src="BASE_IMAGE_URL + contentHighlight[4].images[0].file_path"
            :alt="contentHighlight[4].alt_img ? contentHighlight[4].alt_img : ''"
            figure-classes="overflow-hidden lg:w-96 2xl:w-[27rem] w-[12.5rem] h-fit"
            image-classes="w-full h-full"
            data-scroll-speed="-1"
          />
        </section>
      </div>
    </section>

    <!-- Start Map Section -->

    <section class="w-full h-full mix-blend-normal bg-[#e1e1d3] -mb-[1px] z-50">
      <section
        class="w-[95%] mx-auto flex flex-col gap-y-3 sm:flex-row justify-between items-center"
      >
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl">
          How To Get Here
        </BaseSubTitle>
        <BaseButton
          text="VIEW DIRECTIONS"
          text-color="text-dark-default"
          icon-color="#45462A"
          class="z-50"
          @action="directMap"
        />
      </section>
      <section class="w-full h-auto">
        <BaseMap />
      </section>
    </section>

    <!-- End Map Section -->

    <!-- Start Background 2-->

    <BaseBackground
      :imgSrc="BASE_IMAGE_URL + contentHighlight[5].images[0].file_path"
      :top-gradient="{
        fromColor: 'from-[#e1e1d3]/0 ',
        toColor: 'to-[#e1e1d3]/100',
      }"
      :bottom-gradient="{
        fromColor: 'from-dark-default/0 ',
        toColor: 'to-dark-default/100',
      }"
    />

    <!-- End Background 2 -->

    <BookingPopup />
  </div>

  <div v-else>
    <LoadingScreen />
  </div>
</template>
