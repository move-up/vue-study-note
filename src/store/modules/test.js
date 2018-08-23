import Cookies from 'js-cookie'

export default {
  namespaced: true,
  state: {
    inputValue: Cookies.get('inputValue')
      ? JSON.parse(Cookies.get('inputValue'))
      : '默认值',
  },
  mutations: {
    updateValue (state, value) {
      state.inputValue = value
      // 同步到cookie中
      const expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 过期时间7天
      Cookies.set('inputValue', JSON.stringify(value), { expires })
    }
  },
  actions: {
    updateValue (context, value) {
      console.log(value)
      context.commit('updateValue', value)
    }
  }
}
