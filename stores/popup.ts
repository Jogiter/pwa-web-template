export const usePopupStore = defineStore('popup', () => {
  const accessPopup = ref(false)

  const toggleAccessPopup = (v: boolean | undefined) => {
    accessPopup.value = v !== undefined ? v : !accessPopup.value
  }

  return {
    accessPopup,
    toggleAccessPopup,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePopupStore, import.meta.hot))
}
