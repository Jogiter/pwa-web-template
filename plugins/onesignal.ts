import OneSignal from '@onesignal/onesignal-vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(OneSignal, {
    appId: '1eb0d43d-90a6-4ab0-9a04-13523be8bfb1',
  })
})
