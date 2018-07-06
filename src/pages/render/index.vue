<!--  -->
<template>
  <div class=''>
    render

    <topTitle :level="4">加法计算器</topTitle>
    <add></add>

    <topTitle :level="4">分类按钮</topTitle>
    <selectBtn
    v-for="(btn, index) in testData"
    :type="btn.type"
    :text="btn.text"
    :key="index">{{ btn.text }}</selectBtn>
    <selectBtn
    :type="btype"
    :text="btext">{{ btext }}</selectBtn>

    <topTitle :level="4">输入框</topTitle>
    <input-render
    v-model="input.value"></input-render>{{ input.value }}

    <top-title :level='4'>slot</top-title>
    <!-- <slotRender><slot :text="message"></slot></slotRender> -->

    <top-title :level='4'>判断是否包含类名、添加和删除类</top-title>
    <div class="demo c-white gray">aaa</div>
    <selectBtn
    :type="'success'"
    :text="btnText"
    @click="demoFunction()">{{ btnText }}</selectBtn>



  </div>



</template>

<script>
import topTitle from './topTitle'
import selectBtn from './selectBtn'
import inputRender from './inputRender'
import add from './add'
import slotRender from './slotRender'

export default {
  name: '',

  components: {
    topTitle,
    selectBtn,
    inputRender,
    add,
    slotRender
  },

  props: {},

  data () {
    return {
      btnText: '换色',
      message: 'this is a slot example',
      input: {
        value: ''
      },
      btn: {
        type: '',
        text: ''
      },
      testData: [
        {
          type: 'success',
          text: '成功'
        },
        {
          type: 'error',
          text: '错误'
        },
        {
          type: 'warn',
          text: '警告'
        },
        {
          type: 'default',
          text: '默认'
        },
      ],
      btype: 'error',
      btext: 'aaa'
    }
  },

  computed: {
  },

  watch: {},

  created () {},

  mounted () {
  },

  methods: {
    hasClass(elements, cName) {
      return !!elements.className.match(new RegExp( "(\\s|^)" + cName + "(\\s|$)"));
    },

    removeClass(elements, cName) {
      if( hasClass(elements,cName) ){
          elements.className = elements.className.replace(new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " ");
      };
    },

    addClass(elements, cName) {
      if( !hasClass(elements,cName) ){
          elements.className += " " + cName;
      };
    }
  }
}
</script>

<style lang='scss' scoped>
.demo {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
}
.c-white {
  color: #fff;
}
.gray {
  background-color: #b7b7b7;
}
.pink {
  background-color: pink;
}
</style>
