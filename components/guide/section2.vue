<template>
  <!-- 2th part -->
  <section class="my-[60px] lg:my-[120px] mx-auto lg:w-[900px] flex-col">
    <h2
      class="text-center lg:text-left text-[28px] lg:text-[48px] font-bold text-[#1D1F29] dark:text-[#F5F5F7] mb-[40px] lg:mb-[80px]"
    >
      {{ $t('guide.part2.title') }}
    </h2>
    <guide-2-LTR
      position="left"
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
      class="mt-5 lg:mt-6 text-left"
    ></guide-2-LTR>
  </section>
</template>

<script setup>
const light_img1 = new URL(
  '@/assets/images/2x/light/en/guide-2-1.png',
  import.meta.url,
).href
const light_img2 = new URL(
  '@/assets/images/2x/light/en/guide-2-2.png',
  import.meta.url,
).href
const light_img3 = new URL(
  '@/assets/images/2x/light/en/guide-2-3.png',
  import.meta.url,
).href
const light_img4 = new URL(
  '@/assets/images/2x/light/en/guide-2-4.png',
  import.meta.url,
).href

const img1 = new URL(
  '@/assets/images/2x/dark/en/guide-2-1.png',
  import.meta.url,
).href
const img2 = new URL(
  '@/assets/images/2x/dark/en/guide-2-2.png',
  import.meta.url,
).href
const img3 = new URL(
  '@/assets/images/2x/dark/en/guide-2-3.png',
  import.meta.url,
).href
const img4 = new URL(
  '@/assets/images/2x/dark/en/guide-2-4.png',
  import.meta.url,
).href

const { t } = useI18n()
const colorMode = useColorMode()

const items = computed(() => [
  {
    title: t('guide.part2.item0.title'),
    desc: t('guide.part2.item0.description'),
    img: colorMode.preference === 'dark' ? img1 : light_img1,
    position: 'left',
  },
  {
    title: t('guide.part2.item1.title'),
    desc: t('guide.part2.item1.description'),
    img: colorMode.preference === 'dark' ? img2 : light_img2,
    position: 'right',
  },
  {
    title: t('guide.part2.item2.title'),
    desc: t('guide.part2.item2.description'),
    img: colorMode.preference === 'dark' ? img3 : light_img3,
    position: 'left',
  },
  {
    title: t('guide.part2.item3.title'),
    desc: t('guide.part2.item3.description'),
    img: colorMode.preference === 'dark' ? img4 : light_img4,
    position: 'right',
  },
])
</script>
