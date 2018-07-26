<!-- 表格添加一行 -->
<template>
  <div class='table'>
    <table class="table">
      <thead>
        <tr>
          <td>性别</td>
          <td>编号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>职业</td>
          <td>爱好</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td rowspan="4">男</td>
          <td>1</td>
          <td>小熊</td>
          <td>23</td>
          <td>fe</td>
          <td>乒乓球 唱歌</td>
          <td>
            <el-button type="danger" icon="el-icon-remove-outline" v-on:click="deleteOneLine(index)">删除</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true" v-on:click="handleAddLine">添加</el-button>
          </td>
        </tr> -->
        <tr v-for="(human, index) in humans" :key="index">
          <td v-if="index == 0" :rowspan="humans.length">{{ human.sex }}</td>
          <td>{{ human.num }}</td>
          <td>{{ human.name }}</td>
          <td>{{ human.age }}</td>
          <td>{{ human.work }}</td>
          <td>{{ human.hobby }}</td>
          <td>
            <el-button type="danger" icon="el-icon-remove-outline" v-on:click="deleteOneLine(index)">删除</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="human.show"  @click="handleAddLine">添加</el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      humans: [
        {
          sex: 'man',
          num: 1,
          name: '小熊',
          age: 23,
          work: 'fe',
          hobby: '乒乓球 唱歌',
          show: false
        },
        {
          sex: 'woman',
          num: 2,
          name: '小李',
          age: 25,
          work: 'fe',
          hobby: '羽毛球',
          show: false
        },
        {
          sex: 'woman',
          num: 3,
          name: '小王',
          age: 25,
          work: 'sales',
          hobby: '睡觉',
          show: false
        },
        {
          sex: 'woman',
          num: 4,
          name: '小李',
          age: 25,
          work: 'fe',
          hobby: '唱歌',
          show: true
        }
      ]
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    handleAddLine () {
      let newNum = this.humans.length - 1
      this.humans[newNum].show = false
      newNum = this.humans[newNum].num + 1
      let newHuman = {
        sex: 'woman',
        num: newNum,
        name: 'Mary',
        age: 22,
        work: '会计',
        hobby: 'writing',
        show: true
      }
      this.humans.push(newHuman)
    },
    deleteOneLine (i) {
      if(this.humans.length > 1) {
        var r = confirm("确定删除？")
        if(r == true && this.humans.length == i + 1) {
          this.humans[i - 1].show = true
          this.humans.splice(i, 1)
        } else {
          this.humans.splice(i, 1)
        }
      } else {
        confirm("主人只剩下最后一行了，不可再删了！")
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
