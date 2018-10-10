
<!-- 判断数据类型 -->
<template>
  <div>
      <div class='typeof'>
        <h1>请求数据</h1>
        <button @scroll.passive="onScroll">scroll</button>
        <el-table
          ref="articleList"
          type="index"
          :data="articleList"
          style="width: 100%">
          <el-table-column
            prop="userId"
            label="用户"
            width="100">
          </el-table-column>
          <el-table-column
            prop="id"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="body"
            label="内容">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <router-link :to="{name: 'detail',params: {userId: scope.row.userId} }">routerLink查看</router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getArticleList } from "@/api/api"

export default {
  name: '',

  components: {
  },

  props: {},

  data () {
    return {
      articleList: [],
      userId: '',
      id: '',
      title: '',
      body: '',
      detail: {
        data: [],
        show: false
      },
      a: 'hello'
    }
  },

  computed: {
  },

  watch: {
  },

  // vue实例创建时触发
  created: function() {
    console.log('this created:' + this.a)
    //3
    // 页面初始化请求的数据
    let p2 = {
    }
    getArticleList(p2).then(res =>{
      this.articleList = res
      localStorage.articleArr=JSON.stringify(this.films)
    })
  },

  mounted: function () {
    console.log('this mounted:' + this.a)
  },

  methods: {
    handleClick(row) {
      // this.$router.push('/routerPush/detail/'+ row.userId);
      this.$router.push({name: 'detail', params: { userId: row.userId } });
    },
    onScroll () {
      console.log('scroll')
    }
  },

  destroyed: function(){
    console.log('this destroyed:' + this.a)
  }
}
</script>

<style lang='scss' scoped>
.text-center {
  text-align: center;
}
li {
  list-style: none;
  width: 300px;
  margin: 10px auto;
  text-align: left;
}
</style>
