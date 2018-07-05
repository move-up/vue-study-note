<!--  -->

<script>
export default {
  name: 'inputRender',

  components: {},

  props: ['value'],

  render: function (createElement) {
    var self = this
    return createElement('input',{
      domProps: {
        value: self.value
      },
      on: {
        input: function (event) {
          self.$emit('input', event.target.value)
        }
      },
      'style': {
        'outline': '0',
        'width': '200px',
        'height': '35px',
        'padding': '0 10px',
        'line-height': '35px',
        'border-radius': '3px',
        'border': '1px solid pink'
      }
    })
  },

  data () {
    return {
    }
  },

  computed: {
  },

  watch: {},

  created () {},

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang='scss' scoped>

</style>
