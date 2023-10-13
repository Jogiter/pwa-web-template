export const useHomeStore = defineStore('home', () => {
  // mobile toggle menu fold or unfold
  const isMenuOpening = ref(false)

  const toggleMenuStatus = (v: boolean | undefined) => {
    isMenuOpening.value = v !== undefined ? v : !isMenuOpening.value
  }

  return {
    isMenuOpening,
    toggleMenuStatus,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
}
