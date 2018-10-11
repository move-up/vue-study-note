<!-- 表格添加一行 -->
<template>
  <div class='table'>
    <table class="table">
      <thead>
        <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>职业</td>
          <td>爱好</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(human, index) in humans" :key="index">
          <td>{{ human.num }}</td>
          <td>{{ human.name }}</td>
          <td>{{ human.age }}</td>
          <td>{{ human.work }}</td>
          <td>{{ human.hobby }}</td>
          <td>
            <el-button type="danger" icon="el-icon-remove-outline" @click="deleteOneLine(index)">删除</el-button>
            <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="human.show" @click="handleAddLine">添加</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="show-d">oldList : &nbsp; {{ oldList }}</div>
    <div class="show-d">newList : {{ newList }}</div> -->
  </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      humans: [
        {
          num: 1,
          name: '小熊',
          age: 23,
          work: 'fe',
          hobby: '乒乓球 唱歌',
          show: false
        },
        {
          num: 2,
          name: '小李',
          age: 25,
          work: 'fe',
          hobby: '羽毛球',
          show: false
        },
        {
          num: 3,
          name: '小王',
          age: 25,
          work: 'sales',
          hobby: '睡觉',
          show: false
        },
        {
          num: 4,
          name: '小李',
          age: 25,
          work: 'fe',
          hobby: '唱歌',
          show: true
        }
      ],
      sortable: null,
      oldList: [],
      newList: []
    }
  },

  computed: {},

  watch: {},

  created () {
    this.addData()
  },

  mounted () {},

  methods: {
    addData () {
      this.oldList = this.humans.map(v => v.num)
      this.newList = this.oldList.slice()
      this.$nextTick(() => {
        this.setSort()
      })
    },
    handleAddLine () {
      let newNum = this.humans.length - 1
      this.humans[newNum].show = false
      newNum = this.humans[newNum].num + 1
      let newHuman = {
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
    },
    setSort() {
      const el = document.querySelectorAll('table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          // const targetRow = this.humans.splice(evt.oldIndex, 1)[0]
          // this.humans.splice(evt.newIndex, 0, targetRow)

          // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          // this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
