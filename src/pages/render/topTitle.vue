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
      /* 'div',
      Array.apply(null, { length: 20 }).map(function () {
        return createElement('p', 'hi')
      }) */
    )
  },

  props: {
    level: {
      type: Number,
      required: true
    },
  },
  // props: ['items'],
  // render: function (createElement) {
  //   if (this.items.length) {
  //     return createElement('ul', this.items.map(function (item) {
  //       return createElement('li', item.name)
  //     }))
  //   } else {
  //     return createElement('p', 'No items found.')
  //   }
  // },

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
