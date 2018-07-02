<!-- girlgroup -->
<template>
  <div class='girl_wrap'>
    <ul>
      <li v-for="(value, index) in girls" :key="index">
        {{ index }} - {{ value.name }} - {{ value.age }}
        <button @click="noticeGroup(value.name,value.age)">发送消息</button>
      </li>
    </ul>
    <div>接受来自大群的消息：{{ noticeGirl }}</div>
  </div>
</template>

<script>
export default {
  name: 'girl-group',

  components: {},

  props: {
    girls: {
      type: Array,
      required: true
    },
    noticeGirl: {
      type: String,
      required: false
    }
  },

  data () {
    return {
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    noticeGroup (name,age) {
      this.$emit('introudce',{
        name,
        age
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
