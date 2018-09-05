// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import _ from 'lodash'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
import 'iview/dist/styles/iview.css'

window._ = _

//import ECharts from 'vue-echarts/components/ECharts'

Vue.use(Element)
Vue.use(iView, { locale });

//Vue.component('chart', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
