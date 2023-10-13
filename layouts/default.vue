<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
const { locale } = useI18n()
const homeStore = useHomeStore()

useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
  bodyAttrs: {
    class: {
      'leading-[normal]': true,

      // setup background-color
      'bg-white': true,
      'dark:bg-black': true,

      // setup font-family
      'font-alimama': () => locale.value === 'en',
      'font-alibaba': () => locale.value.indexOf('zh') > -1,

      // lg screen fit content
      'lg:min-w-max': true,

      'overflow-hidden': () => homeStore.isMenuOpening,
      'overflow-auto': () => !homeStore.isMenuOpening,
    },
  },
})
</script>
