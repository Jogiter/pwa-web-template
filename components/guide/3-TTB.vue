<template>
  <div
    class="relative w-full pt-[100%] text-center bg-[#F6F7F8] dark:bg-[#15151C] rounded-[16px] lg:rounded-[24px] gap-y-5 lg:gap-x-6 bg-no-repeat bg-cover"
    :style="{
      backgroundImage: `url(${props.img})`,
    }"
  >
    <div
      class="absolute left-10 right-10"
      :class="props.position === 'bottom' ? 'top-10' : 'bottom-10'"
    >
      <h4 class="text-[24px] font-bold text-[#1D1F29] dark:text-[#F5F5F7] mb-4">
        {{ props.title }}
      </h4>
      <p class="text-[16px] font-normal text-[#868E9C] dark:text-[#8C8F9A]">
        {{ props.desc }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  title: String,
  desc: String,
  position: String,
})
</script>
