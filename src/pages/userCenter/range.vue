<!--  -->
<template>
<div>
  <input type="text" v-model="_value"
  :max="max"
  :min="min"> {{'_value: ' +  _value }}
  <div
  @click="open"
  class="open-box">{{ msg }}</div>
  <input type="text" v-model="username"
  @change="setUser">
</div>

<!-- <p class="completion-input-box">
  <span class="input-box-name">{{text}}</span>
  <input
  type="text"
  ref="input"
  v-model="_value"
  :value="value"
  @input="$emit('input', $event.target.value)">
</p> -->

</template>

<script>
export default {
  name: 'range',

  // model: {
  //   prop: 'value',
  //   event: 'input'
  // },

  model: {
    prop: '_value',
    event: 'change'
  },

  components: {},
  /* props: ['text','value'],
 */
  props: {
    max: {
      type: Number,
      default(){ return 10; }
    },
    min: {
      type: Number,
      default(){ return 0; }
    },
    value: {
      type: Number,
      default(){ return 4; }
    },
    msg: String,
  },

  data () {
    return {
      username: '',
    }
  },

  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {
    open() {
      this.$emit('showbox',this.username);
    },
    setUser(){
      this.$emit('transferUser', this.username)
    }
  }
}
</script>

<style lang='scss' scoped>
.open-box {
  min-height: 20px;
  background-color: pink;
}
</style>
