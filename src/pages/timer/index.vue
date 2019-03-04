<!--  -->
<template>
  <div class=''>
    <div style="height: 200px">
      <interval @click.native="toggle()"></interval>
    </div>
    <button @click="consoleRouter">consoleRouter</button>
    <button @click="goBack">goBack</button>

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
    },
    consoleRouter () {
      // console.log('$router:' + this.$router.timer)
      // this.$router.go(-1)  //回到前一路由
      console.log(this.$route.name)
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

    }
  }
}
</script>

<style lang='scss' scoped>
</style>
