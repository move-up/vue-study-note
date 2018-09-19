<!-- input -->
<template>
  <div class='input0919'>
    <h2>input 2018-09-19</h2>
    <input v-model="monday">
    {{ monday }} - {{ normalizedSize }}
  </div>
</template>

<script>
export default {
  name: 'Input0919',

  components: {},

  props: ['value'],

  data () {
    return {

    }
  },

  computed: {
    monday: {
      get () {
        return this.value.trim().toLowerCase()
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    normalizedSize () {
       return this.monday.trim().toLowerCase()
    }
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
