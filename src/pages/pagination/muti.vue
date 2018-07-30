<!--  -->
<template>
  <div class=''>
    router-view页面
    <interval></interval>
    <router-view name="helper"></router-view>
    <!-- <router-view name="timeout"></router-view> -->
  </div>
</template>

<script>
import Interval from '@/pages/timer/interval'
// import Timeout from '@/pages/timer/timeout'

export default {
  name: '',

  components: {
    Interval,
    // Timeout
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

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
