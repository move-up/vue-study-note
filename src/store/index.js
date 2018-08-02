import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import dialog from './modules/dialog'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  getters,
  modules: {
    user,
    dialog: dialog //后面的属性值dialog对应文件名dialog
  },
  // state: {
  //   show: false
  // }
})


//  const store = new Vuex.Store({

//   strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
//   getters,
//   modules: {
//     user
//   },
//   state: {
//     count: 0
//   },
//   mutations (state) {
//     increment: state => state.count++;
//     decrement: state => state.count--
//   }
//  })

//  export default store

//  store.commit('increment')

// console.log(store.state.count)
