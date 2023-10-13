<template>
  <div class="lg:min-w-max">
    <Home-Header></Home-Header>

    <div
      class="lg:w-[1224px] mx-auto px-5 lg:px-0"
      :class="toggleStatus ? 'mt-[60px]' : 'mt-0'"
    >
      <guide-section1></guide-section1>
      <guide-section2></guide-section2>
    </div>
    <Lazy-guide-section3></Lazy-guide-section3>
    <Lazy-guide-section4 class="lg:w-[1224px] mx-auto"></Lazy-guide-section4>

    <!-- gradient background -->
    <div
      class="w-full bg-gradient-to-b dark:from-black dark:to-[#0F1429] from-white to-[#DDE3FF]"
    >
      <Lazy-Home-section8></Lazy-Home-section8>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const colorMode = useColorMode()

const homeStore = useHomeStore()

const toggleStatus = computed(() => homeStore.isMenuOpening)

/**
 * 获取正确的图片
 */
const getImage = ([img_en, img_zh, light_img_en, light_img_zh]) =>
  colorMode.preference === 'dark'
    ? locale.value === 'en'
      ? img_en
      : img_zh
    : locale.value === 'en'
    ? light_img_en
    : light_img_zh

provide('getImage', getImage)
</script>
