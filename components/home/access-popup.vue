<template>
  <div
    class="relative lg:absolute lg:right-0 lg:bottom-[100%] lg:w-[400px] lg:h-[580px] lg:shadow-2x z-20 bg-white dark:bg-[#0A0A0D] overflow-auto lg:rounded-[24px] lg:mb-5"
  >
    <div
      class="bg-no-repeat bg-[100%_auto] p-5 bg-[url('@/assets/icons/light/access-popup.svg')] dark:bg-[url('@/assets/icons/access-popup.svg')] lg:bg-[url('@/assets/icons/light/access-popup-round.svg')] lg:dark:bg-[url('@/assets/icons/access-popup-round.svg')]"
    >
      <i18n-t
        keypath="home.accessPopup.title"
        scope="global"
        tag="h2"
        class="text-[24px] font-bold pt-[60px] mb-5 text-[#1D1F29] dark:text-[#F5F5F7]"
      >
        <template v-slot:br>
          <br />
        </template>
      </i18n-t>

      <div
        class="w-full rounded-[12px] shadow-0.5x mt-[12px] bg-white dark:bg-[#15151C] px-4 py-5"
      >
        <h4
          class="text-[14px] font-bold mb-[20px] text-[#1D1F29] dark:text-[#F5F5F7]"
        >
          {{ $t('home.accessPopup.step1.title', { br: '<br />'}) }}
        </h4>
        <div class="py-[2px]">
          <div class="flex justify-between items-center mb-[15px]">
            <p class="flex items-center">
              <u-icon
                class="text-[#4296D5] text-[16px]"
                name="telegram-1"
                filled
              ></u-icon>
              <span
                class="mx-[6px] text-[#868E9C] dark:text-[#8C8F9A] text-[12px]"
                >{{ $t('home.accessPopup.step1.item1') }}</span
              >
            </p>
            <a
              class="flex items-center"
              href="https://t.me/unn_cs"
              target="_blank"
            >
              <span
                class="mx-[6px] font-bold text-[#1D1F29] dark:text-[#F5F5F7] text-[14px]"
                >t.me/unn_cs</span
              >
              <u-icon
                class="text-[#3652D9] text-[16px]"
                name="link"
                filled
              ></u-icon>
            </a>
          </div>
          <div class="flex justify-between items-center">
            <p class="flex items-center">
              <u-icon
                class="text-[#3652D9] text-[16px]"
                name="gmail"
                filled
              ></u-icon>
              <span
                class="mx-[6px] text-[#868E9C] dark:text-[#8C8F9A] text-[12px]"
                >{{ $t('home.accessPopup.step1.item2') }}</span
              >
            </p>
            <a
              class="flex items-center"
              href="mailto:unn.cs8@gmail.com"
              target="_blank"
            >
              <span
                class="mx-[6px] font-bold text-[#1D1F29] dark:text-[#F5F5F7] text-[14px]"
                >unn.cs8@gmail.com</span
              >
              <u-icon
                class="text-[#3652D9] text-[16px]"
                name="link"
                filled
              ></u-icon>
            </a>
          </div>
        </div>
      </div>

      <div
        class="w-full rounded-[12px] shadow-0.5x mt-[12px] bg-white dark:bg-[#15151C] px-4 py-5"
      >
        <h4
          class="text-[14px] font-bold mb-[20px] text-[#1D1F29] dark:text-[#F5F5F7]"
        >
          {{ $t('home.accessPopup.step2.title') }}
        </h4>
        <div
          class="w-[72px] h-[72px] rounded-[8px] bg-[#F2F3F5] dark:bg-[#1D1E26] flex flex-col items-center justify-center mb-3"
        >
          <img :src="s2" alt="image" />
        </div>
        <p class="text-[12px] text-[#868E9C] dark:text-[#8C8F9A]">
          {{ $t('home.accessPopup.step2.desc') }}
        </p>
      </div>

      <div
        class="w-full rounded-[12px] shadow-0.5x mt-[12px] bg-white dark:bg-[#15151C] px-4 py-5 mb-[10px]"
      >
        <h4
          class="text-[14px] font-bold mb-[20px] text-[#1D1F29] dark:text-[#F5F5F7]"
        >
          {{ $t('home.accessPopup.step3.title')
          }}<a
            :href="api_doc_link"
            target="_blank"
            class="float-right inline-flex items-center text-[#868E9C] dark:text-[#8C8F9A] text-[12px]"
            >{{ $t('home.accessPopup.step3.title-small')
            }}<u-icon name="link" filled class="text-[16px] ml-[6px]"></u-icon
          ></a>
        </h4>
        <div>
          <img :src="s1" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const s1_en = new URL(
  '@/assets/images/2x/dark/en/home-access-popup-1.png',
  import.meta.url,
).href
const s1_zh = new URL(
  '@/assets/images/2x/dark/zh/home-access-popup-1.png',
  import.meta.url,
).href
const s1_zh_hant = new URL(
  '@/assets/images/2x/dark/zh-hant/home-access-popup-1.png',
  import.meta.url,
).href

const light_s1_en = new URL(
  '@/assets/images/2x/light/en/home-access-popup-1.png',
  import.meta.url,
).href
const light_s1_zh = new URL(
  '@/assets/images/2x/light/zh/home-access-popup-1.png',
  import.meta.url,
).href
const light_s1_zh_hant = new URL(
  '@/assets/images/2x/light/zh-hant/home-access-popup-1.png',
  import.meta.url,
).href

const dark_s2 = new URL(
  '@/assets/images/2x/dark/en/unnpay-store.png',
  import.meta.url,
).href
const light_s2 = new URL(
  '@/assets/images/2x/light/en/unnpay-store.png',
  import.meta.url,
).href

const { locale } = useI18n()
const colorMode = useColorMode()

const s1 = computed(() => {
  switch (colorMode.value) {
    case 'light':
      switch (locale.value) {
        case 'en':
          return light_s1_en
        case 'zh-hans':
          return light_s1_zh
        case 'zh-hant':
          return light_s1_zh_hant
      }
    case 'dark':
      switch (locale.value) {
        case 'en':
          return s1_en
        case 'zh-hans':
          return s1_zh
        case 'zh-hant':
          return s1_zh_hant
      }
  }
})

const s2 = computed(() => {
  switch (colorMode.value) {
    case 'light':
      return light_s2
    case 'dark':
      return dark_s2
  }
})

const api_doc_link = useApiDocRoute('product-architecture', locale.value)
</script>
