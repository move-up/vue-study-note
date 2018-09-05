<!--子组件-->
<template>
  <div class="store-add">
      <span class="num">{{ this.$store.state.add.count }}</span>
      <el-button type="primary" @click="handleIncrement">add</el-button>
      <router-link to="/store">到store页看数据</router-link>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapActions([
      'add',
    ]),
  },
  methods: {
    handleIncrement () {
      this.$store.dispatch('add')
      console.log('methods: ' + this.$store.state.add.count)
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  margin: 100px;
}
.num {
  margin-right: 20px;
  font-size: 16px;
  font-weight: 700;
  color: red;
}
</style>

