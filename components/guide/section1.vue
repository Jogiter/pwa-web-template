<template>
  <!-- 1th part -->
  <section
    class="w-full h-[300px] lg:h-[250px] rounded-[16px] lg:rounded-[32px] my-5 lg:my-[80px] bg-[url('@/assets/icons/mobile/guide-1-1.svg')] lg:bg-[url('@/assets/icons/guide-1-1.svg')] bg-no-repeat bg-cover"
  >
    <div
      class="h-full flex items-center justify-center flex-col-reverse lg:flex-row"
    >
      <h2
        class="text-[36px] lg:text-[58px] font-bold text-[#1D1F29] dark:text-[#F5F5F7]"
      >
        {{ $t('guide.part1.title') }}
      </h2>
      <div class="lg:ml-5 mb-4 w-[93px] aspect-[93/91]">
        <img
          src="@/assets/images/2x/light/en/guide-light.png"
          alt=""
          width="186"
          height="182"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>
