<!-- 判断数据类型 -->
<template>
  <div class='typeof'>
    <h1>判断数据类型</h1>
    <ul class="nav1">
      <li>
        <h4>1.typeof：判断类型</h4>
        <ul>
          <p>可判断类型：</p>
          <li>1.1 Number</li>
          <li>1.2 String</li>
          <li>1.3 Boolean</li>
          <li>1.4 Object(null属于Object)</li>
          <li>1.5 Function</li>
          <li>1.6 Undefined</li>
          <li>1.7 Symbol(ES6)</li>
        </ul>
      </li>
      <li>
        <h4>2.instanceof：判断是不是某个类型</h4>
        <ul>
          <p>可判断类型：</p>
          <li>2.1 Object</li>
          <li>2.2 Array</li>
          <li>2.3 Date</li>
          <li>2.4 Function</li>
        </ul>
      </li>
      <li>
        <h4>3.toString.call()</h4>
        <ul>
          <p>可判断类型：</p>
          <li>3.1 Number</li>
          <li>3.2 String</li>
          <li>3.3 Undefined</li>
          <li>3.4 Boolean</li>
          <li>3.5 Null</li>
          <li>3.6 Array</li>
          <li>3.7 Object</li>
          <li>3.8 Function</li>
          <li>3.9 RegExp ---- toString.call(new RegExp)</li>
        </ul>
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
