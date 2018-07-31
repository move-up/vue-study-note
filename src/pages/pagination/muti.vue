<!--  -->
<template>
  <div class=''>
    router-view页面
    <router-link to="/muti/mutiPage1">tti 实际上：tit</router-link>
    <router-link to="/muti/mutiPage2">iti 实际上：iit</router-link>
    <router-link to="/muti/mutiPage">iti 实际上：iit</router-link>
    <router-view name="interval"></router-view>
    <router-view name="timeout"></router-view>
    <router-view name="default"></router-view>
  </div>
</template>

<script>

export default {
  name: '',

  components: {
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
