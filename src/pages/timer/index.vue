<!--  -->
<template>
  <div class=''>
    <div style="height: 200px">
      <interval @click.native="toggle()"></interval>
    </div>
    <div style="height: 200px">
      <timeout></timeout>
    </div>
  </div>
</template>

<script>
import Interval from './interval'
import Timeout from './timeout'

export default {
  name: '',

  components: {
    Interval,
    Timeout
  },

  props: {},

  data () {
    return {
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    toggle () {
      let i = 0
      console.log(i++)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
