<template>
  <div
    class="w-full top-0 z-[999] bg-white/75 dark:bg-black/80 backdrop-blur-md lg:backdrop-blur-xl transition-all"
    :class="toggleStatus ? 'fixed' : 'sticky'"
  >
    <header
      class="relative lg:w-[1224px] lg:h-auto mx-auto py-3.5 dark:text-white text-dark-200 px-5 lg:px-0"
      :class="{
        'h-screen': toggleStatus,
        'h-auto': !toggleStatus,
      }"
    >
      <nav class="flex items-center flex-col lg:flex-row justify-between">
        <div class="flex flex-1 justify-between w-full">
          <div>
            <NuxtLink
              :to="localePath('/')"
              class="inline-flex items-center"
              @click="() => toggleNavbar(false)"
            >
              <Logo />
            </NuxtLink>
          </div>
          <button class="lg:hidden" @click="toggleNavbar">
            <ClientOnly
              ><u-icon :name="toggleIcon" class="text-[20px]" filled></u-icon
            ></ClientOnly>
          </button>
        </div>
        <div
          class="flex flex-col lg:flex-row"
          :class="{
            'hidden lg:flex lg:h-auto': !toggleStatus,
            ' w-full': toggleStatus,
          }"
        >
          <div
            class="lg:w-auto flex flex-col lg:flex-row lg:justify-end lg:items-center gap-y-3 lg:gap-x-10 mt-4 lg:mt-0"
          >
            <div
              v-for="(nav, index) in navs"
              class="text-[16px] lg:text-[14px] font-bold lg:font-normal leading-6 h-[54px] lg:h-auto flex items-center link-white"
              :key="index"
            >
              <NuxtLink v-bind="nav" @click="toggleNavbar">{{
                nav.title
              }}</NuxtLink>
            </div>
            <div class="dropdown dropdown-hover group">
              <label
                tabindex="0"
                class="flex items-center font-bold lg:font-normal h-[54px] lg:h-auto justify-between lg:justify-normal text-[16px] lg:text-[14px]"
                >{{ $t('home.navigation.download') }}</label
              >
              <div
                class="hidden lg:block lg:dropdown-content text-center z-[1] rounded-xl lg:bg-white lg:dark:bg-dark-100 lg:w-[200px] lg:backdrop-blur-md lg:shadow-1x lg:left-1/2 lg:-translate-x-1/2 before:content-[''] before:absolute before:bottom-[100%] before:left-0 before:h-7 before:w-full mt-7"
              >
                <div class="p-3">
                  <img
                    loading="lazy"
                    src="@/assets/images/2x/dark/en/home-1-1.png"
                    width="400"
                    height="400"
                    alt="app qrcode"
                  />
                </div>
                <i18n-t
                  keypath="home.navigation.downloadTips"
                  scope="global"
                  tag="p"
                  class="px-5 pb-5 text-[12px]"
                >
                  <template v-slot:ios>
                    <span class="text-[#3754E5] font-bold">{{
                      $t('common.ios')
                    }}</span>
                  </template>
                  <template v-slot:android>
                    <span class="text-[#3754E5] font-bold">{{
                      $t('common.android')
                    }}</span>
                  </template>
                </i18n-t>
              </div>
            </div>
            <div class="dropdown dropdown-hover group">
              <label
                tabindex="0"
                class="flex items-center font-bold lg:font-normal h-[54px] lg:h-auto justify-between lg:justify-normal text-[16px] lg:text-[14px]"
                @click="toggleDropdown"
                >{{ $t('home.navigation.language')
                }}<ClientOnly
                  ><u-icon
                    name="menuDown"
                    filled
                    class="text-[20px] lg:text-[12px] inline-block dark:text-[#8C8F9A] ml-1.5 transform duration-300"
                    :class="{
                      'rotate-180': dropdownStatus,
                      'group-hover:rotate-180': !isMobile(),
                    }"
                  ></u-icon></ClientOnly
              ></label>
              <ClientOnly>
                <ul
                  tabindex="0"
                  v-show="!isMobile() || dropdownStatus"
                  class="lg:dropdown-content menu z-[1] p-1 rounded-xl lg:bg-white lg:dark:bg-dark-100 lg:w-[112px] lg:backdrop-blur-md lg:shadow-1x lg:left-1/2 lg:-translate-x-1/2 before:content-[''] before:absolute before:bottom-[100%] before:left-0 lg:before:h-7 before:w-full lg:mt-7"
                >
                  <li class="mb-1">
                    <NuxtLink
                      class="text-[14px] lg:text-[12px] font-normal leading-[normal] text-[#1D1F29] dark:text-gray-default flex items-center rounded-[10px] lg:bg-white lg:hover:bg-[#E0EAFF] lg:px-4 py-3 lg:dark:bg-dark-100 lg:dark:hover:bg-[#1F2858] lg:dark:text-gray-default"
                      :to="switchLocalePath('en')"
                      @click="toggleNavbar"
                      ><span class="flex-1">English</span
                      ><u-icon
                        filled
                        v-if="locale === 'en'"
                        name="right"
                        class="text-[16px] dark:text-[#3652D9] text-[#3754E5]"
                      ></u-icon
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="text-[14px] lg:text-[12px] font-normal leading-[normal] text-[#1D1F29] dark:text-gray-default flex items-center rounded-[10px] lg:bg-white lg:hover:bg-[#E0EAFF] lg:px-4 py-3 lg:dark:bg-dark-100 lg:dark:hover:bg-[#1F2858] lg:dark:text-gray-default"
                      :to="switchLocalePath('zh-hans')"
                      @click="toggleNavbar"
                      ><span class="flex-1">简体中文</span
                      ><u-icon
                        filled
                        v-if="locale === 'zh-hans'"
                        name="right"
                        class="text-[16px] dark:text-[#3652D9] text-[#3754E5]"
                      ></u-icon
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      class="text-[14px] lg:text-[12px] font-normal leading-[normal] text-[#1D1F29] dark:text-gray-default flex items-center rounded-[10px] lg:bg-white lg:hover:bg-[#E0EAFF] lg:px-4 py-3 lg:dark:bg-dark-100 lg:dark:hover:bg-[#1F2858] lg:dark:text-gray-default"
                      :to="switchLocalePath('zh-hant')"
                      @click="toggleNavbar"
                      ><span class="flex-1">繁体中文</span
                      ><u-icon
                        filled
                        v-if="locale === 'zh-hant'"
                        name="right"
                        class="text-[16px] dark:text-[#3652D9] text-[#3754E5]"
                      ></u-icon
                    ></NuxtLink>
                  </li>
                </ul>
              </ClientOnly>
            </div>
          </div>
          <ClientOnly>
            <div
              class="flex justify-between h-[54px] lg:h-auto items-center my-3 font-bold lg:font-normal"
            >
              <span class="block lg:hidden">{{
                colorMode.preference === 'dark'
                  ? $t('home.navigation.mode.light')
                  : $t('home.navigation.mode.dark')
              }}</span>
              <ColorScheme placeholder="" tag="button">
                <button class="ml-10" @click="toggleTheme">
                  <u-icon
                    :name="colorMode.value === 'dark' ? 'lighting' : 'dark'"
                    filled
                    class="text-[20px]"
                  ></u-icon>
                </button>
              </ColorScheme>
            </div>
          </ClientOnly>
          <U-Button
            class="h-11 px-5 ml-0 lg:ml-10 mt-3 lg:mt-0 text-[14px] mx-auto w-full lg:w-auto"
            @click="onClickApiAccess"
            >{{ $t('home.navigation.access') }}</U-Button
          >
        </div>
      </nav>
    </header>

    <teleport to="body">
      <div
        class="block fixed bottom-[32px] right-[24px] lg:bottom-10 lg:right-[180px] z-10"
        ref="popupRef"
        v-if="notApiAccessPage"
      >
        <button
          class="dark:drop-shadow-[0px_8px_32px_rgba(0,27,159,0.65)] drop-shadow-[0px_8px_32px_rgba(0,27,159,0.4)]"
          @click="onClickApiAccess"
        >
          <ClientOnly
            ><u-icon
              class="text-[#3754E5] dark:text-[#3652D9] text-[52px]"
              :name="!popupStore.accessPopup ? 'message' : 'arrow-down'"
              filled
            ></u-icon
          ></ClientOnly>
        </button>
        <ClientOnly>
          <home-access-popup
            :class="popupStore.accessPopup ? 'block' : 'hidden'"
          ></home-access-popup>
        </ClientOnly>
      </div>
    </teleport>
  </div>
</template>

<script setup>
const { locale, t } = useI18n()
const colorMode = useColorMode()
const localePath = useLocalePath()
const router = useRouter()
const route = useRoute()

const homeStore = useHomeStore()

const toggleStatus = computed(() => homeStore.isMenuOpening)
const toggleNavbar = (v) => {
  if (!isMobile()) return
  if (typeof v === 'boolean') {
    homeStore.toggleMenuStatus(v)
  } else {
    homeStore.toggleMenuStatus()
  }
}
const dropdownStatus = ref(false)
const toggleDropdown = () => {
  if (!isMobile()) return
  dropdownStatus.value = !dropdownStatus.value
}

const toggleIcon = computed(() => {
  return toggleStatus.value
    ? colorMode.preference === 'dark'
      ? 'close'
      : 'light/close'
    : colorMode.preference === 'dark'
    ? 'menu'
    : 'light/menu'
})

const toggleTheme = () => {
  colorMode.preference = colorMode?.preference === 'dark' ? 'light' : 'dark'
  toggleNavbar()
}

const navs = computed(() => [
  {
    title: t('home.navigation.home'),
    to: localePath('/'),
  },
  {
    title: t('home.navigation.guide'),
    to: localePath('/guide'),
  },
  {
    title: t('home.navigation.doc'),
    to: useApiDocRoute('product-architecture', locale === 'en' ? 'en' : 'zh'),
    target: '_blank',
  },
])

const apiAccessPage = '/api-access'
const store = usePopupStore()
const notApiAccessPage = computed(
  () => route.path !== localePath(apiAccessPage),
)
const onClickApiAccess = () => {
  toggleNavbar(false)
  if (isMobile()) {
    router.push(localePath(apiAccessPage))
    return
  }

  store.toggleAccessPopup()
}

const popupRef = ref(null)
const popupStore = usePopupStore()
// side-effect: header button can not toggle popup
onClickOutside(popupRef, () => {
  // pc 端才执行
  if (!isMobile()) {
    popupStore.toggleAccessPopup(false)
  }
})
</script>
