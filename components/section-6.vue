<template>
  <div
    class="flex justify-center items-center w-[115px] h-[48px] lg:w-[230px] lg:h-[96px] rounded-[12.8px] dark:bg-[#15172F] bg-gray-light"
  >
    <ClientOnly>
      <img loading="lazy" :src="props.src" alt="" width="460" height="193" />
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
})
</script>
