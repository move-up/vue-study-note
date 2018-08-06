export default {
  state: {
    inputValue: '1xxx',
    message: '2xxx'
  },
  mutations: {
    updateValue (state, value) {
      state.inputValue = value
    },
    updateMessage (state, value) {
      state.message = value
    }
  },
  actions: {
    updateValue (context, value) {
      context.commit('updateValue', value)
    },
    updateMessage (context, value) {
      context.commit('updateMessage', value)
    }
  }
}
