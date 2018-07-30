<!-- 分页 -->
<template>
<div>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="表格">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="进度条">
      <div style="width: 500px;">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="per.one"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="per.two" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="per.three" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="per.four" status="exception"></el-progress>
      </div>
      <div>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </div>
    </el-tab-pane>
    <el-tab-pane label="弹窗">
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

      <el-dialog
        title="弹窗标题"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        center>
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿title">定时任务补偿content</el-tab-pane>
  </el-tabs>


    <div style="margin-top: 150px;">
        <Tab v-model="tab" :options="options"></Tab>
        <p class="info">{{tab}}</p>
    </div>
</div>
</template>

<script>
import Tab from "@/components/tab"

export default {
  name: '',

  components: {
    Tab
  },

  props: {},

  data () {
    return {
       tabPosition: 'top',
        per: {
          one: 70,
          two: 80,
          three: 100,
          four: 50
        },
        dialogVisible: false,

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

                tab: 'bj',
                options: [{
                    value: 'bj',
                    text: '北京'
                }, {
                    value: 'sh',
                    text: '上海',
                    disabled: true
                }, {
                    value: 'gz',
                    text: '广州'
                }, {
                    value: 'sz',
                    text: '深圳'
                }]
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style lang='scss'>
div.el-tabs__item:hover {
    color: #f90;
}
div.el-tabs__item.is-active {
  color: #f90;
}
div.el-tabs__active-bar {
  background-color: #f90;
}
.el-progress {
  margin-bottom: 10px;
}
</style>
