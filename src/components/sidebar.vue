<template>
  <div class="sidebar">
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
    name: 'Sidebar',
    components: {

    },
    props: {
    },
    data () {
      return {
        menus: [
          {
            baseIcon: 'el-icon-setting',
            baseTitle: '个人中心',
            items: [
              {
                icon: 'el-icon-document',
                path: '/userCenter',
                title: '个人中心'
              },
              {
                icon: 'el-icon-document',
                path: '/userCenter/changepw',
                title: '修改密码'
              }
            ]
          },
          {
            baseIcon: 'el-icon-menu',
            baseTitle: '商品详情',
            items: [
              {
                icon: 'el-icon-document',
                path: '/detail/fruit',
                title: '水果'
              },
              {
                icon: 'el-icon-document',
                path: '/detail/vegetable',
                title: '蔬菜'
              }
            ]
          },
        ]
      }
    },
    computed: {

    },
    watch: {

    },
    created () {

    },
    mounted () {

    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },

      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>
