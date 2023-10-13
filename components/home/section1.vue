<template>
  <!-- 1th part -->
  <section>
    <div
      class="flex flex-col-reverse pt-5 pb-[60px] lg:py-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:h-[800px] bg-[url('~/assets/icons/mobile/bg-circle.svg')] lg:bg-[url('~/assets/icons/bg-circle.svg')] bg-no-repeat"
    >
      <div class="lg:h-full lg:w-[600px] leading-[normal] lg:pt-[254px]">
        <h2
          class="dark:text-primary-default text-primary-darker text-[28px] lg:text-[48px] leading-[normal] font-bold mb-6 mt-5 lg:mt-0"
        >
          {{ $t('home.part1.title0') }}<br /><span
            class="dark:text-gray-default text-dark-200"
            >{{ $t('home.part1.title1') }}</span
          >
        </h2>
        <p
          class="text-gray-darker dark:text-gray-dark text-[16px] lg:text-[24px] mb-12"
        >
          {{ $t('home.part1.desc') }}
        </p>
        <ClientOnly>
          <div class="block lg:hidden">
            <a
              :href="isIOS() ? downloadLink.ios : downloadLink.android"
              target="_blank"
            >
              <U-Button
                class="px-[15px] py-[9px] text-[14px] lg:text-[16px] h-12 lg:h-[52px] mb-3"
              >
                <u-icon
                  :name="isIOS() ? 'ios' : 'android'"
                  class="text-[30px] svg-h-auto"
                  filled
                ></u-icon>
                <div class="text-left ml-1 text-[#F5F5F7]">
                  <p class="text-[7px]">
                    {{
                      isIOS()
                        ? $t('home.part1.download.desc1')
                        : $t('home.part1.download.desc0')
                    }}
                  </p>
                  <p class="text-[14px]">
                    {{
                      isIOS()
                        ? $t('home.part1.download.title1')
                        : $t('home.part1.download.title0')
                    }}
                  </p>
                </div>
              </U-Button>
            </a>
            <p
              class="dark:text-[#8C8F9A] text-[#868E9C] text-[12px]"
              v-if="isIOS()"
            >
              {{ $t('home.part1.download.tips') }}
            </p>
          </div>
          <div class="dropdown dropdown-hover group">
            <U-Button
              class="hidden lg:block px-7 text-[14px] lg:text-[16px] h-12 lg:h-[52px]"
              >{{ $t('home.part1.button') }}</U-Button
            >
            <ClientOnly>
              <div
                v-show="!isMobile()"
                class="hidden lg:block lg:dropdown-content before:content-[''] before:absolute before:bottom-[100%] before:left-0 before:h-5 before:w-full mt-5 text-center z-[1] rounded-xl lg:bg-white lg:dark:bg-dark-100 lg:backdrop-blur-md lg:shadow-1x"
              >
                <div
                  class="inline-flex dark:bg-[#15151C] bg-white rounded-xl p-3 gap-x-2 text-center lg:shadow-1x lg:w-[304px]"
                >
                  <div class="w-[132px]">
                    <img
                      src="@/assets/images/2x/dark/en/home-1-1.png"
                      width="400"
                      height="400"
                      alt="app qrcode"
                    />
                  </div>
                  <div class="flex-1 flex flex-col">
                    <a
                      :href="downloadLink.android"
                      target="_blank"
                      class="mb-2"
                    >
                      <u-icon
                        :name="download0"
                        class="text-[140px] svg-h-auto"
                        filled
                      ></u-icon>
                    </a>
                    <a :href="downloadLink.ios" target="_blank" class="mb-2">
                      <u-icon
                        :name="download1"
                        class="text-[140px] svg-h-auto"
                        filled
                      ></u-icon>
                    </a>
                    <p class="dark:text-[#8C8F9A] text-[#868E9C] text-[12px]">
                      {{ $t('home.part1.download.tips') }}
                    </p>
                  </div>
                </div>
              </div>
            </ClientOnly>
          </div>
        </ClientOnly>
      </div>
      <div class="lg:px-[49px] lg:h-auto h-[300px] flex items-center">
        <div class="lg:w-[502px] mx-6 aspect-[182/145]">
          <ClientOnly>
            <img :src="section1BgImg" alt="" width="1004" height="944" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import s1_en from '~/assets/images/2x/dark/en/s1.png'
import m_s1_en from '~/assets/images/mobile/2x/dark/en/s1.png'

const colorMode = useColorMode()

const section1BgImg = computed(() => (isMobile() ? m_s1_en : s1_en))

const download0 = computed(() =>
  colorMode.preference === 'light' ? 'light/home-1-1' : 'home-1-1',
)
const download1 = computed(() =>
  colorMode.preference === 'light' ? 'light/home-1-2' : 'home-1-2',
)

useServerHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: m_s1_en,
    },
    {
      rel: 'preload',
      as: 'image',
      href: s1_en,
    },
  ],
})
</script>
