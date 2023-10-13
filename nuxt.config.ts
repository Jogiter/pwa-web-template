// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    inlineSSRStyles: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    './modules/u-icon.ts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // f
  },
  i18n: {
    debug: false,
    strategy: 'prefix_and_default',
    baseUrl: 'http://unn.com',
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'zh-hans',
        iso: 'zh-CN',
        file: 'zh-Hans.json',
        name: 'Simplified Chinese',
      },
      {
        code: 'zh-hant',
        iso: 'zh-HK',
        file: 'zh-Hant.json',
        name: 'Traditional Chinese',
      },
      {
        code: 'zh-hant',
        iso: 'zh-TW',
        file: 'zh-Hant.json',
        name: 'Traditional Chinese',
      },
      {
        code: 'zh-hant',
        iso: 'zh-MO',
        file: 'zh-Hant.json',
        name: 'Traditional Chinese',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh-hans',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport:
        'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no',
      meta: [{ name: 'theme-color', content: '#1976d2' }],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'mask-icon',
          href: '/mask-icon.svg',
          color: '#FFFFFF',
        },
      ],
    },
  },
  imports: {
    dirs: ['./stores', './constants'],
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'acceptHMRUpdate',
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  nitro: {
    prerender: {
      ignore: [
        // todo: 忽略所有的 demo 路由
        '/demo',
        '/en/demo',
        '/zh-hant/demo',
      ],
    },
  },

  spaLoadingTemplate: false,

  postcss: {
    plugins: {
      'postcss-import': {},
      // 'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [{ src: '~/plugins/onesignal.ts', mode: 'client' }],

  pwa: {
    // registerType?: 'prompt' | 'autoUpdate'
    // registerType: 'prompt',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#1976d2',
      background_color: '#faefae',
      display: 'standalone',
      scope: './',
      start_url: './',
      icons: [
        {
          src: 'icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      description: 'description about pwa',
    },

    workbox: {
      // for spa
      navigateFallback: '/',
      // globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      // clientsClaim: true,
      // skipWaiting: true,
    },
    // client: {
    //   installPrompt: true,
    //   // you don't need to include this: only for testing purposes
    //   // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    //   periodicSyncForUpdates: 20,
    // },

    // must setup to enable workbox
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
