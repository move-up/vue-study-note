<!--  -->
<template>
  <div class='' ref="div">
    个人中心
    <el-table ref="table"></el-table>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
    }
  },

  computed: {},

  watch: {},

  created () {

  },

  mounted () {
    var d = this.$refs['table']
    // ref:获取dom节点对象或组件实例的办法
    // this.$refs['xxx']或this.$refs.xxx
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
