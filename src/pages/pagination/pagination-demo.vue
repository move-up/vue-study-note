<!--  -->
<template>
  <div class='pagination'>

    <table>
      <tbody>
        <tr>
          <td>序号</td>
          <td>id</td>
          <td>类型</td>
          <td>标题</td>
          <td>更新时间</td>
          <td>图片</td>
        </tr>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.catname }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.update_time }}</td>
          <td><img :src="`http://47.94.144.183${item.image}`" alt="图片展示"></td>
        </tr>
      </tbody>
    </table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getNewsList } from '@/api/api'

export default {
  data () {
    return {
      tableData: [],
      total: null,
      size: 10,
      currentPage: 1
    }
  },

  computed: {},

  watch: {},

  created () {
    let p = {
      page: this.tableData.page,
      size: this.tableData.size
    }
    getNewsList(p).then(this.handleFetchData)
  },

  mounted () {},

  methods: {
    handleFetchData (res) {
      this.tableData = res.data.list
      this.total = Number(res.data.total)
    },
    handleCurrentChange (page) {
      this.page = page
      const size = this.size
      getNewsList({page, size}).then(this.handleFetchData)
    },
    handleSizeChange (size) {
      this.size = size
      const page = this.page
      getNewsList({page, size}).then(this.handleFetchData)
    }
  }
}
</script>

<style lang='scss' scoped>
table tbody > tr > td {
  width: 12%;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  color: #666;
}
img {
  width: 100px;
  height: 57px;
}
</style>
