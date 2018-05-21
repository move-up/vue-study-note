<!--  -->
<template>
  <div class='' ref="div">
    个人中心
    <!-- <el-table ref="table"></el-table> -->
        <my-button
          :disabled="btn.disabled"
          :title="btn.title">
        </my-button>
    <h4>Range</h4>
    <range
      :max="rg.max"
      :min="rg.min"
      v-model="rg.value"
      :msg="msg"
      @showbox="toshow"></range>
      <!-- <range :text="'创业项目名称'" v-model="rg.value"></range> -->
      <girl-group
      :girls="b.girls"
      :noticeGirl="b.noticeGirl"
      @introudce="introudceSelf"></girl-group>
      <p>群消息girl：{{ noticeGirl }}</p>
      <div>
        {{ somebody }} 说：我 {{ age }} 了。
      </div>
  </div>
</template>

<script>
import MyButton from './button'
import Range from './range'
import GirlGroup from './girl-group'

export default {
  name: 'usercenter',

  components: {
    MyButton,
    Range,
    GirlGroup
  },

  props: {},

  data () {
    return {
      rg: {
        max: 100,
        min: 0,
        value: 10,
        projectN:'',
      },
      btn: {
        title: '点击触发',
        disabled: false,
      },
      msg: 'ureow',
      b: {
        girls: [
          {
            name: 'xiao li',
            age: 18
          },
          {
            name: 'xiao kai',
            age: 16
          },
          {
            name: 'xiao aa',
            age: 24
          }
        ]
      },
      noticeGirl: '',
      somebody: '',
      age: '',
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

  methods: {
    toshow (msg) {
      this.msg = msg;
    },

    introudceSelf(opt) {
      this.somebody = opt.name;
      this.age = opt.age;
      this.noticeGirl = opt.name + '，已收到消息';
    }
  }
}
</script>

<style scoped>
</style>
