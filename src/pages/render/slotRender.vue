<!--  -->

<script>
export default {
  name: 'slotRender',

  components: {},

  props: ['message'],
  render: function (createElement) {
    // `<div><slot :text="message"></slot></div>`
    return createElement('div', [
      this.$scopedSlots.default({
        text: this.message
      })
    ])
  },

  data () {
    return {
      text: '',
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
