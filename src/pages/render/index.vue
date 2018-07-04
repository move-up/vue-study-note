<!--  -->
<template>
  <div class=''>
    render函数渲染
    <topTitle :level="1">Hello world!</topTitle>
    <topTitle :level="2">Hello world!</topTitle>
    <topTitle :level="3">Hello world!</topTitle>
    <selectBtn
    v-for="(btn, index) in testData"
    :type="btn.type"
    :text="btn.text"
    :key="index">{{ btn.text }}</selectBtn>
    <selectBtn
    :type="btype"
    :text="btext">{{ btext }}</selectBtn>
  </div>



</template>

<script>
import topTitle from './topTitle'
import selectBtn from './selectBtn'

export default {
  name: '',

  components: {
    topTitle,
    selectBtn
  },

  props: {},

  data () {
    return {
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
