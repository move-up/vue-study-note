<!--  -->
<template>
  <div class='ft'>
    <div class="apple">苹果</div>
    <div class="banana">香蕉</div>
    <input type="checkbox" id="checkbox" v-model="isChecked">
    <label for="checkbox">{{ isChecked }}</label>
    <input v-model.number="age" type="number">
    <input v-model.lazy.trim="msg" >{{msg}}
    <div :style="{ fontSize: postFontSize + 'px' }">
      <com :post="post" :value="post.write" @enlarge="handleEnlarge" @input="handleInput">
        <!-- <template slot="tip">
          <h2>this is a tip</h2>
        </template> -->
        <h2 slot="tip">this is a tip</h2>
      </com>
    </div>
  </div>
</template>

<script>
import com from './com'
export default {
  name: '',

  components: {
    com
  },

  props: {},

  data () {
    return {
      isChecked: true,
      age: null,
      msg: '',
      post: {
        title: 'this is post title',
        content: 'this is post content',
        write: ''
      },
      postFontSize: 12
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    handleEnlarge () {
      this.postFontSize += 1
    },
    handleInput (val) {
      this.post.write = val
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
