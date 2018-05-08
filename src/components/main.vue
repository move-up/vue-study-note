<!--  -->
<template>
  <div class='main'>
      <Header></Header>
      <Sidebar></Sidebar>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './header.vue'
import Sidebar from './sidebar.vue'
export default {
  name: '',

  components: {
      Header,
      Sidebar
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
