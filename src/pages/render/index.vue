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
  </div>



</template>

<script>
import topTitle from './topTitle'
import selectBtn from './selectBtn'
import inputRender from './inputRender'
import add from './add'

export default {
  name: '',

  components: {
    topTitle,
    selectBtn,
    inputRender,
    add
  },

  props: {},

  data () {
    return {
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
  }
}
</script>

<style lang='scss' scoped>

</style>
