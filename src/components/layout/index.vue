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

    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="tooltip">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="10" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import appMain from './app-main/index'
import navbar from './navbar/index'
import sidebar from './sidebar/index'
import tagsView from './tags-view/index'
import BackToTop from '@/components/BackToTop'

export default {
  name: '',

  components: {
    appMain,
    navbar,
    sidebar,
    tagsView,
    BackToTop
  },

  props: {},

  data () {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      }
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
