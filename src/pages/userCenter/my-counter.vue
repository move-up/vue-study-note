<template>
    <div class="blog">
      <h1>{{ val }}</h1>
      <el-button type="primary" @click="plus">+</el-button>
      <el-button type="primary" @click="minu">-</el-button>
    </div>
</template>
<script>
  export default {
      name: "myCounter",
      data () {
        return {
          val: this.value
        }
      },
      props:["value"],
      methods: {
        plus () {
          this.val = this.val + 1
          this.$emit('input', this.val) // key code
        },
        minu () {
          if(this.val > 1) {
            this.val = this.val - 1
            this.$emit('input',this.val)
          }
        }
      },
  }
</script>
