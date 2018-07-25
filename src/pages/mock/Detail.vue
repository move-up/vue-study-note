<!-- 判断数据类型 -->
<template>
  <div class='typeof'>
      带参请求数据 userId: {{ this.$route.params.userId }}
    <ul v-for="(article, index) in articleDetail" :key="index">
      <li class="article-title">{{ index + 1 }} title: {{ article.title }} <span class="article-id">id: {{ article.id }}</span></li>
      <li class="article-body">body: {{ article.body }}</li>
    </ul>

  </div>
</template>

<script>

import { getArticleDetail } from "@/api/api"

export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      article: {
        id: '',
        title: '',
        body: ''
      },
      articleDetail: []
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

ul li {
  list-style: none;
  line-height: 30px;
}
.article-id {
  font-size: 16px;
  color: #3879d9;
}
.article-title {
  font-size: 18px;
  color: #5bb8ff;
}
.article-body {
  font-size: 13px;
  border-bottom: 1px dashed #ccc;
}
</style>
