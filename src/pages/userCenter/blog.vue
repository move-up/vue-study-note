<template>
    <div class="blog">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
      <input
      v-bind:value="value"
      @input="$emit('input', $event.target.value)" >
      <!-- <el-button type="primary" @click="$emit('enlarge-text', 0.1)">Enlarge text</el-button> -->
      <el-button type="primary" @click="enLarge">Enlarge text</el-button>
      <el-button type="primary" @click="enMinu">EnMinu text</el-button>
      <div class="demo-alert-box">
        <strong>Error:</strong>
        <slot name="errorTip">{{ errorTipCon }}</slot>
      </div>

    </div>
</template>
<script>
  export default {
      name :"blog",
      props:["title","content","value","errorTipCon"],
      methods: {
        enLarge () {
          this.$emit('enlarge-text',0.01)
        },

        enMinu () {
          this.$emit('enlarge-text',-0.01)
        }
      }
  }
</script>

<style scoped lang="scss">
.demo-alert-box {
    margin-top: 5px;
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
}
</style>

