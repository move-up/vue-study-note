<template>
  <div class="sidebar">
      这是侧边栏
      <h2>个人中心</h2>
      <ul>
        <li>
          <router-link to="/userCenter/index">个人中心</router-link>
        </li>
        <li>
          <router-link to="/userCenter/changepw">修改密码</router-link>
        </li>
      </ul>
      <h2>商品详情</h2>
      <ul>
        <li>
          <router-link to="/detail/fruit">水果</router-link>
        </li>
        <li>
          <router-link to="/detail/vegetable">蔬菜</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    components: {

    },
    props: {
    },
    data () {
      return {
      }
    },
    computed: {

    },
    watch: {

    },
    created () {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style>

</style>
