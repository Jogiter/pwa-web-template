<template>
  <!-- 4th-part -->
  <section class="relative lg:w-[1224px] mx-auto py-[60px] lg:py-[120px]">
    <div class="px-5 lg:px-0">
      <div class="mb-4 lg:mb-[30px] w-7 lg:w-12">
        <img
          loading="lazy"
          src="~/assets/images/2x/dark/en/stars.png"
          alt=""
          width="96"
          height="97"
        />
      </div>
      <h2
        class="font-bold text-[28px] lg:text-[48px] leading-[normal] dark:text-gray-default text-dark-200"
      >
        {{ $t('home.part4.title') }}
      </h2>
    </div>
    <div class="flex flex-col-reverse lg:flex-row lg:justify-between mt-[60px]">
      <div class="flex flex-col-reverse lg:flex-row pt-[60px] lg:pt-0">
        <div
          class="dark:bg-dark-100 bg-[#F5F6F7BF] rounded-[30px] relative"
          :class="
            locale === 'en'
              ? 'w-12 mx-auto h-1 lg:w-1.5 lg:h-[540px]'
              : 'w-12 mx-auto h-1 lg:w-1.5 lg:h-[476px]'
          "
        >
          <span
            class="absolute left-0 right-0 top-0 w-1/4 h-full lg:h-1/4 lg:w-full bg-primary-darker dark:bg-primary-default rounded-[30px] transition-all duration-300"
            :class="{
              '': active === 0,
              'left-1/4 lg:left-0 top-0 lg:top-1/4': active === 1,
              'left-1/2 lg:left-0 top-0 lg:top-1/2': active === 2,
              'left-3/4 lg:left-0 top-0 lg:top-3/4': active === 3,
            }"
          ></span>
        </div>
        <ClientOnly>
          <div class="mb-[60px] lg:mb-0 ml-0 lg:ml-[74px]">
            <div
              v-if="!isMobile()"
              class="flex flex-row lg:flex-col flex-nowrap overflow-auto snap-x snap-mandatory scrollbar-none"
              ref="tabsRef"
            >
              <p
                v-for="(item, index) in section4"
                :key="index"
                @mouseover="mouseover(index)"
                @mouseleave="mouseleave(index)"
                @click="tabClick(index)"
                class="rounded-2xl w-[243px] flex-shrink-0 text-[14px] lg:w-[496px] lg:text-[20px] leading-[normal] font-normal dark:text-gray-default p-6 mb-0 lg:mb-5 flex items-center snap-always snap-center transition-all duration-300 text-center lg:text-left"
                :class="[
                  active === index ? 'dark:bg-[#191E45] bg-[#E0EAFF]' : '',
                  locale === 'en' ? '' : 'min-h-[104px]',
                ]"
              >
                {{ item.text }}
              </p>
            </div>
            <Swiper
              v-else
              :slidesPerView="2"
              :centeredSlides="true"
              :centeredSlidesBounds="false"
              :spaceBetween="20"
              @slideChange="slideChange"
              :pagination="{
                clickable: true,
              }"
              :modules="[Autoplay]"
              :setWrapperSize="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
            >
              <SwiperSlide
                v-for="(item, index) in section4"
                :key="index"
                v-slot="{ isActive }"
              >
                <p
                  class="h-full mx-auto rounded-2xl flex-shrink-0 text-[14px] lg:w-[496px] lg:text-[20px] leading-[normal] font-normal dark:text-gray-default p-6 mb-0 lg:mb-5 flex items-center snap-always snap-center transition-all duration-300 text-center lg:text-left"
                  :class="[
                    isActive
                      ? 'bg-[#e0eaff] dark:bg-[#191E45]'
                      : 'bg-[#F2F3F5] dark:bg-[#15151C]',
                    locale === 'en' ? '' : 'min-h-[104px]',
                  ]"
                >
                  {{ item.text }}
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </ClientOnly>
      </div>
      <div class="flex items-center px-5 lg:px-0">
        <div class="-mx-5 lg:p-auto aspect-[75/58]">
          <ClientOnly>
            <template v-for="(item, index) in section4" :key="index">
              <img
                loading="lazy"
                :class="active === index ? 'block' : 'hidden'"
                class="animatecss-fadeIn animate-[animatecss-fadeIn_0.3s_both] lg:h-[540px] w-screen lg:w-auto"
                :src="item.img"
                alt=""
              />
            </template>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// dark-en-images
const tab1_en = new URL('~/assets/images/2x/dark/en/tab1.png', import.meta.url)
  .href
const tab2_en = new URL('~/assets/images/2x/dark/en/tab2.png', import.meta.url)
  .href
const tab3_en = new URL('~/assets/images/2x/dark/en/tab3.png', import.meta.url)
  .href
const tab4_en = new URL('~/assets/images/2x/dark/en/tab4.png', import.meta.url)
  .href
// dark-zh-images
// import tab1_zh from '~/assets/images/2x/dark/zh/tab1.png'
// import tab2_zh from '~/assets/images/2x/dark/zh/tab2.png'
// import tab3_zh from '~/assets/images/2x/dark/zh/tab3.png'
// import tab4_zh from '~/assets/images/2x/dark/zh/tab4.png'
// light-en-images
const light_tab1_en = new URL(
  '~/assets/images/2x/light/en/tab1.png',
  import.meta.url,
).href
const light_tab2_en = new URL(
  '~/assets/images/2x/light/en/tab2.png',
  import.meta.url,
).href
const light_tab3_en = new URL(
  '~/assets/images/2x/light/en/tab3.png',
  import.meta.url,
).href
const light_tab4_en = new URL(
  '~/assets/images/2x/light/en/tab4.png',
  import.meta.url,
).href
// light-zh-images
// import light_tab1_zh from '~/assets/images/2x/light/zh/tab1.png'
// import light_tab2_zh from '~/assets/images/2x/light/zh/tab2.png'
// import light_tab3_zh from '~/assets/images/2x/light/zh/tab3.png'
// import light_tab4_zh from '~/assets/images/2x/light/zh/tab4.png'
// mobile-dark-en-images
const m_tab1_en = new URL(
  '~/assets/images/mobile/2x/dark/en/tab1.png',
  import.meta.url,
).href
const m_tab2_en = new URL(
  '~/assets/images/mobile/2x/dark/en/tab2.png',
  import.meta.url,
).href
const m_tab3_en = new URL(
  '~/assets/images/mobile/2x/dark/en/tab3.png',
  import.meta.url,
).href
const m_tab4_en = new URL(
  '~/assets/images/mobile/2x/dark/en/tab4.png',
  import.meta.url,
).href
// mobile-dark-zh-images
// import m_tab1_zh from '~/assets/images/mobile/2x/dark/zh/tab1.png'
// import m_tab2_zh from '~/assets/images/mobile/2x/dark/zh/tab2.png'
// import m_tab3_zh from '~/assets/images/mobile/2x/dark/zh/tab3.png'
// import m_tab4_zh from '~/assets/images/mobile/2x/dark/zh/tab4.png'
// mobile-light-en-images
const m_light_tab1_en = new URL(
  '~/assets/images/mobile/2x/light/en/tab1.png',
  import.meta.url,
).href
const m_light_tab2_en = new URL(
  '~/assets/images/mobile/2x/light/en/tab2.png',
  import.meta.url,
).href
const m_light_tab3_en = new URL(
  '~/assets/images/mobile/2x/light/en/tab3.png',
  import.meta.url,
).href
const m_light_tab4_en = new URL(
  '~/assets/images/mobile/2x/light/en/tab4.png',
  import.meta.url,
).href
// mobile-light-zh-images
// import m_light_tab1_zh from '~/assets/images/mobile/2x/light/zh/tab1.png'
// import m_light_tab2_zh from '~/assets/images/mobile/2x/light/zh/tab2.png'
// import m_light_tab3_zh from '~/assets/images/mobile/2x/light/zh/tab3.png'
// import m_light_tab4_zh from '~/assets/images/mobile/2x/light/zh/tab4.png'

import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
// import required modules
import { Autoplay } from 'swiper/modules'

const active = ref(0)
const tabsRef = ref()
const TabCount = 4
const delay = 3000
let timer
const getImage = inject('getImage')
const { locale, t } = useI18n()

const section4 = computed(() => [
  {
    text: t('home.part4.item0'),
    img: isMobile()
      ? getImage([m_tab1_en, m_tab1_en, m_light_tab1_en, m_light_tab1_en])
      : getImage([tab1_en, tab1_en, light_tab1_en, light_tab1_en]),
  },
  {
    text: t('home.part4.item1'),
    img: isMobile()
      ? getImage([m_tab2_en, m_tab2_en, m_light_tab2_en, m_light_tab2_en])
      : getImage([tab2_en, tab2_en, light_tab2_en, light_tab2_en]),
  },
  {
    text: t('home.part4.item2'),
    img: isMobile()
      ? getImage([m_tab3_en, m_tab3_en, m_light_tab3_en, m_light_tab3_en])
      : getImage([tab3_en, tab3_en, light_tab3_en, light_tab3_en]),
  },
  {
    text: t('home.part4.item3'),
    img: isMobile()
      ? getImage([m_tab4_en, m_tab4_en, m_light_tab4_en, m_light_tab4_en])
      : getImage([tab4_en, tab4_en, light_tab4_en, light_tab4_en]),
  },
])

/**
 * todo: should replace with swiper
 */
const scrollTab = () => {
  if (isMobile()) {
    return
  }
  if (tabsRef.value) {
    // scroll wrapper
    const { scrollWidth } = tabsRef.value
    tabsRef.value.scrollTo({
      top: 0,
      left: scrollWidth * (1 / TabCount) * active.value,
      behavior: 'smooth',
    })
  }
}

const loop = () => {
  active.value = active.value === 3 ? 0 : ++active.value
  scrollTab()
}
onMounted(() => {
  if (isMobile()) {
    return
  }
  timer = setInterval(loop, delay)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  timer = null
})

const mouseover = (index) => {
  clearInterval(timer)
  active.value = index
}

const mouseleave = (index) => {
  clearInterval(timer)
  timer = setInterval(loop, delay)
}

const tabClick = (index) => {
  active.value = index
  scrollTab()

  mouseleave(index)
}

const slideChange = (swiper) => {
  active.value = swiper.activeIndex
}
</script>
