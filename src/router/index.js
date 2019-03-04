// 0. 使用模块化机制编程，导入Vue和VueRouter，要调用 0-2 Vue.use（Router）
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'//全局状态管理
import Cookies from 'js-cookie'


// 1. 定义（路由）组件，可以从其他文件import进来
import Layout from '@/components/Layout'
import Main from '@/components/main'
import testParent from '@/pages/test/index'

// 路由切割1
const Home = () => import('@/pages/home/index')
const Interval = () => import('@/pages/timer/interval')
const Timeout = () => import('@/pages/timer/timeout')

// 0-2 调用
Vue.use(Router)

// 2. 定义路由 每个路由映射一个组件
const defaultRouter = [
    //登录
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/pages/login/index'], resolve) }
      //component: () => import('@/pages/login/index'),//用这种办法要去改config下面assetsPublicPath: '/vue-study-note/dist'

    },
    {
      path: '/store',
      name: 'store',
      component: resolve => { require(['@/pages/login/store'], resolve) }
    },
    {
      path: '/store-add',
      name: 'store-add',
      component: resolve => { require(['@/pages/login/add'], resolve) }
    }
]

//动态路由匹配
const testRouter = [
  {
    path: '/user/:id',
    component: testParent,
    children: [
      {
        path: '/user/:id',
        name: 'user',
        component: resolve => { require(['@/pages/test/user'], resolve) }
      }
    ]

  },
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
      // redirect: { name: 'upload' },//重定向
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
      path: '/table',
      component: resolve => { require(['@/pages/tableEdite/index'], resolve) },
      name: 'table',
      title: '编辑表格'
    },
    {
      path: '/tableAddLine',
      component: resolve => { require(['@/pages/tableEdite/tableAddLine'], resolve) },
      name: 'tableAddLine',
      title: '表格添加或删除一行'
    },
    {
      path: '/tableCols',
      component: resolve => { require(['@/pages/tableEdite/tableCols'], resolve) },
      name: 'tableCols',
      title: '表格'
    },
    {
      path: '/tableMuti',
      component: resolve => { require(['@/pages/tableEdite/tableMuti'], resolve) },
      name: 'tableMuti',
      title: '表格'
    },
    {
      path: '/dragTable',
      component: resolve => { require(['@/pages/tableEdite/dragTable'], resolve) },
      name: 'dragTable',
      title: '拖拽表格'
    },
    {
      path: '/draggable',
      component: resolve => { require(['@/pages/draggable/index'], resolve) },
      name: 'draggable',
      title: '拖拽'
    },
    {
      path: '/backToTop',
      component: resolve => { require(['@/pages/backToTop/index'], resolve) },
      name: 'backToTop',
      title: '拖拽'
    },
    ]
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: resolve => { require(['@/pages/todolist/index'], resolve) },
    title: 'todolist'
  },
  {
    path: '/todolist2',
    name: 'todolist2',
    component: resolve => { require(['@/pages/todolist/todolist2'], resolve) },
    title: 'todolist2'
  },
  {
    path: '/todo',
    name: 'todo',
    component: resolve => { require(['@/pages/todolist/todo/index'], resolve) },
    title: 'todo'
  },
]
//小模板
const complateRouter = [
  {
    path: '/userCenter',
    component: Main,
    redirect: '/userCenter',
    title: '用户中心',
    children: [{
        path: '/userCenter',
        component: resolve => { require(['@/pages/userCenter/index'], resolve) },
        name: 'userCenter',
        meta: { title: '个人信息', icon: 'home', noCache: true }
      },
      {
        path: 'changepw',
        component: resolve => { require(['@/pages/userCenter/changepw'], resolve) },
        name: 'changepw',
        meta: { title: '修改密码', icon: 'home', noCache: true }
      }
    ]
  },
  {
    path: '/detail/',
    component: Main,
    title: '商品详情',
    children: [{
        path: 'fruit',
        component: resolve => { require(['@/pages/detail/fruit'], resolve) },
        name: 'fruit',
        meta: { title: '水果', icon: 'home', noCache: true }
      },
      {
        path: 'vegetable',
        component: resolve => { require(['@/pages/detail/vegetable'], resolve) },
        name: 'vegetable',
        meta: { title: '蔬菜', icon: 'home', noCache: true }
      },
      {
        path: 'watch-computed',
        component: resolve => { require(['@/pages/detail/watch-computed'], resolve) },
        name: 'watchComputed'
      },
      {
        path: 'vShow',
        component: resolve => { require(['@/pages/detail/v-if-show'], resolve) },
        name: 'vShow'
      }
    ]
  },
]
//饿了么组件
const elementRouter = [
  {
  path: '/element',
  component: Layout,
  children: [
    {
      path: '/muti',
      components: {
        default: resolve => { require(['@/pages/pagination/muti'], resolve) },
        timeout: Timeout,
        interval: Interval
      },
      // 命名视图
      children: [
        {
          path: '/muti/mutiPage1',
          name: 'muti',
          title: 'router-view命名视图',
          components: {
            default: Timeout,
            timeout: Timeout,
            // interval: Interval
          }
        },
        {
          path: '/muti/mutiPage2',
          components: {
            default: Interval,
            interval: Interval
          }
        },
        {
          path: '/muti/mutiPage',
          components: {
            default: resolve => { require(['@/pages/pagination/mutiPage'], resolve) },
            timeout: Timeout,
            interval: Interval
          }
        },
      ],
    },
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
    {
      path: '/upload',
      component: resolve => { require(['@/pages/element/upload'], resolve) },
      name: 'upload',
      title: '上传'
    },
    {
      path: '/tree',
      component: resolve => { require(['@/pages/element/tree'], resolve) },
      name: 'tree',
      title: '树形菜单'
    },
    {
      path: '/collapse',
      component: resolve => { require(['@/pages/element/collapse'], resolve) },
      name: 'tree',
      title: '折叠面板'
    },
    {
      path: '/carousel',
      component: resolve => { require(['@/pages/carousel/index'], resolve) },
      name: 'carousel',
      title: '轮播'
    },
    {
      path: '/pagination',
      component: resolve => { require(['@/pages/pagination/index'], resolve) },
      name: 'pagination',
      title: '分页'
    },
    {
      path: '/pagination2',
      component: resolve => { require(['@/pages/pagination/pagination-demo'], resolve) },
      name: 'pagination2',
      title: '分页'
    },
    {
      path: '/scrollPane',
      component: resolve => { require(['@/pages/scrollPane/index'], resolve) },
      name: 'scrollPane',
      title: '滚轮'
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
    // {
    //   path: '/api2',
    //   component: resolve => { require(['@/pages/mock/api2'], resolve) },
    //   name: 'api2',
    //   title: ''
    // },
    {
      path: '/routerPush',
      component: resolve => { require(['@/pages/mock/routerPush'], resolve) },
      name: 'routerPush',
      title: '路由传参'
    },
    // 动态路径参数 以冒号开头
    {
      path: '/routerPush/detail/:userId',
      component: resolve => { require(['@/pages/mock/detail'], resolve) },
      name: 'detail',
      title: '详情页'
    },
  ]}
]

// 3. 创建router实例，然后传`routes`配置
const router =  new Router({
  // mode: 'history',
  routes: [...defaultRouter, ...menuRouter, ...complateRouter, ...elementRouter, ...apiRouter, ...testRouter]
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

// 4. 导出路由
export default router
