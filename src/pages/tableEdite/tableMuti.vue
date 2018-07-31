<!--  -->
<template>
<table>
  <tbody>
    <tr v-for="(col, index) in cols" :key="index">
      <td
        v-for="(opt, key, _index) in col"
        :rowspan="(index === 0 && _index === 0) ? cols.length : 1"
        :key="_index">
        <el-input v-if="opt.type === 'input'" v-model="opt.value" :name="(index + 1) + key"></el-input>
        <el-checkbox v-else-if="opt.type === 'checkbox'" v-model="opt.value" :name="`${(index + 1) + key}`"></el-checkbox>
        <template v-else>
          {{ opt.value }}
        </template>
      </td>
      <td>
        <!-- 只有一行 -->
        <template v-if="index === 0 && cols.length === 1">
          <el-button type="danger" icon="el-icon-remove-outline" v-show="false" @click="deleteOneLine(index)">删除</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  @click="handleAddLine">添加</el-button>
        </template>
        <!-- 中间行数 -->
        <template v-else-if="index > 0 && index !== cols.length - 1">
          <el-button type="danger" icon="el-icon-remove-outline" v-show="true" @click="deleteOneLine(index)">删除</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="false"  @click="handleAddLine">添加</el-button>
        </template>
        <!-- 最后一行 -->
        <template v-else-if="index > 0 && index === cols.length - 1">
          <el-button type="danger" icon="el-icon-remove-outline" v-show="true" @click="deleteOneLine(index)">删除</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  @click="handleAddLine">添加</el-button>
        </template>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {
  },

  data () {
    return {
      cols: [
        {
          one: {
            value: '',
            type: 'input'
          },
          two: {
            value: '',
            type: 'input'
          },
          three: {
            value: '',
            type: 'checkbox'
          },
          four: {
            value: '',
            type: 'checkbox'
          },
          five: {
            value: '',
            type: 'checkbox'
          },
          six: {
            value: '',
            type: 'checkbox'
          },
          seven: {
            value: '',
            type: 'checkbox'
          },
          eight: {
            value: '',
            type: 'checkbox'
          },
          ten: {
            value: '',
            type: 'checkbox'
          },
          oneOne: {
            value: '',
            type: 'checkbox'
          },
          oneTwo: {
            value: '',
            type: 'checkbox'
          },
          oneThree: {
            value: '',
            type: 'checkbox'
          },
          oneFour: {
            value: '',
            type: 'checkbox'
          },
          oneFive: {
            value: '',
            type: 'checkbox'
          },
          num: {
            value: 1,
            type: 'text'
          },
          // colsAddShow: false,
          // colsDeleteShow: false,
        },
        {
          two: {
            value: '',
            type: 'input'
          },
          three: {
            value: '',
            type: 'checkbox'
          },
          four: {
            value: '',
            type: 'checkbox'
          },
          five: {
            value: '',
            type: 'checkbox'
          },
          six: {
            value: '',
            type: 'checkbox'
          },
          seven: {
            value: '',
            type: 'checkbox'
          },
          eight: {
            value: '',
            type: 'checkbox'
          },
          ten: {
            value: '',
            type: 'checkbox'
          },
          oneOne: {
            value: '',
            type: 'checkbox'
          },
          oneTwo: {
            value: '',
            type: 'checkbox'
          },
          oneThree: {
            value: '',
            type: 'checkbox'
          },
          oneFour: {
            value: '',
            type: 'checkbox'
          },
          oneFive: {
            value: '',
            type: 'checkbox'
          },
          num: {
            value: 2,
            type: 'text'
          },
        },
        {
          two: {
            value: '',
            type: 'input'
          },
          three: {
            value: '',
            type: 'checkbox'
          },
          four: {
            value: '',
            type: 'checkbox'
          },
          five: {
            value: '',
            type: 'checkbox'
          },
          six: {
            value: '',
            type: 'checkbox'
          },
          seven: {
            value: '',
            type: 'checkbox'
          },
          eight: {
            value: '',
            type: 'checkbox'
          },
          ten: {
            value: '',
            type: 'checkbox'
          },
          oneOne: {
            value: '',
            type: 'checkbox'
          },
          oneTwo: {
            value: '',
            type: 'checkbox'
          },
          oneThree: {
            value: '',
            type: 'checkbox'
          },
          oneFour: {
            value: '',
            type: 'checkbox'
          },
          oneFive: {
            value: '',
            type: 'checkbox'
          },
          num: {
            value: 3,
            type: 'text'
          },
        },
      ],
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {

    handleAddLine () {
      let newNum = this.cols.length - 1
      newNum = this.cols[newNum].num.value + 1
      let newHuman =
        {
          two: {
            value: '',
            type: 'input'
          },
          three: {
            value: '',
            type: 'checkbox'
          },
          four: {
            value: '',
            type: 'checkbox'
          },
          five: {
            value: '',
            type: 'checkbox'
          },
          six: {
            value: '',
            type: 'checkbox'
          },
          seven: {
            value: '',
            type: 'checkbox'
          },
          eight: {
            value: '',
            type: 'checkbox'
          },
          ten: {
            value: '',
            type: 'checkbox'
          },
          oneOne: {
            value: '',
            type: 'checkbox'
          },
          oneTwo: {
            value: '',
            type: 'checkbox'
          },
          oneThree: {
            value: '',
            type: 'checkbox'
          },
          oneFour: {
            value: '',
            type: 'checkbox'
          },
          oneFive: {
            value: '',
            type: 'checkbox'
          },
          num: {
            value: newNum,
            type: 'text'
          },
        }
      this.cols.push(newHuman)
    },
    deleteOneLine (i) {
      if(this.cols.length > 1) {
        var r = confirm("确定删除？")
        if(r == true && this.cols.length == i + 1) {
          // this.cols[i - 1].col.colsAddShow = true
          // console.log(this.cols[i - 1])
          this.cols.splice(i, 1)
        } else {
          this.cols.splice(i, 1)
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
