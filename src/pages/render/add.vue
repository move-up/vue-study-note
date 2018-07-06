<!-- 加法计算器 -->

<script>
export default {
  name: 'add',

  components: {},

  render: function (createElement) {
    var self = this
    return createElement(
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
              value2: this.value2
            },
            on: {
              input: function(event){
                self.value2 = event.target.value
              }
            }
          }
        ),
        createElement('span', '结果：' + parseInt(self.value1) + '+' + parseInt(self.value2) + '=' + self.finalResult),
        createElement('span', '结果：' + parseInt(self.value1) + '+' + parseInt(self.value2) + '=' + `${parseInt(self.value1) + parseInt(self.value2)}`)

      ]
    )
  },

  props: [],

  data () {
    return {
      value1: 0,
      value2: 0,
    }
  },

  computed: {
    finalResult () {
      return parseInt(this.value1) + parseInt(this.value2)
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
