<!--  -->
<template>
  <div class=''>
    <div class='demo' :class="classes" @mouseover="handleMouseover" @mouseout="handleMouseout">
      <span>interval</span>
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
      intervalId: null,
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
    this.intervalId = window.setInterval(this.toggleShow, 1000)
  },

  methods: {
    toggleShow () {
      this.isShow = !this.isShow
      // this.isShow ? (this.isShow = false) : (this.isShow = true)
    },

    handleMouseover () {
      this.isShow = true
      window.clearInterval(this.intervalId)
    },

    handleMouseout () {
      this.intervalId = window.setInterval(this.toggleShow, 1000)
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
