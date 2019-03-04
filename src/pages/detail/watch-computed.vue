<!--  -->
<template>
<div class="pageWrap">
  <div class=''>watch-computed</div>
  <div><input v-model="msg">{{ msg }}</div>
  <!-- <div>{{ msgWatch }}</div> -->
  <div>{{ msgComputed }}</div>
  <input v-model="a">
</div>
</template>

<script>
var arr = 123
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      msg: '初始值',
      a: 1
    }
  },
  computed: {
    msgComputed: function() {
      return 'computed:' + this.msg + this.a;
    }
  },
  watch: {
    msg: function(val, val2) {
      console.log('watchOld:' + val + this.a);
      console.log('watchNew:' + val2 + this.a);
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
