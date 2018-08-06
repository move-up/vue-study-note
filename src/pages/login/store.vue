<!--父组件中引入子组件-->
<template>
  <div class="storeWrap">
    store
    <a href="javascript:;"
    @click="handleShow">点击</a>

    <!-- 2.直接提交mutations -->
    <!-- @click="$store.commit('switch_dialog')">点击</a> -->

    <t-dialog></t-dialog>

    <input v-model="message" class="message"> {{ 'message:' + message}}


  </div>
</template>

<script>
import dialog from './dialog.vue'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components:{
    "t-dialog": dialog,
  },
  computed: {
    ...mapState({
      message: state => state.obj.message
    }),
    ...mapActions({
      updateMessage: 'updateMessage'
    }),
    message: {
      get () {
        return this.$store.state.inputData.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },
  methods: {
    ...mapActions({
      handleShow: 'switch_dialog'
    }),
  }
}
</script>
