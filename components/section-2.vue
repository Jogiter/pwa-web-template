<template>
  <div
    class="flex flex-col justify-center items-center text-center rounded-2xl lg:rounded-3xl pt-[40px] lg:pt-[60px]"
    :class="
      props.isPrimary
        ? 'dark:bg-primary-default bg-primary-darker'
        : 'dark:bg-dark-100 bg-gray-light'
    "
  >
    <div class="flex-1 px-4 lg:px-5">
      <h2
        class="text-[22px] lg:text-[32px] font-bold leading-[normal] mb-4"
        :class="
          props.isPrimary
            ? 'text-white dark:text-gray-default'
            : 'text-dark-200 dark:text-gray-default'
        "
      >
        {{ props.title }}
      </h2>
      <p
        class="lg:w-[456px] flex items-center justify-center text-[14px] lg:text-[20px] font-normal leading-[normal] mb-[38px]"
        :class="
          props.isPrimary
            ? 'text-[#B8CBFF] dark:text-primary-light'
            : 'text-gray-darker dark:text-gray-dark'
        "
      >
        {{ props.description }}
      </p>
    </div>
    <div>
      <div class="mx-[58px] lg:w-[324px] lg:mx-auto">
        <ClientOnly>
          <img
            loading="lazy"
            :src="props.image"
            alt=""
            width="648"
            height="832"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  isPrimary: Boolean,
})
</script>
