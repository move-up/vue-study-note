<!-- 分页实例 -->
<template>
  <div class='pagination'>
    <!-- 内容区 -->
    <el-table
      :data="table.data"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="boss"
        label="导演"
        width="80">
      </el-table-column>
      <el-table-column
        prop="actors"
        label="演员"
        width="230">
      </el-table-column>
      <el-table-column
        prop="star"
        label="评分"
        width="50">
      </el-table-column>
      <el-table-column
        prop="des"
        label="描述"
        width="600">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- <div class="block">
      <el-pagination @current-change="handleCurrentChange" @prev-click="handlePrevClick" @next-click="handleNextClick" :current-page="table.page"
        :page-size="table.size"
        layout="prev, pager, next"
        :total="table.total">
      </el-pagination>
    </div> -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="table.page"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="table.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="table.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getTableListPage } from '@/api/api'

export default {
  name: 'pagination',

  components: {
  },

  props: {},

  data () {
    return {
      table: {
        data: [],
        page: 1,
        total: null,
        size: 2,
      },
    }
  },

  computed: {},

  watch: {},

  created () {
    let page = this.table.page
    let size = this.table.size
    getTableListPage({ page, size }).then(this.handleFetchData)
  },

  mounted () {},

  methods: {
    handleFetchData (res) {
      this.table.data = res.data
      this.table.total = Number(res.count)
    },

    /* handlePrevClick (val) {
      console.log(0)
      this.table.page = val
      const size = this.table.size
      getTableListPage({ page, size }).then(this.handleFetchData)
    },

    handleNextClick (val) {
      console.log(100)
      this.table.page = vale
      const size = this.table.siz
      getTableListPage({ page, size }).then(this.handleFetchData)
    }, */

    handleSizeChange (size) {
      this.table.size = size
      const page = this.table.page
      getTableListPage({ page, size }).then(this.handleFetchData)
    },

    handleCurrentChange (page) {
      console.log('change')
      this.table.page = page
      const size = this.table.size
      getTableListPage({ page, size }).then(this.handleFetchData)
    },

  }
}
</script>

<style lang='scss' scoped>
table tbody tr .ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
