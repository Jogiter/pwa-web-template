<template>
  <div>
    <Home-Header></Home-Header>
    <!-- only works in mobile -->
    <div :class="toggleStatus ? 'mt-[60px]' : 'mt-0'">
      <home-access-popup></home-access-popup>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (!isMobile()) {
    window.location.href = '/'
  }
})

const homeStore = useHomeStore()

const toggleStatus = computed(() => homeStore.isMenuOpening)
</script>
