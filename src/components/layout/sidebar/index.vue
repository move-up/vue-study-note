<!-- sidebar -->
<template>
  <div class='layout-sidebar'>
    <el-menu
      :unique-opened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">

      <el-submenu
      v-for="(menu, i) in menus"
      :key="i"
      :index="String(i + 1)">
        <template slot="title">
          <i
          :class="menu.baseIcon"></i>
          <span>{{ menu.baseTitle }}</span>
        </template>

        <el-menu-item-group>
          <el-menu-item v-for="(item, _key) in menu.items"
          :key="_key"
          :index="String((i + 1) + '-' + (_key + 1))">
            <i
            :class="item.icon"></i>
            <router-link
            :to="item.path">{{ item.title }}</router-link>
          </el-menu-item>
        </el-menu-item-group>

      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      menus: [
        {
          baseIcon: 'el-icon-setting',
          baseTitle: '实例',
          items: [
            {
              icon: 'el-icon-document',
              path: '/home',
              title: '主页'
            },
            {
              icon: 'el-icon-document',
              path: '/typeof',
              title: '判断数据类型'
            },
            {
              icon: 'el-icon-document',
              path: '/timer',
              title: '定时器'
            },
            {
              icon: 'el-icon-document',
              path: '/render',
              title: 'render函数'
            },
            {
              icon: 'el-icon-document',
              path: '/table',
              title: '编辑表格'
            },
            {
              icon: 'el-icon-document',
              path: '/todolist',
              title: 'todolist'
            },
          ]
        },
        {
          baseIcon: 'el-icon-setting',
          baseTitle: '饿了么组件',
          items: [
            {
              icon: 'el-icon-document',
              path: '/tab',
              title: '标签页'
            },
            {
              icon: 'el-icon-document',
              path: '/breadCrumb',
              title: '面包屑'
            },
            {
              icon: 'el-icon-document',
              path: '/carousel',
              title: '轮播'
            },
            {
              icon: 'el-icon-document',
              path: '/pagination',
              title: '分页'
            },
          ]
        },
        {
          baseIcon: 'el-icon-setting',
          baseTitle: 'mock接口',
          items: [
            {
              icon: 'el-icon-document',
              path: '/api',
              title: '分页'
            },
            // {
            //   icon: 'el-icon-document',
            //   path: '/api2',
            //   title: ''
            // },
            {
              icon: 'el-icon-document',
              path: '/routerPush',
              title: '路由传参'
            }
          ]
        },
        {
          baseIcon: 'el-icon-setting',
          baseTitle: '命名视图',
          items: [
            {
              icon: 'el-icon-document',
              path: '/muti',
              title: '主页'
            },
            {
              icon: 'el-icon-document',
              path: '/muti/mutiPage',
              title: '有路由子页面'
            },
            {
              icon: 'el-icon-document',
              path: '/muti/mutiPage1',
              title: '无路由子页面'
            },
            {
              icon: 'el-icon-document',
              path: '/muti/mutiPage2',
              title: '无路由子页面'
            },
          ]
        },
      ]
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang='scss' scoped>
.el-menu-item-group .el-menu-item-group__title {
  height: 0!important;
}
.el-menu-item a {
  text-decoration: none;
  color: #999;
}
.el-menu-item.is-active a {
  color: #409EFF;
}
</style>
