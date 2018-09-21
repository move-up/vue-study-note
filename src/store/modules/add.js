
import Cookies from 'js-cookie'
import { getAddLength } from '@/api/api'
let p = {}

export default {
  state: {
    count: Cookies.get('count')
    ? JSON.parse(Cookies.get('count'))
    : 10000,
  },
  mutations: {
    add (state, n) {
      state.count += Number(n)
      const expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 过期时间7天
      Cookies.set('count', JSON.stringify(n), { expires })
    }
  },
  actions: {
    add (context, n) {
      // axios.get('https://www.easy-mock.com/mock/5a168608b38a3c5b4c7a7163/example/plusnum')
      getAddLength(p).then(res => {
        context.commit('add',res.num)
      })
    }
  }
}
