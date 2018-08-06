import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import dialog from './modules/dialog'
import increment from './modules/increment'
import inputData from './modules/inputData'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  getters,
  modules: {
    user,
    dialog, //后面的属性值dialog对应文件名dialog
    increment,
    inputData
  },
})

