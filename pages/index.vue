<template>
  <div class="lg:min-w-max">
    <Home-Header></Home-Header>

    <div
      class="lg:w-[1224px] mx-auto text-center lg:text-left px-5 lg:px-0"
      :class="toggleStatus ? 'mt-[60px]' : 'mt-0'"
    >
      <Home-section1></Home-section1>

      <Lazy-Home-section2></Lazy-Home-section2>
    </div>

    <Lazy-Home-section3></Lazy-Home-section3>

    <Lazy-Home-section4></Lazy-Home-section4>

    <Lazy-Home-section5></Lazy-Home-section5>

    <!-- gradient background -->
    <div
      class="w-full bg-gradient-to-b dark:from-black dark:to-[#0F1429] from-white to-[#DDE3FF]"
    >
      <Lazy-Home-section6></Lazy-Home-section6>

      <Lazy-Home-section7></Lazy-Home-section7>

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
