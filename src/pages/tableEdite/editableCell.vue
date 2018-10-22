<!-- 编辑表格 -->
<template>
  <tbody class="body-pro">
    <tr v-for="(col, index) in cols" :key="index">
      <td
        v-for="(opt, key, _index) in col"
        :rowspan="(index === 0 && _index === 0) ? cols.length : 1"
        :key="_index" :width="opt.width">
        <el-input v-if="opt.type === 'input'" v-model="opt.value" :name="String(id) + (index + 1) + key"></el-input>
        <el-checkbox v-else-if="opt.type === 'checkbox'" :label="opt.value" :name="`${String(id) + (index + 1) + key}`"></el-checkbox>
        <el-button v-if="(index === 0 && _index === 0 && canAdd)" type="primary" icon="el-icon-circle-plus-outline" @click="$emit('add')" title="添加多行"></el-button>
        <template v-else>
          {{ opt.value }}
        </template>
      </td>
      <td width="8%">
        <!-- 只有一行 -->
        <template v-if="index === 0 && cols.length === 1">
          <el-button type="danger" icon="el-icon-remove-outline" v-show="false" @click="deleteOneLine(index)" title="删除一行"></el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  @click="handleAddLine" title="添加一行"></el-button>
        </template>
        <!-- 中间行数 -->
        <template v-else-if="index > 0 && index !== cols.length - 1">
          <el-button type="danger" icon="el-icon-remove-outline" v-show="true" @click="deleteOneLine(index)" title="删除一行"></el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="false"  @click="handleAddLine" title="添加一行"></el-button>
        </template>
        <!-- 最后一行 -->
        <template v-else-if="index > 0 && index === cols.length - 1">
          <el-button type="danger" icon="el-icon-remove-outline" v-show="true" @click="deleteOneLine(index)" title="删除一行"></el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  @click="handleAddLine" title="添加一行"></el-button>
        </template>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'EditableCell',

  components: {},

  props: {
    cols: {
      type: [Array],
      required: true
    },
    canAdd: { // 能否添加
      type: [Boolean],
      default: false
    },
    id: {
      type: [Number],
      required: true
    }
  },

  data () {
    return {
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

<style lang='scss'>
</style>
