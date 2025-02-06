<script setup>
import { ref, defineAsyncComponent, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { sendWhatsAppMessage, moreInfo } from '@/utils/waDirect.js'
import { useExperienceStore } from '@/stores/experiences.js'
import { useContactStore } from '@/stores/contact.js'

import { RouterLink } from 'vue-router'

import BaseHero from '@/components/BaseHero.vue'
import BaseBanner from '@/components/BaseBanner.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSubTitle from '@/components/BaseSubTitle.vue'
import SliderSwiper from '../components/SliderSwiper.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
const BaseModal = defineAsyncComponent(() => import('@/components/BaseModal.vue'))
const BaseImage = defineAsyncComponent(() => import('@/components/BaseImage.vue'))

const BASE_IMAGE_URL = 'https:///admin.mahharesorts.com/storage/public/'
const store = useExperienceStore()
const contactStore = useContactStore()
const { heroData, bannerData, contentHighlight, articleData, sliderImages, isLoading, error } =
  storeToRefs(store)

const showModal = ref(false)
const modalData = ref({
  title: '',
  img: '',
  subTitle: '',
  contents: '',
})

const openModal = (item) => {
  modalData.value = {
    title: item.stitle,
    subTitle: item.ftitle,
    img: BASE_IMAGE_URL + item.images[0].file_path,
    contents: item.description,
  }

  showModal.value = true
}

onBeforeMount(async () => {
  await store.fetchAllData()
  await contactStore.fetchAllData()
})
</script>

<template>
  <div v-if="!isLoading">
    <BaseHero
      :fTitle="heroData.ftitle"
      :lTitle="heroData.stitle"
      :img="BASE_IMAGE_URL + heroData.images[0].file_path"
      bg-position="90% 0%"
    />

    <BaseBanner :text="bannerData.description" :mobile-icon="true" />

    <section
      class="max-sm:px-3 relative gap-y-5 lg:mx-auto pt-56 w-full h-full bg-gradient-to-b from-[#86754f] to-[#e1e1d3]"
    >
      <section
        class="lg:w-[95%] mx-auto w-full flex flex-col-reverse ml-auto 2xl:pl-[3rem] lg:flex-row justify-between lg:items-center"
      >
        <section
          class="w-[95%] lg:w-[17.5rem] ml-[7rem] 2xl:w-[23rem] grid gap-y-5 place-items-start max-sm:mx-auto max-lg:mt-10 lg:relative lg:pt-28 2xl:pt-48 pt-8"
        >
          <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
            {{ contentHighlight[0].ftitle }} <br />
            <span v-if="contentHighlight[0].stitle">{{ contentHighlight[0].stitle }}</span>
          </BaseSubTitle>
          <p class="text-dark-shade-2 font-thin text-xs 2xl:text-base w-full">
            {{ contentHighlight[0].description }}
          </p>
          <BaseButton
            text="MAKE RESERVATION"
            icon-color="#45462A"
            text-color="text-dark-default"
            @action="sendWhatsAppMessage"
          />

          <BaseImage
            :src="BASE_IMAGE_URL + contentHighlight[1].images[0].file_path"
            :alt="contentHighlight[1].alt_img ? contentHighlight[1].alt_img : ''"
            data-scroll-speed="-1"
            figure-classes="absolute lg:-top-72 top-20 left-5 lg:left-0 lg:right-10 w-40 lg:w-96 2xl:w-[29rem] md:w-[300px] overflow-hidden"
            image-classes="w-full h-full"
          />
        </section>

        <BaseImage
          :src="BASE_IMAGE_URL + contentHighlight[0].images[0].file_path"
          :alt="contentHighlight[0].alt_img ? contentHighlight[1].alt_img : ''"
          data-scroll-speed="-1"
          figure-classes="w-[70%] sm:w-[30.5rem] 2xl:w-[38vw] self-end overflow-hidden max-sm:mt-5"
          image-classes="w-full h-full"
        />
      </section>
    </section>

    <section
      class="px-3 relative gap-y-5 lg:px-8 lg:mx-auto py-28 lg:py-26 w-full h-full bg-[#e1e1d3]"
    >
      <section class="w-full text-center">
        <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl mb-5">
          Unwind and Explore at Your Own Pace
        </BaseSubTitle>
        <p
          class="lg:w-[37rem] 2xl:w-[50rem] w-[20.5rem] mx-auto mb-10 text-dark-shade-3 text-xs 2xl:text-base font-thin"
        >
          Immerse yourself in a variety of experiences, from peaceful nature walks to thrilling
          outdoor adventures. Whether you're seeking relaxation or excitement, our curated
          activities offer something for every mood and moment.
        </p>
      </section>

      <section
        class="w-full flex gap-x-10 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar lg:grid grid-cols-4 sm:gap-x-10 lg:overflow-x-hidden"
      >
        <article
          v-for="(item, index) in articleData"
          :key="index"
          class="flex-shrink-0 w-64 snap-center lg:w-auto group"
        >
          <figure class="overflow-hidden">
            <img
              :src="BASE_IMAGE_URL + item.images[0].file_path"
              :alt="item.description"
              loading="lazy"
              class="w-full h-auto object-cover group-hover:scale-110 ease-out duration-500 transition-transform"
            />
          </figure>
          <section class="mt-5">
            <h2 class="text-dark-default lg:text-base text-sm">{{ item.ftitle }}</h2>
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
          :title="modalData.title"
          :img="modalData.img"
          :contents="modalData.contents"
        >
        </BaseModal>
      </section>
    </section>

    <section
      class="px-3 relative gap-y-5 lg:px-8 lg:mx-auto lg:pt-0 lg:pb-80 pb-32 w-full h-full bg-[#e1e1d3]"
    >
      <section class="lg:w-[69.5rem] 2xl:w-[95vw] w-full flex flex-col lg:flex-row gap-x-64">
        <BaseImage
          :src="BASE_IMAGE_URL + contentHighlight[2].images[0].file_path"
          :alt="contentHighlight[2].alt_img ? contentHighlight[2].alt_img : ''"
          data-scroll-speed="-1"
          figure-classes="w-[70%] lg:w-[30.5rem] 2xl:w-[38vw] overflow-hidden"
          image-classes="w-full h-auto"
        />

        <section
          class="w-[95%] h-[80%] lg:w-[17.5rem] 2xl:w-[23rem] pt-[12.5rem] md:pt-96 lg:pt-20 2xl:pt-28 sm:relative grid justify-items-start gap-y-5"
        >
          <BaseSubTitle text-color="text-dark-default" text-size="text-2xl" class="2xl:text-3xl">
            {{ contentHighlight[2].ftitle }} <br />
            <span v-if="contentHighlight[2].stitle">{{ contentHighlight[2].stitle }}</span>
          </BaseSubTitle>
          <p class="text-dark-shade-2 font-thin text-xs 2xl:text-base w-full">
            {{ contentHighlight[2].description }}
          </p>
          <BaseButton
            text="CONTACT US"
            icon-color="#45462A"
            text-color="text-dark-default"
            font-size="text-base"
            @action="moreInfo"
          />

          <BaseImage
            :src="BASE_IMAGE_URL + contentHighlight[3].images[0].file_path"
            alt="An outdoor wedding reception featuring elegantly arranged tables and chairs under a clear blue sky"
            data-scroll-speed="-1"
            figure-classes="absolute lg:-bottom-[24rem] 2xl:-bottom-[35rem] bottom-[24rem] md:bottom-60 right-10 lg:left-0 w-40 lg:w-96 2xl:w-[29rem] md:w-[300px] overflow-hidden"
            image-classes="w-full h-auto"
          />
        </section>
      </section>
    </section>

    <SliderSwiper :images="sliderImages" from="from-[#e1e1d3]" to="to-dark-default/100" />
  </div>

  <div v-else>
    <LoadingScreen />
  </div>
</template>
