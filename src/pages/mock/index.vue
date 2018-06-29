<!-- 判断数据类型 -->
<template>
  <div class='typeof'>
    <h1>mock语法</h1>
    <h2>String</h2>
    <ul class="nav1">
      <li>
        <h4>'name|min-max': string</h4>
        <ul>
          <p>"string|1-5": "4"</p>
          <li>结果：'4444'</li>
          <li>右边字符串随机1到5次组成一个新的字符串</li>
        </ul>
      </li>
      <li>
        <h4>'name|count': string</h4>
        <ul>
          <p>"string|3": "4"</p>
          <li>结果：'444'</li>
          <li>右边字符串重复3次组成一个新的字符串</li>
        </ul>
      </li>
    </ul>

    <h2>Number</h2>
    <ul class="nav1">
      <li>
        <h4>'name|+1': number</h4>
        <ul>
          <p>？？？</p>
          <li>结果：？？？ </li>
          <li>？？？</li>
        </ul>
      </li>
      <li>
        <h4>'name|min-max': number</h4>
        <ul>
          <p>"string|1-100": 100</p>
          <li>结果：31</li>
          <li>min和max之间的一个随机数</li>
        </ul>
      </li>
      <li>
        <h4>'name|min-max.dmin-dmax': number</h4>
        <ul>
          <p>"string|1-100.1-5": 1</p>
          <li>结果：73.8692</li>
          <li>整数有min和max之间随机加上dmin和dmax之间随机组合</li>
        </ul>
      </li>
      <li>
        <h4>'name|min-max.dnumber': number</h4>
        <ul>
          <p>"string|1-100.3": 1</p>
          <li>结果：73.895</li>
          <li>整数有min和max之间随机加上dmin和dmax之间随机组合</li>
        </ul>
      </li>
    </ul>

    <h2>Boolean</h2>
    <ul class="nav1">
      <li>
        <h4>'name|1': boolean</h4>
        <ul>
          <p>"boolean|1": true</p>
          <li>结果："boolean": false</li>
          <li>右边字符串是true和false之间随机值</li>
        </ul>
      </li>
      <li>
        <h4>？？？'name|min-max': boolean</h4>
        <ul>
          <p>"boolean|1-2": true</p>
          <li>结果：'true'</li>
          <li>右边字符串是true和false之间随机值</li>
        </ul>
      </li>
    </ul>

    <h2>Object</h2>
    <ul class="nav1">
      <li>
        <h4>'name|count': object</h4>
        <ul>
          <p>
              "object|2": {
                "310000": "上海市",
                "320000": "江苏省",
                "330000": "浙江省",
                "340000": "安徽省"
              }
          </p>
          <li>结果："object": { "310000": "上海市", "330000": "浙江省" }</li>
          <li>随机两个值</li>
        </ul>
      </li>
      <li>
        <h4>'name|min-max': object</h4>
        <ul>
          <li>随机min到max个</li>
        </ul>
      </li>
    </ul>

    <h2>Array</h2>
    <ul class="nav1">
      <li>
        <h4>'name|1': array</h4>
        <ul>
          <li>随机一个值</li>
        </ul>
      </li>
      <li>
        <h4>'name|+1': array</h4>
        <ul>
          <li>随机一个值</li>
        </ul>
      </li>
      <li>
        <h4>'name|1-10': array</h4>
        <ul>
          <li>随机1到10个值</li>
        </ul>
      </li>
      <li>
        <h4>'name|count': array</h4>
        <ul>
          <p></p>
          <li>左边数组重复count次</li>
        </ul>
      </li>
    </ul>

    <h2>Function</h2>
    <ul>
      <li>
        <h4>'name': function</h4>
      </li>
    </ul>

    <h2>RegExp</h2>
    <ul>
      <li>
        <h4>'name': regexp</h4>
      </li>
    </ul>




  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
