<!-- 判断数据类型 -->
<template>
  <div class='typeof'>
    <Header></Header>
      带参请求数据 {{ this.$route.params.userId }}
    <ul>
      <li>{{ articleDetail.id }}</li>
      <li>{{ articleDetail.title }}</li>
      <li>{{ articleDetail.body }}</li>
    </ul>

  </div>
</template>

<script>
import TopHeader from '../../components/header'

import { getArticleDetail } from "@/api/api"

export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      articleDetail: {
        id: '',
        title: '',
        body: ''
      },
      articleArr: []
    }
  },

  computed: {},

  watch: {
  },

  // vue实例创建时触发
  created: function() {
    //3
    // 页面初始化请求的数据
    let p = {
        userId: this.$route.params.userId
    };
    //console.log(this.$route.params.userId);
    getArticleDetail(p).then(res => {
        this.articleDetail = res
    });
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang='scss' scoped>
</style>
