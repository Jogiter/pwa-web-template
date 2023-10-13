<template>
  <!-- 7th-part -->
  <section
    class="relative lg:w-[1224px] mx-auto py-[60px] lg:py-[120px] px-5 lg:px-0"
  >
    <div class="">
      <h2
        class="text-dark-200 dark:text-gray-default text-[28px] lg:text-[48px] font-bold leading-[normal] mb-[60px] text-center"
      >
        {{ $t('home.part7.title') }}
      </h2>
      <ul
        class="bg-gradient-to-b dark:from-[#2842C7] dark:to-[#396AE5] from-[#2441D4] to-[#356AF2] rounded-[16px] lg:rounded-[32px] py-[60px] lg:py-[80px] px-[20px] lg:px-[104px] flex flex-row flex-wrap justify-center lg:flex-row lg:justify-between gap-x-3 gap-y-10 lg:gap-0"
      >
        <li v-for="(item, index) in section7" :key="index" class="">
          <Section-7
            :title="item.title"
            :index="item.key"
            :icon="item.icon"
          ></Section-7>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const colorMode = useColorMode()
const section7 = computed(() => [
  {
    key: 1,
    icon: colorMode.preference === 'dark' ? 'step1' : 'light/step1',
    title: t('home.part7.item0'),
  },
  {
    key: 2,
    icon: colorMode.preference === 'dark' ? 'step2' : 'light/step2',
    title: t('home.part7.item1'),
  },
  {
    key: 3,
    icon: colorMode.preference === 'dark' ? 'step3' : 'light/step3',
    title: t('home.part7.item2'),
  },
  {
    key: 4,
    icon: colorMode.preference === 'dark' ? 'step4' : 'light/step4',
    title: t('home.part7.item3'),
  },
  {
    key: 5,
    icon: colorMode.preference === 'dark' ? 'step5' : 'light/step5',
    title: t('home.part7.item4'),
  },
])
</script>
