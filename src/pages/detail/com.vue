<!--  -->
<template>
  <div class='com'>
    <slot name="tip"></slot>
    <h4>{{ post.title }}</h4>
    <p>{{ post.content }}</p>
    <input v-model="postWrite">{{postWrite}}
    <button @click="enlarge">字体加大</button>
  </div>
</template>

<script>
export default {
  name: 'com',

  components: {},

  props: ['post', 'value'],

  data () {
    return {
    }
  },

  computed: {
    postWrite: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  watch: {},

  created () {},

  mounted () {},

  methods: {
    enlarge (val) {
      this.$emit('enlarge', val)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
