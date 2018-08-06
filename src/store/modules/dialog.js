export default {
  state: {
    show:false
  },
  // getters: {
  //   not_show (state) {
  //     return !state.show
  //   }
  // },
  mutations: {
    switch_dialog (state) {
      state.show = !state.show
    }
  },
  actions: {
    switch_dialog (context) {
      context.commit('switch_dialog')
    }
  }
}
