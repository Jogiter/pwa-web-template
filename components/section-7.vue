<template>
  <div class="flex flex-col items-center w-[90px] lg:w-auto">
    <ClientOnly>
      <u-icon
        :name="props.icon"
        filled
        class="text-[40px] lg:text-[80px] mb-3 lg:mb-6"
      ></u-icon>
    </ClientOnly>
    <div
      class="w-[14px] h-[14px] lg:w-7 lg:h-7 rounded-full text-gray-default bg-primary-lighter/20 text-[8px] lg:text-[14px] font-bold leading-[normal] flex justify-center items-center mb-2 lg:mb-4"
    >
      {{ props.index }}
    </div>
    <p
      class="text-center text-[12px] lg:text-[20px] font-normal leading-[normal] lg:w-[184px] text-gray-default"
    >
      {{ props.title }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  index: Number,
  title: String,
})
</script>
