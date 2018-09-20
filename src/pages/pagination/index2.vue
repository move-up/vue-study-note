
<!-- 判断数据类型 -->
<template>
  <div class='typeof'>
    <h1>请求数据</h1>
    <h2>链接：<router-link to="/routerPush">routerPush实例</router-link></h2>
    <!-- <div class="clearfix dc-box-red text-center" v-for="(item,index) in friendsList" :key="index" >
      <li>{{ item.id }} . {{ item.name }}   {{ item.age }}   {{ item.area }}</li>
    </div> -->

    <el-table
      ref="table"
      :data="table.data"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="日期"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column> -->
      <el-table-column
        prop="title"
        label="地址">
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="table.page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="table.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="table.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getFriendsList } from "@/api/api";
import { getTableListByPage } from "@/api/api";
import { getNewsList } from '@/api/api'

export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      friendsList: [],
      item: {
        id: '',
        name: '',
        age: '',
        area: '',
      },
      table: {
        data: [],
        total: null,
        size: 10,
        page: 1
      }
    }
  },

  computed: {},

  watch: {},

  // vue实例创建时触发
  created: function() {
    //3
    // 页面初始化请求的数据
    // let p = {};
    // getFriendsList(p).then(res => {
    //   this.friendsList = res.data.list;
    //   console.log(res.data);
    // })
    let page = this.table.page
    let size = this.table.size
    getNewsList({ page, size }).then(this.handleFetchData)

  },

  mounted () {
    // console.log(this.$refs['table'], 'mounted')
  },

  methods: {
    handleFetchData (res) {
      this.table.data = res.data.list;
      console.log(this.table.data);
      this.table.total = Number(res.data.total)
    },
    handleSizeChange (size) {
      this.table.size = size
      const page = this.table.page
      getNewsList({ page, size }).then(this.handleFetchData)
    },
    handleCurrentChange (page) {
      this.table.page = page
      const size = this.table.size
      getNewsList({ page, size }).then(this.handleFetchData)
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
