<!--  -->

<script>
export default {
  name: 'topTitle',

  components: {},

  render: function (createElement) {
    var self = this
    return createElement(
      'h' + this.level,   // tag name 标签名称
      {},
      this.$slots.default // 子组件中的阵列
    )
  },

  props: {
    level: {
      type: Number,
      required: true
    },
  },

  data () {
    return {
    }
  },

  computed: {
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
