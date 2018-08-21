<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
  }
}
</script>

<style lang="scss">
// 全局自定义的css样式
// 其中引用关系以这个文件为起点
// 去找资源
// 如/static/img/login_bg.png
// 就为 ../static/img/login_bg.png
@import './styles/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
