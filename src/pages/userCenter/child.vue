<!-- input -->
<template>
  <div class='input0919'>
    <h2>child 2018-09-19</h2>
    <div
    @click="clickFun"
    >{{ msg }}</div>
    <h2>点击次数： {{ num }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Child',

  components: {},

  props: ['msg', 'num'],

  data () {
    return {

    }
  },

  computed: {
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {
    clickFun (val) {
      this.$emit('handle', val)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
