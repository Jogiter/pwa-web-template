<template>
  <!-- 6th-part -->
  <section
    class="relative w-full lg:w-[1224px] mx-auto py-[60px] lg:py-[120px]"
  >
    <div>
      <h2
        class="text-dark-200 dark:text-gray-default text-[28px] lg:text-[48px] font-bold leading-[normal] mb-[100px] text-center"
      >
        {{ $t('home.part6.title') }}
      </h2>
      <div
        class="relative mx-auto overflow-hidden h-[48px] lg:h-[96px] mb-[10px] lg:mb-0"
      >
        <div class="absolute flex flex-nowrap animate-marquee">
          <Section-6
            v-for="(section6, index) in section6s"
            class="mr-2.5 lg:mr-5"
            :src="section6"
            :key="index"
          ></Section-6>
          <Section-6
            v-for="(section6, index) in section6s"
            class="mr-2.5 lg:mr-5"
            :src="section6"
            :key="index"
          ></Section-6>
        </div>
        <div
          class="hidden lg:block absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r dark:from-black dark:to-black/[0] from-[#F9FAFF] to-【rgba(249, 250, 255, 0.00)】"
        ></div>
        <div
          class="hidden lg:block absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l dark:from-black dark:to-black/[0] from-[#F9FAFF] to-【rgba(249, 250, 255, 0.00)】"
        ></div>
      </div>
      <ClientOnly>
        <div
          class="relative mx-auto overflow-hidden h-[48px] lg:h-[96px]"
          v-if="isMobile()"
        >
          <div class="absolute flex flex-nowrap animate-marquee-reverse">
            <Section-6
              v-for="(section6, index) in section6s_2"
              class="mr-2.5 lg:mr-5"
              :src="section6"
              :key="index"
            ></Section-6>
            <Section-6
              v-for="(section6, index) in section6s_2"
              class="mr-2.5 lg:mr-5"
              :src="section6"
              :key="index"
            ></Section-6>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
// dark-images
const Bitcoin = new URL(
  '~/assets/images/2x/dark/en/Bitcoin.png',
  import.meta.url,
).href
const Binance = new URL(
  '~/assets/images/2x/dark/en/Binance.png',
  import.meta.url,
).href
const Tron = new URL('~/assets/images/2x/dark/en/Tron.png', import.meta.url)
  .href
const Litecoin = new URL(
  '~/assets/images/2x/dark/en/Litecoin.png',
  import.meta.url,
).href
const Dklink = new URL('~/assets/images/2x/dark/en/Dklink.png', import.meta.url)
  .href
const Ethereum = new URL(
  '~/assets/images/2x/dark/en/Ethereum.png',
  import.meta.url,
).href
const Tether = new URL('~/assets/images/2x/dark/en/Tether.png', import.meta.url)
  .href
const Dogecoin = new URL(
  '~/assets/images/2x/dark/en/Dogecoin.png',
  import.meta.url,
).href
// light-images
const light_Bitcoin = new URL(
  '~/assets/images/2x/light/en/Bitcoin.png',
  import.meta.url,
).href
const light_Binance = new URL(
  '~/assets/images/2x/light/en/Binance.png',
  import.meta.url,
).href
const light_Tron = new URL(
  '~/assets/images/2x/light/en/Tron.png',
  import.meta.url,
).href
const light_Litecoin = new URL(
  '~/assets/images/2x/light/en/Litecoin.png',
  import.meta.url,
).href
const light_Dklink = new URL(
  '~/assets/images/2x/light/en/Dklink.png',
  import.meta.url,
).href
const light_Ethereum = new URL(
  '~/assets/images/2x/light/en/Ethereum.png',
  import.meta.url,
).href
const light_Tether = new URL(
  '~/assets/images/2x/light/en/Tether.png',
  import.meta.url,
).href
const light_Dogecoin = new URL(
  '~/assets/images/2x/light/en/Dogecoin.png',
  import.meta.url,
).href

const colorMode = useColorMode()

const section6s = computed(() =>
  colorMode.preference === 'dark'
    ? [Bitcoin, Binance, Tron, Litecoin, Dklink, Ethereum, Tether, Dogecoin]
    : [
        light_Bitcoin,
        light_Binance,
        light_Tron,
        light_Litecoin,
        light_Dklink,
        light_Ethereum,
        light_Tether,
        light_Dogecoin,
      ],
)

const section6s_2 = computed(() =>
  colorMode.preference === 'dark'
    ? [Dogecoin, Tether, Ethereum, Dklink, Litecoin, Tron, Binance, Bitcoin]
    : [
        light_Dogecoin,
        light_Tether,
        light_Ethereum,
        light_Dklink,
        light_Litecoin,
        light_Tron,
        light_Binance,
        light_Bitcoin,
      ],
)
</script>
