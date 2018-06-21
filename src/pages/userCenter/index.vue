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

    <h2>组件Range：</h2>
    <range
      :max="rg.max"
      :min="rg.min"
      v-model="rg.value"
      :msg="msg"
      @showbox="toshow"
      @transferUser="getUser"></range>
      <p>{{ rg.value }} 用户名为：{{ user }}</p>
      <!-- <range :text="'创业项目名称'" v-model="rg.value"></range> -->

      <h2>组件GirlGroup：</h2>
      <girl-group
      :girls="b.girls"
      :noticeGirl="b.noticeGirl"
      @introudce="introudceSelf"></girl-group>
      <p>群消息girl：{{ noticeGirl }}</p>
      <div>
        {{ somebody }} 说：我 {{ age }} 了。
      </div>

      <h2>组件myCounter：</h2>
      <my-counter :value="val"></my-counter>

      <h2>组件InputBox：</h2>
        <input-box
        :label="rlabel"
        v-model="rname"
        v-on:focus.native="onFocus"
        ></input-box>
        <p>你输入的值：{{ rname }}</p>


      <h2>组件blog：</h2>
        <div :style="{ fontSize: blogFontSize + 'em' }">
            <blog
            :title="bo.title"
            :content="bo.content"
            v-on:enlarge-text="onEnlargeText"
            v-model="searchText"
            :errorTipCon="bo.errorTipCon">
            </blog>
        </div>
  </div>
</template>

<script>
import MyButton from './button'
import Range from './range'
import GirlGroup from './girl-group'
import MyCounter from './my-counter'
import InputBox from './input-box'
import Blog from './blog'

export default {
  name: 'usercenter',

  components: {
    MyButton,
    Range,
    GirlGroup,
    MyCounter,
    InputBox,
    Blog,
  },

  data () {
    return {
      bo: {
        title: '五化',
        errorTipCon: 'Something bad happened.',
        content: '关于这次五化工作……………………'
      },
      blogFontSize: 1,
      itemList: [],
      searchText: '',
      rname: '',
      rlabel: '',
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
      user: '',
      val: 0,
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
    },

    getUser(msg) {
      this.user = msg
    },

    onEnlargeText:function (enlargeAmount) {
      this.blogFontSize += enlargeAmount
    }
  }
}
</script>

<style scoped>
</style>
