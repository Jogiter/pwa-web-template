<template>
  <!-- 2th-part -->
  <section class="py-[60px] lg:py-[120px] lg:w-[1016px] mx-auto">
    <div>
      <div class="w-7 mb-4 mx-auto lg:w-12 lg:mb-[30px] lg:mx-0">
        <img
          loading="lazy"
          src="~/assets/images/2x/dark/en/star.png"
          alt=""
          width="96"
          height="97"
        />
      </div>
      <h2
        class="font-bold text-[28px] lg:text-[48px] leading-[normal] text-dark-200 dark:text-gray-default mb-[20px] lg:mb-0"
      >
        {{ $t('home.part2.title') }}
      </h2>
      <div
        class="flex flex-col flex-wrap lg:flex-row mt-5 lg:mt-[-31px] gap-x-6"
      >
        <Section-2
          class="h-[453px] lg:h-[640px] overflow-hidden mt-5 lg:mt-0"
          v-for="(section, index) in section2"
          :key="index"
          v-bind="section"
          :class="{
            'lg:mt-[203px]': index === 0,
            'lg:mt-[-203px]': index === 3,
            'lg:mb-6': index !== 2,
            'order-1 lg:order-none': index === 0,
            'order-2 lg:order-none': index === 1,
            'order-4 lg:order-none': index === 2,
            'order-3 lg:order-none': index === 3,
          }"
          :isPrimary="index === 1 || index === 2"
        ></Section-2>
      </div>
    </div>
  </section>
</template>

<script setup>
// dark-en-images
const s2_en = new URL('~/assets/images/2x/dark/en/s2.png', import.meta.url).href
const s4_en = new URL('~/assets/images/2x/dark/en/s4.png', import.meta.url).href
const s3_en = new URL('~/assets/images/2x/dark/en/s3.png', import.meta.url).href
const s5_en = new URL('~/assets/images/2x/dark/en/s5.png', import.meta.url).href
// dark-zh-images
// import s2_zh from '~/assets/images/2x/dark/zh/s2.png'
// import s4_zh from '~/assets/images/2x/dark/zh/s4.png'
// import s3_zh from '~/assets/images/2x/dark/zh/s3.png'
// import s5_zh from '~/assets/images/2x/dark/zh/s5.png'
// light-en-images
const light_s2_en = new URL(
  '~/assets/images/2x/light/en/s2.png',
  import.meta.url,
).href
const light_s4_en = new URL(
  '~/assets/images/2x/light/en/s4.png',
  import.meta.url,
).href
const light_s3_en = new URL(
  '~/assets/images/2x/light/en/s3.png',
  import.meta.url,
).href
const light_s5_en = new URL(
  '~/assets/images/2x/light/en/s5.png',
  import.meta.url,
).href
// light-zh-images
// import light_s2_zh from '~/assets/images/2x/light/zh/s2.png'
// import light_s4_zh from '~/assets/images/2x/light/zh/s4.png'
// import light_s3_zh from '~/assets/images/2x/light/zh/s3.png'
// import light_s5_zh from '~/assets/images/2x/light/zh/s5.png'

const { t } = useI18n()
const getImage = inject('getImage')

const section2 = computed(() => [
  {
    title: t('home.part2.left0.title'),
    description: t('home.part2.left0.desc'),
    image: getImage([s2_en, s2_en, light_s2_en, light_s2_en]),
  },
  {
    title: t('home.part2.right0.title'),
    description: t('home.part2.right0.desc'),
    image: getImage([s3_en, s3_en, light_s3_en, light_s3_en]),
  },
  {
    title: t('home.part2.left1.title'),
    description: t('home.part2.left1.desc'),
    image: getImage([s4_en, s4_en, light_s4_en, light_s4_en]),
  },
  {
    title: t('home.part2.right1.title'),
    description: t('home.part2.right1.desc'),
    image: getImage([s5_en, s5_en, light_s5_en, light_s5_en]),
  },
])
</script>
