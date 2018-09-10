import Cookies from 'js-cookie'

// 这里面是两个input组件
export default {
  state: {
    inputValue: Cookies.get('inputValue')
      ? JSON.parse(Cookies.get('inputValue'))
      : '1111',
    message: Cookies.get('inputValue')
    ? JSON.parse(Cookies.get('inputValue'))
    : '2222',
  },
  mutations: {
    updateValue (state, value) {
      state.inputValue = value
      // 同步到cookie中
      const expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 过期时间7天
      Cookies.set('inputValue', JSON.stringify(value), { expires })
    },
    updateMessage (state, value) {
      state.message = value
      // 同步到cookie中
      const expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 过期时间7天
      Cookies.set('message', JSON.stringify(value), { expires })
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
