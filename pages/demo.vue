<template>
  <div class="p-4">
    <!-- <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p> -->
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-gray-900"
    >
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2 dark:text-white">
          The Coldest Sunset
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
      </div>
    </div>

    <hr />
    <section>
      <h2>i18n & i10n</h2>
      <div>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="zh">zh</option>
        </select>
        <p>welcome: {{ $t('welcome') }}</p>
        <p>locale: {{ locale }}</p>
        <ul>
          <li v-for="locale in availableLocales" :key="locale.code">
            <NuxtLink :to="switchLocalePath(locale.code)">{{
            locale.name
            }}</NuxtLink>
          </li>
        </ul>
        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
        <NuxtLink :to="switchLocalePath('zh')">chinese</NuxtLink>

        <NuxtLink :to="localePath('index')">{{ $t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
      </div>
    </section>

    <hr />
    <section>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </section>

    <!-- daisyui demo -->
    <div class="dropdown dropdown-bottom dropdown-start">
      <label tabindex="0" class="btn m-1">Click</label>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale, getLocaleCookie, setLocaleCookie } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

console.log(locale, locale.value, 1, getLocaleCookie())


const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const nuxtApp = useNuxtApp()
console.log('$i18n=>', nuxtApp.$i18n)

watch(locale, (value) => {
  console.log('language', value)
  // Cookies.set('language', value)
  setLocaleCookie(value)
  // nuxtApp.$i18n.loadLocale(value)
  // nuxtApp.$i18n.setLocale(value)
  window.location.reload()
})

definePageMeta({
  layout: false
})


const colorMode = useColorMode()
console.log(colorMode.preference)
</script>
