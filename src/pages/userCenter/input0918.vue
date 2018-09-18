<!-- input -->
<template>
  <div class='input0918'>
    <h2>input 2018-09-18</h2>
    <input
    :value="thisValue"
    @input="handle">
    {{ thisValue }}
  </div>
</template>

<script>
export default {
  name: 'Input0918',

  components: {},

  props: ['thisValue'],

  data () {
    return {
    }
  },

  computed: {
    // value: {
    //   get () {
    //     return this.thisValue
    //   },
    //   set (value) {
    //     this.$emit('handle', value)
    //   }
    // }
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {
    handle (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
