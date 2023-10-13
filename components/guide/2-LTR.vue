<template>
  <div
    class="flex bg-[#F6F7F8] dark:bg-[#0C0C0F] lg:bg-[#F6F7F8] dark:lg:bg-[#0C0C0F] h-[400px] lg:h-[308px] p-4 lg:p-5 rounded-[16px] lg:rounded-[32px] lg:gap-x-6 flex-col-reverse"
    :class="props.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div class="lg:w-[420px] lg:h-[268px] shrink-0">
      <ClientOnly>
        <img :src="props.img" alt="" width="840" height="536" />
      </ClientOnly>
    </div>
    <div class="flex-1 lg:py-3 lg:pl-3">
      <h4
        class="text-[22px] lg:text-[24px] font-bold text-[#1D1F29] dark:text-[#F5F5F7] mt-4 lg:mt-0 mb-4"
      >
        {{ props.title }}
      </h4>
      <p
        class="text-[14px] lg:text-[20px] font-normal text-[#868E9C] dark:text-[#8C8F9A]"
      >
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
