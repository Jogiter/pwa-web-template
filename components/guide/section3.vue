<template>
  <!-- 3th part -->
  <section class="lg:py-[120px] py-[60px] px-5">
    <h2
      class="lg:text-[48px] text-[28px] font-bold text-center lg:mb-[80px] mb-[40px] text-[#1D1F29] dark:text-[#F5F5F7]"
    >
      {{ $t('guide.part3.title') }}
    </h2>
    <div class="flex flex-col lg:flex-row lg:gap-x-5 gap-y-5 lg:justify-center">
      <div class="lg:w-[342px]" v-for="(item, i) in items" :key="i">
        <guide-3-TTB v-bind="item"></guide-3-TTB>
      </div>
    </div>
  </section>
</template>

<script setup>
const img1 = new URL(
  '@/assets/images/2x/dark/en/guide-3-1.png',
  import.meta.url,
).href
const img2 = new URL(
  '@/assets/images/2x/dark/en/guide-3-2.png',
  import.meta.url,
).href
const img3 = new URL(
  '@/assets/images/2x/dark/en/guide-3-3.png',
  import.meta.url,
).href
const img4 = new URL(
  '@/assets/images/2x/dark/en/guide-3-4.png',
  import.meta.url,
).href

const light_img2 = new URL(
  '@/assets/images/2x/light/en/guide-3-2.png',
  import.meta.url,
).href
const light_img4 = new URL(
  '@/assets/images/2x/light/en/guide-3-4.png',
  import.meta.url,
).href

const m_img1 = new URL(
  '@/assets/images/mobile/2x/dark/en/guide-3-1.png',
  import.meta.url,
).href
const m_img2 = new URL(
  '@/assets/images/mobile/2x/dark/en/guide-3-2.png',
  import.meta.url,
).href
const m_img3 = new URL(
  '@/assets/images/mobile/2x/dark/en/guide-3-3.png',
  import.meta.url,
).href
const m_img4 = new URL(
  '@/assets/images/mobile/2x/dark/en/guide-3-4.png',
  import.meta.url,
).href

const m_light_img2 = new URL(
  '@/assets/images/mobile/2x/light/en/guide-3-2.png',
  import.meta.url,
).href
const m_light_img4 = new URL(
  '@/assets/images/mobile/2x/light/en/guide-3-4.png',
  import.meta.url,
).href

const { t } = useI18n()
const getImage = inject('getImage')

const items = computed(() => [
  {
    title: t('guide.part3.item0.title'),
    desc: t('guide.part3.item0.description'),
    img: isMobile() ? m_img1 : img1,
    position: 'top',
  },
  {
    title: t('guide.part3.item1.title'),
    desc: t('guide.part3.item1.description'),
    img: isMobile()
      ? getImage([m_img2, m_img2, m_light_img2, m_light_img2])
      : getImage([img2, img2, light_img2, light_img2]),
    position: 'top',
  },
  {
    title: t('guide.part3.item2.title'),
    desc: t('guide.part3.item2.description'),
    img: isMobile() ? m_img3 : img3,
    position: 'bottom',
  },
  {
    title: t('guide.part3.item3.title'),
    desc: t('guide.part3.item3.description'),
    img: isMobile()
      ? getImage([m_img4, m_img4, m_light_img4, m_light_img4])
      : getImage([img4, img4, light_img4, light_img4]),
    position: 'top',
  },
])
</script>
