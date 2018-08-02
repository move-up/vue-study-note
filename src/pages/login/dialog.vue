<!--子组件-->
<template>
<div>
  <!-- <el-dialog
  title="tip"
  :visible.sync="$store.commit('switch_dialog')"></el-dialog> -->
<!-- <el-dialog
  title="提示"
  :visible.sync="$store.state.show"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="$store.state.show = false">取 消</el-button>
    <el-button type="primary" @click="$store.state.show = false">确 定</el-button>
  </span>
</el-dialog> -->
<el-dialog
  title="提示"
  :visible.sync="show"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="show">取 消</el-button>
    <el-button type="primary" @click="show">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      show:state => state.dialog.show
    })
  },
  methods: {
    handleClose () {
      let i = 0
      i++
      console.log(i)
      return this.$store.state.dialog.show = false
    }
  }
}
</script>
