
<!-- 判断数据类型 -->
<template>
  <div class='api-detail'>
    <ul>
      <li>{{ data.id }}</li>
      <li>{{ data.body }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Detail',

  components: {
  },

  props: [data],

  data () {
    return {
      data: {
        id: '',
        body: ''
      }
    }
  },

  computed: {
    /* ...mapState({
      detail: state => state.detail
    }) */
  },

  watch: {
  },

  // vue实例创建时触发
  created: function() {
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang='scss' scoped>
</style>
