<!--  -->
<template>
  <div class='test'>
    <p>
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/bar">/user/bar</router-link>
    </p>
    <router-view></router-view>
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
