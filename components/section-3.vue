<template>
  <div
    class="w-full lg:w-auto rounded-2xl lg:rounded-3xl dark:bg-[#15151CBF] bg-[#F5F6F7BF] backdrop-blur-sm p-7 lg:p-10 min-h-[150px] lg:min-h-[226px]"
  >
    <div class="w-7 lg:w-12">
      <ClientOnly>
        <img loading="lazy" :src="props.icon" alt="" width="96" height="97" />
      </ClientOnly>
    </div>
    <h2
      class="lg:w-[416px] text-[16px] lg:text-[24px] font-normal leading-[normal] dark:text-gray-default mt-10"
    >
      {{ props.title }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
})
</script>
