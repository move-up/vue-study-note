import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Todolist from '@/pages/Todolist'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
    }
  ]
})

export default router

/*router.beforeEach((to,from,next) =>{ //路由跳转之前的拦截 to:将要跳转去的route; from:从改route跳转；next: 继续跳转
  console.log(to)
})*/
