<!--  -->
<template>
  <div class=''>
    <div class='demo' :class="classes" @mouseover="handleMouseover" @mouseout="handleMouseout">
      <span>timeout</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      isShow: true,
      timeoutId: null,
      //isHover: true
    }
  },

  computed: {
    classes () {
      return this.isShow ? '' : 'hide'
    }
  },

  watch: {},

  created () {},

  mounted () {
    this.timeoutId = window.setTimeout(this.toggleShow, 1000)
  },

  methods: {
    toggleShow () {
      this.isShow = !this.isShow
      this.timeout()
      // this.isShow ? (this.isShow = false) : (this.isShow = true)
    },

    handleMouseover () {
      this.isShow = true
      window.clearTimeout(this.timeoutId)
    },

    handleMouseout () {
      this.timeout()
    },

    timeout () {
      this.timeoutId = window.setTimeout(this.toggleShow, 1000)
    }
  }
}
</script>

<style lang='scss' scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.hide {
  display: none;
}
</style>
