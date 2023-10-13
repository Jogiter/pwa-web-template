<template>
  <!-- 3th-part -->
  <section
    class="py-[60px] lg:py-[120px] mx-auto lg:w-[1512px] bg-[url('~/assets/icons/mobile/bg-3.svg')] bg-cover lg:bg-auto lg:bg-[url('~/assets/icons/bg-3.svg')] lg:bg-[42%_38%] bg-no-repeat px-5 lg:px-0"
  >
    <div class="block lg:hidden mb-5 lg:mb-0">
      <p
        class="font-bold text-[28px] lg:text-[48px] leading-[normal] dark:text-gray-default text-dark-200 text-center lg:text-left"
      >
        {{ $t('home.part3.title') }}
      </p>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-center gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-6 mb-5 lg:mb-6"
    >
      <Section-3 :icon="book" :title="$t('home.part3.item0')"> </Section-3>
      <Section-3 :icon="money" :title="$t('home.part3.item1')"> </Section-3>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between items-center mb-5 lg:mb-6 gap-y-5 lg:gap-y-0"
    >
      <Section-3 :icon="coin" :title="$t('home.part3.item2')"> </Section-3>
      <div class="hidden lg:block lg:shrink-0">
        <p
          class="font-bold text-[48px] leading-[normal] dark:text-gray-default text-dark-200"
        >
          {{ $t('home.part3.title') }}
        </p>
      </div>
      <Section-3 :icon="report" :title="$t('home.part3.item3')"> </Section-3>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-center gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-6"
    >
      <Section-3 :icon="secure" :title="$t('home.part3.item4')"> </Section-3>
      <Section-3 :icon="user" :title="$t('home.part3.item5')"> </Section-3>
    </div>
  </section>
</template>

<script setup>
import book from '~/assets/images/2x/dark/en/book.png'
import money from '~/assets/images/2x/dark/en/money.png'
import coin from '~/assets/images/2x/dark/en/coin.png'
import report from '~/assets/images/2x/dark/en/report.png'
import secure from '~/assets/images/2x/dark/en/secure.png'
import user from '~/assets/images/2x/dark/en/user.png'
</script>
