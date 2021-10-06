export const state = () => ({
  nightMode: true,
})

export const mutations = {
  toggleDarkMode(state) {
    state.nightMode = !state.nightMode;
  },
}
