<!--父组件中引入子组件-->
<template>
  <div class="storeWrap">
    store
    <a href="javascript:;"
    @click="handleShow">点击</a>

    <t-dialog></t-dialog>

    <input v-model="message" class="message"> {{ 'message:' + message}}
    <h4>num: {{ this.$store.state.add.count }}</h4>



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
    })
  }
}


</script>
