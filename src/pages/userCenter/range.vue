<!--  -->
<template>
  <input type="text" v-model="value"
  :max="max"
  :min="min">
</template>

<script>
export default {
  name: 'range',

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

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
