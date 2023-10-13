<template>
  <!-- 5th-part -->
  <section
    class="relative lg:w-[1224px] mx-auto py-[60px] lg:py-[200px] px-5 lg:px-0"
  >
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div>
        <div class="mb-4 lg:mb-6 w-[24px] lg:w-[38px]">
          <img
            loading="lazy"
            src="~/assets/images/2x/dark/en/writing.png"
            width="76"
            height="77"
            alt=""
          />
        </div>
        <h2
          class="text-dark-200 dark:text-gray-default text-[22px] lg:text-[32px] font-bold leading-[normal] mb-4 lg:mb-6"
        >
          {{ $t('home.part5.title') }}
        </h2>
        <p
          class="lg:w-[496px] text-[14px] lg:text-[20px] font-normal leading-[normal] mb-7 lg:mb-12 text-gray-darker dark:text-gray-dark"
        >
          {{ $t('home.part5.desc') }}
        </p>
        <U-Button
          class="py-4 px-7 text-[14px] lg:text-[16px] h-12 lg:h-[52px]"
          >{{ $t('home.part5.button') }}</U-Button
        >
      </div>
      <div class="mt-[80px] lg:mt-0">
        <div class="lg:w-[600px]">
          <ClientOnly>
            <img
              loading="lazy"
              :src="part5Image"
              alt=""
              width="1200"
              height="800"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const s8 = new URL('~/assets/images/2x/dark/en/s8.png', import.meta.url).href
const light_s8 = new URL('~/assets/images/2x/light/en/s8.png', import.meta.url)
  .href

const colorMode = useColorMode()
const part5Image = computed(() =>
  colorMode.preference === 'dark' ? s8 : light_s8,
)
</script>
