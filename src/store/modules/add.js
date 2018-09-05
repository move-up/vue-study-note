
import axios from 'axios'
import { getAddLength } from '@/api/api'
let p = {}

export default {
  state: {
    count: 10000
  },
  mutations: {
    add (state, n) {
      state.count += Number(n)
    }
  },
  actions: {
    add (context, n) {
      // axios.get('https://www.easy-mock.com/mock/5a168608b38a3c5b4c7a7163/example/plusnum')
      getAddLength(p).then(res => {
        console.log('js res.num: ' + res.num)
        context.commit('add',res.num)
      })
    }
  }
}
