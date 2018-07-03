import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'//全局状态管理
import Cookies from 'js-cookie'



import Layout from '@/components/Layout'
import Main from '@/components/main'

Vue.use(Router)

const defaultRouter = [
    //登录
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/pages/login/index'], resolve) },
      //component: () => import('@/pages/login/index'),//用这种办法要去改config下面assetsPublicPath: '/vue-study-note/dist'

    }
]

const menuRouter = [
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
    },
    {
      path: '/typeof',
      component: resolve => { require(['@/pages/typeof/index'], resolve) },
      name: 'typeof'
    },
    {
      path: '/mock',
      component: resolve => { require(['@/pages/mock/index'], resolve) },
      name: 'typeof'
    },
    {
      path: '/api',
      component: resolve => { require(['@/pages/mock/api'], resolve) },
      name: 'api'
    },
    {
      path: '/timer',
      component: resolve => { require(['@/pages/timer/index'], resolve) },
      name: 'timer'
    },]
  },
  {
    path: '/userCenter/index',
    component: Main,
    redirect: '/userCenter/index',
    title: '用户中心',
    children: [{
      path: '/userCenter/index',
      component: resolve => { require(['@/pages/userCenter/index'], resolve) },
      name: 'userCenter',
      meta: { title: '个人信息', icon: 'home', noCache: true }
    },
    {
      path: '/userCenter/changepw',
      component: resolve => { require(['@/pages/userCenter/changepw'], resolve) },
      name: 'changepw',
      meta: { title: '修改密码', icon: 'home', noCache: true }
    }]
  },
  {
    path: '/detail',
    component: Main,
    title: '商品详情',
    children: [{
      path: '/detail/fruit',
      component: resolve => { require(['@/pages/detail/fruit'], resolve) },
      name: 'fruit',
      meta: { title: '水果', icon: 'home', noCache: true }
    },
    {
      path: '/detail/vegetable',
      component: resolve => { require(['@/pages/detail/vegetable'], resolve) },
      name: 'vegetable',
      meta: { title: '蔬菜', icon: 'home', noCache: true }
    }]
  },
  //todolist
  {
    path: '/todolist',
    name: 'todolist',
    component: resolve => { require(['@/pages/todolist/index'], resolve) },

  },
]

const router =  new Router({
  routes: [...defaultRouter, ...menuRouter]
})

// 路由拦截
router.beforeEach(({ meta, path, name }, from, next) => {
  var { auth = true } = meta
  //var auth = meta.auth === undefined ? true : meta.auth;
  var isLogin = store.state['user']['isLogin'] //true用户已登录， false用户未登录
  if (isLogin && path === '/login') {
    return next({ path: '/' })
  }
  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

export default router

/*router.beforeEach((to,from,next) =>{ //路由跳转之前的拦截 to:将要跳转去的route; from:从该route跳转；next: 继续跳转
  console.log(to)
})*/
