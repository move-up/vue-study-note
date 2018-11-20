<!-- layout -->
<template>
  <div class='layout'>
    <div class="main-container">
      <navbar></navbar>
      <el-container>
        <el-aside width="200px">
          <sidebar class="sidebar-container"></sidebar>
        </el-aside>
        <el-main>
          <!-- <tags-view></tags-view> -->
          <app-main></app-main>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import appMain from './app-main/index'
import navbar from './navbar/index'
import sidebar from './sidebar/index'
import tagsView from './tags-view/index'

export default {
  name: '',

  components: {
    appMain,
    navbar,
    sidebar,
    tagsView
  },

  props: {},

  data () {
    return {
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
.el-menu-item {
  background-color: #000;
}
.el-aside {
  background-color: #fff
}
.el-container {
  margin-top: -1px;
}
</style>
