<template>
  <!-- 4th part -->
  <section class="lg:py-[120px] py-[60px] px-5 lg:px-0">
    <h2
      class="text-[28px] lg:text-[48px] font-bold text-center mb-[40px] lg:mb-[80px] text-[#1D1F29] dark:text-[#F5F5F7]"
    >
      {{ $t('guide.part4.title') }}
    </h2>
    <div class="lg:mb-10 mb-5 text-center lg:text-left">
      <button
        v-for="(item, i) in tabs"
        :key="i"
        @click="activeTab = i"
        class="text-[22px] lg:text-[32px] font-bold ml-5 lg:ml-10"
        :class="
          activeTab === i
            ? 'text-[#1D1F29] dark:text-[#F5F5F7]'
            : 'text-[#868E9C] dark:text-[#8C8F9A]'
        "
      >
        {{ item }}
      </button>
    </div>
    <div
      class="bg-[#F6F7F8] dark:bg-[#0C0C0F] rounded-[16px] lg:rounded-[32px] lg:flex lg:items-center lg:justify-center h-[300px] leading-[300px] lg:leading-[normal] lg:h-[400px] overflow-auto lg:overflow-hidden"
    >
      <ClientOnly>
        <img
          :src="activeTab === 0 ? img1 : img2"
          alt=""
          class="inline px-[35px] lg:px-0 lg:block max-w-fit w-[725px] lg:w-[1040px]"
        />
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
// dark-en-images
const img1_en = new URL(
  '@/assets/images/2x/dark/en/guide-4-1.png',
  import.meta.url,
).href
const img2_en = new URL(
  '@/assets/images/2x/dark/en/guide-4-2.png',
  import.meta.url,
).href

// dark-zh-images
const img1_zh = new URL(
  '@/assets/images/2x/dark/zh/guide-4-1.png',
  import.meta.url,
).href
const img2_zh = new URL(
  '@/assets/images/2x/dark/zh/guide-4-2.png',
  import.meta.url,
).href

// dark-zh-hant-images
const img1_zh_hant = new URL(
  '@/assets/images/2x/dark/zh-hant/guide-4-1.png',
  import.meta.url,
).href
const img2_zh_hant = new URL(
  '@/assets/images/2x/dark/zh-hant/guide-4-2.png',
  import.meta.url,
).href

// light-en-images
const light_img1_en = new URL(
  '@/assets/images/2x/light/en/guide-4-1.png',
  import.meta.url,
).href
const light_img2_en = new URL(
  '@/assets/images/2x/light/en/guide-4-2.png',
  import.meta.url,
).href

// light-zh-images
const light_img1_zh = new URL(
  '@/assets/images/2x/light/zh/guide-4-1.png',
  import.meta.url,
).href
const light_img2_zh = new URL(
  '@/assets/images/2x/light/zh/guide-4-2.png',
  import.meta.url,
).href

// light-zh-hant-images
const light_img1_zh_hant = new URL(
  '@/assets/images/2x/light/zh-hant/guide-4-1.png',
  import.meta.url,
).href
const light_img2_zh_hant = new URL(
  '@/assets/images/2x/light/zh-hant/guide-4-2.png',
  import.meta.url,
).href

// dark-en-images
const m_img1_en = new URL(
  '@/assets/images/mobile/2x/dark/en/guide-4-1.png',
  import.meta.url,
).href
const m_img2_en = new URL(
  '@/assets/images/mobile/2x/dark/en/guide-4-2.png',
  import.meta.url,
).href

// dark-zh-images
const m_img1_zh = new URL(
  '@/assets/images/mobile/2x/dark/zh/guide-4-1.png',
  import.meta.url,
).href
const m_img2_zh = new URL(
  '@/assets/images/mobile/2x/dark/zh/guide-4-2.png',
  import.meta.url,
).href

// dark-zh-hant-images
const m_img1_zh_hant = new URL(
  '@/assets/images/mobile/2x/dark/zh-hant/guide-4-1.png',
  import.meta.url,
).href
const m_img2_zh_hant = new URL(
  '@/assets/images/mobile/2x/dark/zh-hant/guide-4-2.png',
  import.meta.url,
).href

// light-en-images
const m_light_img1_en = new URL(
  '@/assets/images/mobile/2x/light/en/guide-4-1.png',
  import.meta.url,
).href
const m_light_img2_en = new URL(
  '@/assets/images/mobile/2x/light/en/guide-4-2.png',
  import.meta.url,
).href

// light-zh-images
const m_light_img1_zh = new URL(
  '@/assets/images/mobile/2x/light/zh/guide-4-1.png',
  import.meta.url,
).href
const m_light_img2_zh = new URL(
  '@/assets/images/mobile/2x/light/zh/guide-4-2.png',
  import.meta.url,
).href

// light-zh-hant-images
const m_light_img1_zh_hant = new URL(
  '@/assets/images/mobile/2x/light/zh-hant/guide-4-1.png',
  import.meta.url,
).href
const m_light_img2_zh_hant = new URL(
  '@/assets/images/mobile/2x/light/zh-hant/guide-4-2.png',
  import.meta.url,
).href

const { locale, t } = useI18n()
const colorMode = useColorMode()

const activeTab = ref(0)
const tabs = computed(() => [t('guide.part4.tab0'), t('guide.part4.tab1')])

const img1s = {
  en: {
    dark: img1_en,
    light: light_img1_en,
  },
  'zh-hans': {
    dark: img1_zh,
    light: light_img1_zh,
  },
  'zh-hant': {
    dark: img1_zh_hant,
    light: light_img1_zh_hant,
  },
}

const img1s_mobile = {
  en: {
    dark: m_img1_en,
    light: m_light_img1_en,
  },
  'zh-hans': {
    dark: m_img1_zh,
    light: m_light_img1_zh,
  },
  'zh-hant': {
    dark: m_img1_zh_hant,
    light: m_light_img1_zh_hant,
  },
}

const img2s = {
  en: {
    dark: img2_en,
    light: light_img2_en,
  },
  'zh-hans': {
    dark: img2_zh,
    light: light_img2_zh,
  },
  'zh-hant': {
    dark: img2_zh_hant,
    light: light_img2_zh_hant,
  },
}

const img2s_mobile = {
  en: {
    dark: m_img2_en,
    light: m_light_img2_en,
  },
  'zh-hans': {
    dark: m_img2_zh,
    light: m_light_img2_zh,
  },
  'zh-hant': {
    dark: m_img2_zh_hant,
    light: m_light_img2_zh_hant,
  },
}

const img1 = computed(() => {
  const config = isMobile() ? img1s_mobile : img1s
  return config[locale.value || CONFIG.locale][
    colorMode.preference || CONFIG.colorMode
  ]
})
const img2 = computed(() => {
  const config = isMobile() ? img2s_mobile : img2s
  return config[locale.value || CONFIG.locale][
    colorMode.preference || CONFIG.colorMode
  ]
})
</script>
