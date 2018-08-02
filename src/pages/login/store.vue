<!--父组件中引入子组件-->
<template>
  <div class="storeWrap">
    store
    <a href="javascript:;"
    @click="$store.commit('switch_dialog')">点击</a>

    <a href="javascript:;"
    @click="doSomething">点击</a>

    <t-dialog></t-dialog>
  </div>
</template>

<script>
import dialog from './dialog.vue'
export default {
  components:{
    "t-dialog":dialog
  },
  methods: {
    doSomething () {
      console.log(this.$store.state.dialog)
    }
  }
}
</script>
