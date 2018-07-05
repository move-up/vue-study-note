<!--  -->

<script>
export default {
  name: 'topTitle',

  components: {},

  render: function (createElement) {
    var self = this
    return createElement(
      // 'h' + this.level,   // tag name 标签名称
      // {},
      // this.$slots.default // 子组件中的阵列
      'div',
      [
        createElement('input',
          {
            class: {
              inputBtn: true
            },
            domProps: {
              value1: self.value1
            },
            on: {
              input: function(event){
                self.value1 = event.target.value
                console.log(self.value1)
              }
            }
          }
        ),
        createElement('span',{
          style: {
            color: 'pink'
          }
        }, '+'),
        createElement('input',
          {
            class: {
              inputBtn: true
            },
            domProps: {
              value2: self.value2
            },
            on: {
              input: function(event){
                self.value2 = event.target.value
                console.log(self.value2)
              }
            }
          }
        ),
        createElement('span', '结果：' + parseInt(self.value1) + '+' + parseInt(self.value2) + '=' + 'finalResult')

      ]
    )
  },

  props: [],
    level: {
      type: Number,
      required: true
    },

  data () {
    return {
      value1: '',
      value2: '',
    }
  },

  computed: {
    finalResult () {
      return parseFloat(self.value1) + parseFloat(self.value2)
    }
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
.inputBtn {
  outline: 0;
  width: 100px;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid pink;
}
</style>
