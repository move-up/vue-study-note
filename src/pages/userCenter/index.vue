<!--  -->
<template>
  <div class='' ref="div">
    个人中心
    <el-table ref="table"></el-table>
        <my-button
          :disabled="btn.disabled"
          :title="btn.title">
        </my-button>
    <h4>Range</h4>
    <range
      :max="rg.max"
      :min="rg.min"
      :value="rg.value"></range>
  </div>
</template>

<script>
import MyButton from './button'
import Range from './range'

export default {
  name: 'usercenter',

  components: {
    MyButton,
    Range,
  },

  props: {},

  data () {
    return {
      rg: {
        max: '100',
        min: '0',
        value: '10'
      },
      btn: {
        title: '点击触发',
        disabled: false,
      },
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

<style scoped>
</style>
