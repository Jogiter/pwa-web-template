<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <client-only>
    <div v-if="$pwa.needRefresh" class="fixed top-[100px] right-10 bg-[#ff0000] z-[99999]">
      <span>
        New content available, click on reload button to update.
      </span>

      <button @click="onreload">Reload</button>
    </div>
  </client-only>
</template>

<script setup>
if (typeof window !== 'undefined') {
  import('./pwa')
}

const { t } = useI18n()
const { $pwa } = useNuxtApp()

onMounted(() => {
  const log = console.log
  log($pwa)
  if ($pwa.offlineReady) {
    console.error('App ready to work offline')
  }
})

const onreload = () => {
  console.error('reload called')
  $pwa.updateServiceWorker()

  nextTick(() => {
    console.error('reload called nextTick');
    location.reload();
  });
}

useHead({
  title: t('seo.title'),
  ogTitle: t('seo.title'),
  meta: [
    {
      name: 'description',
      content: t('seo.description'),
    },
    {
      name: 'og:description',
      content: t('seo.description'),
    },
    {
      name: 'keywords',
      content: t('seo.keywords') + 'update update2',
    },
  ],
})
</script>
