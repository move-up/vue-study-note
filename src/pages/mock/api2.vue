
<!-- 判断数据类型 -->
<template>
  <div>
    <!-- <template v-if="!detail.show"> -->
      <div class='typeof'>
        <h1>请求数据</h1>


        <el-table
          ref="articleList"
          type="index"
          :data="articleList"
          style="width: 100%">
          <el-table-column
            prop="userId"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="id"
            label="序号"
            width="180">
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
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    <!-- </template>
    <template v-else>
      <detail
        :data="detail.data"
        v-model="detail.show"></detail>
    </template> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getArticleList } from "@/api/api"
// import Detail from './detail.vue'

export default {
  name: '',

  components: {
    // Detail
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
      }
    }
  },

  computed: {
    // ...mapActions(['updateDetail'])
  },

  watch: {
  },

  // vue实例创建时触发
  created: function() {
    //3
    // 页面初始化请求的数据
    let p2 = {
    }
    getArticleList(p2).then(res =>{
      this.articleList = res
      localStorage.articleArr=JSON.stringify(this.films)
    })
  },

  mounted () {
  },

  methods: {
    handleClick(index, row) {
       this.$router.push('/api2/'+ row.userId);
      // // 传数据给vuex
      // this.updateDetail(row).then(() => {
      //   // 跳转到对应详情路由
      //   this.$router.push('/api2/'+ row.userId);
      // })
      // this.detail = Object.assign({}, this.detail, {
      //   data: row,
      //   show: true
      // })
    }
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
