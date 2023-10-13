<template>
  <!-- 8th-part -->
  <section
    class="relative lg:w-[1243px] mx-auto py-[60px] lg:py-[120px] flex flex-col-reverse lg:flex-row lg:justify-between px-5 lg:px-0"
  >
    <div class="flex-1">
      <p class="flex items-center mb-4 lg:mb-6 mt-[60px] lg:mt-0">
        <NuxtLink :to="localePath('/')" class="inline-flex items-center">
          <Logo />
        </NuxtLink>
      </p>
      <p
        class="flex w-[94px] lg:w-[112px] justify-between mb-[40px] lg:mb-[80px]"
      >
        <a href="" target="_blank">
          <u-icon
            name="twitter"
            class="text-[18px] lg:text-[24px]"
            filled
          ></u-icon>
        </a>
        <a href="https://t.me/unn_cs" target="_blank">
          <u-icon
            name="telegram"
            class="text-[18px] lg:text-[24px]"
            filled
          ></u-icon>
        </a>
        <a href="" target="_blank">
          <u-icon
            name="facebook"
            class="text-[18px] lg:text-[24px]"
            filled
          ></u-icon>
        </a>
      </p>
      <p
        class="text-[12px] lg:text-[14px] font-normal leading-[normal] dark:text-gray-dark text-gray-darker"
      >
        {{ $t('home.part8.address', [new Date().getFullYear()]) }}
      </p>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div class="lg:w-[392px]">
        <h4
          class="text-[14px] lg:text-[16px] font-bold leading-[normal] text-dark-200 dark:text-gray-default mb-5"
        >
          {{ $t('home.part8.docs.title') }}
        </h4>
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink
            :to="getRoute('get-access-token-interface')"
            target="_blank"
            >{{ $t('home.part8.docs.link0') }}</NuxtLink
          >
        </p>
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :to="getRoute('unnpay-usage-process')" target="_blank">{{
            $t('home.part8.docs.link1')
          }}</NuxtLink>
        </p>
        <!-- <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :to="getRoute('rights-profile')" target="_blank">{{
            $t('home.part8.docs.link2')
          }}</NuxtLink>
        </p> -->
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :to="getRoute('user-deposit')" target="_blank">{{
            $t('home.part8.docs.link3')
          }}</NuxtLink>
        </p>
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :to="getRoute('user-withdrawal')" target="_blank">{{
            $t('home.part8.docs.link4')
          }}</NuxtLink>
        </p>
        <!-- <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :to="getRoute('product-architecture')" target="_blank">{{
            $t('home.part8.docs.link5')
          }}</NuxtLink>
        </p>
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :to="getRoute('product-architecture')" target="_blank">{{
            $t('home.part8.docs.link6')
          }}</NuxtLink>
        </p> -->
      </div>
      <div class="ml-0 lg:ml-6 mt-5 lg:mt-0">
        <h4
          class="text-[14px] lg:text-[16px] font-bold leading-[normal] text-dark-200 dark:text-gray-default mb-5"
        >
          {{ $t('home.part8.products.title') }}
        </h4>
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :href="downloadLink.ios" target="_blank">{{
            $t('home.part8.products.link0')
          }}</NuxtLink>
        </p>
        <p class="link-gray text-[14px] font-normal leading-[normal] mb-5">
          <NuxtLink :href="downloadLink.android" target="_blank">{{
            $t('home.part8.products.link1')
          }}</NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IAPI_DOC_ROUTE } from '@/utils/useApiDocRoute'
import { useI18n, useApiDocRoute, useLocalePath, downloadLink } from '#imports'
const localePath = useLocalePath()

const { locale } = useI18n()
const getRoute = (key: IAPI_DOC_ROUTE) =>
  useApiDocRoute(key, locale.value === 'en' ? 'en' : 'zh')
</script>
