<!-- app-main -->
<template>
  <div class='app-main'>

    <!-- content -->
    <transition
      name="fade" mode="out-in">
      <transition>
        <router-view></router-view>
      </transition>
    </transition>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

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
