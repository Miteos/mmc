export const state = () => ({
  barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
  barImage:
    'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
  drawer: null,
})

export const mutations = {
  updateBarImage(state, barImage) {
    state.barImage = barImage
  },
  updateDrawer(state, payload) {
    state.drawer = payload
  },
}

export const getters = {
  getDrawer(state) {
    return state.drawer
  },
  getBarColor(state) {
    return state.barColor
  },
  getBarImage(state) {
    return state.barImage
  },
}
