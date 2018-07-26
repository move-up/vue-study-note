import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'//全局状态管理
import Cookies from 'js-cookie'



import Layout from '@/components/Layout'
import Main from '@/components/main'

// 路由切割1
const Home = () => import('@/pages/home/index')

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
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
    //   {
    //   //首页
    //   path: '/home',
    //   component: resolve => { require(['@/pages/home/index'], resolve) },
    //   name: 'home',
    //   title: '首页'
    // },
    // 路由切割2
    {path: '/home', component: Home},
    {
      path: '/typeof',
      component: resolve => { require(['@/pages/typeof/index'], resolve) },
      name: 'typeof',
      title: '判断数据类型'
    },
    {
      path: '/timer',
      component: resolve => { require(['@/pages/timer/index'], resolve) },
      name: 'timer',
      title: '定时器'
    },
    {
      path: '/render',
      component: resolve => { require(['@/pages/render/index'], resolve) },
      name: 'render',
      title: 'render函数'
    },
    {
      path: '/pagination',
      component: resolve => { require(['@/pages/pagination/index'], resolve) },
      name: 'pagination',
      title: '分页'
    },
    {
      path: '/carousel',
      component: resolve => { require(['@/pages/carousel/index'], resolve) },
      name: 'carousel',
      title: '轮播'
    },
    {
      path: '/table',
      component: resolve => { require(['@/pages/tableEdite/index'], resolve) },
      name: 'tableEdite',
      title: '编辑表格'
    },
    {
      path: '/tableAddLine',
      component: resolve => { require(['@/pages/tableEdite/tableAddLine'], resolve) },
      name: 'tableAddLine',
      title: '表格添加或删除一行'
    },
    {
      path: '/tableData',
      component: resolve => { require(['@/pages/tableEdite/tableData'], resolve) },
      name: 'tableData',
      title: '表格'
    },
    {
      path: '/tableMuti',
      component: resolve => { require(['@/pages/tableEdite/tableMuti'], resolve) },
      name: 'tableMuti',
      title: '表格'
    },
    ]
  },
  {
    path: '/muti1',
    components: {
      defaulst: 'carousel',
      a: 'pagination',
    }
  },
  {
    path: '/muti2',
    components: {
      defaulst: 'pagination',
      a: 'carousel',
    }
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: resolve => { require(['@/pages/todolist/index'], resolve) },
    title: 'todolist'
  },
]
//小模板
const complateRouter = [
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
]
//饿了么组件
const elementRouter = [
  {
  path: '/mock',
  component: Layout,
  children: [
    {
      path: '/element',
      component: resolve => { require(['@/pages/element/index'], resolve) },
      name: 'element',
      title: '饿了么组件'
    },
    {
      path: '/breadCrumb',
      component: resolve => { require(['@/pages/element/breadCrumb'], resolve) },
      name: 'breadCrumb',
      title: '面包屑'
    },
    {
      path: '/tab',
      component: resolve => { require(['@/pages/element/tab'], resolve) },
      name: 'tab',
      title: '标签页'
    },
  ]}
]
//api
const apiRouter = [
  {
  path: '/mock',
  component: Layout,
  children: [
    {
      path: '/mock',
      component: resolve => { require(['@/pages/mock/index'], resolve) },
      name: 'mock',
      title: 'mock接口'
    },
    {
      path: '/api',
      component: resolve => { require(['@/pages/mock/api'], resolve) },
      name: 'api',
      title: '分页'
    },
    {
      path: '/api2',
      component: resolve => { require(['@/pages/mock/api2'], resolve) },
      name: 'api2',
      title: ''
    },
    {
      path: '/routerPush',
      component: resolve => { require(['@/pages/mock/routerPush'], resolve) },
      name: 'routerPush',
      title: '路由传参'
    },
    {
      path: '/routerPush/detail/:userId',
      component: resolve => { require(['@/pages/mock/detail'], resolve) },
      name: 'detail',
      title: '详情页'
    },
    // 动态路径参数 以冒号开头
    /* {
      path: '/api2/:id',
      component: resolve => { require(['@/pages/mock/apiDetail'], resolve) },
      name: '详情'
    }, */
  ]}
]

const router =  new Router({
  routes: [...defaultRouter, ...menuRouter, ...complateRouter, ...elementRouter, ...apiRouter]
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
