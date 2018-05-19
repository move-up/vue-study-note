<!--  -->
<template>
  <input type="text" v-model="_value"
  :max="max"
  :min="min">
</template>

<script>
export default {
  name: 'range',

  model: {
    prop: '_value',
    event: 'change'
  },

  components: {},

  props: {
    max: {
      type: Number,
      default(){ return 10; }
    },
    min: {
      type: Number,
      default(){ return 0; }
    },
    value: {
      type: Number,
      default(){ return 4; }
    }
  },

  data () {
    return {
    }
  },

  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {
  }
}
</script>

<style lang='scss' scoped>
</style>
