<!-- 面包屑 -->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/element/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/element' }">活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情 <span>(总条数：34)</span></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>

export default {
  name: '',

  components: {
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
</style>
