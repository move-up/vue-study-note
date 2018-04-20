import Vue from 'vue'
import Router from 'vue-router'
/* import Index from '@/pages/home/index'
import Login from '@/pages/login/index'
import Todolist from '@/pages/Todolist' */
import store from '@/store/index'


import Layout from '@/components/Layout'

Vue.use(Router)

const router =  new Router({
  routes: [
    //懒加载路由
    //首页
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: '/home',
        component: resolve => { require(['@/pages/home/index'], resolve) },
        name: 'home',
        meta: { title: 'home', icon: 'home', noCache: true }
      }]
    },
    //登录
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/pages/login/index'], resolve) },
      //component: () => import('@/pages/login/index'),//用这种办法要去改config下面assetsPublicPath: '/vue-study-note/dist/'

    },
    //todolist
    {
      path: '/todolist',
      name: 'todolist',
      component: resolve => { require(['@/pages/todolist/index'], resolve) },

    },
    /* {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
    } */
  ]
})

// 路由拦截
router.beforeEach(({ meta, path, name }, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state['user']['name']) //true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

export default router

/*router.beforeEach((to,from,next) =>{ //路由跳转之前的拦截 to:将要跳转去的route; from:从改route跳转；next: 继续跳转
  console.log(to)
})*/
