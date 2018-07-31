<!--  -->
<template>
  <div class='main'>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-container>
          <el-aside>
            <Sidebar></Sidebar>
          </el-aside>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import Header from './header.vue'
import Sidebar from './sidebar.vue'
export default {
  name: '',

  components: {
      Header,
      Sidebar,
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
.el-header {
  background-color: #fafafa;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}
</style>
