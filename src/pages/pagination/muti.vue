<!--  -->
<template>
  <div class=''>
    router-view页面
    <interval></interval>
    <router-view name="interval"></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Interval from '@/pages/timer/interval'

export default {
  name: '',

  components: {
    Sidebar,
    Interval
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
