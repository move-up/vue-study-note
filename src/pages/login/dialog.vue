<!--子组件-->
<template>
  <div>
    <!-- <el-dialog
    title="tip"
    :visible.sync="$store.commit('switch_dialog')"></el-dialog> -->

    <el-dialog
      title="提示"
      :visible.sync="show"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="switchShow">取 消</el-button>
        <el-button type="primary" @click="switchShow">确 定</el-button>
      </span>
    </el-dialog>
    <input v-model="inputValue">  {{ 'components:' + inputValue }}
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
      'switch_dialog',
      'increment',
      'updateValue'
    ]),
    ...mapState({
      show:state => state.dialog.show,
    }),
    inputValue: {
      get () {
        return this.$store.state.inputData.inputValue
      },
      set (value) {
        // this.$store.dispatch('updateValue', value)
        this.$store.commit('updateValue', value)
      }
    }
  },
  methods: {
    switchShow () {
      let i = 0
      i++
      this.$store.dispatch('switch_dialog')
      this.$store.dispatch('increment')
      console.log(this.$store.state.increment.count)
    }
  }
}
</script>
