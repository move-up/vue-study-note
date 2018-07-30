<!--  -->
<template>
  <div class=''>
    <h2>链接：<router-link to="/tableAddLine">添加或删除一行</router-link></h2>
    <h2>链接：<router-link to="/tableCols">多行</router-link></h2>
    <h2>链接：<router-link to="/tableMuti">复杂</router-link></h2>
    <h2>链接1：<router-link to="/muti">routerview1</router-link></h2>
    <router-view></router-view>
    <router-view class="text-center" name="a"></router-view>
    <router-view class="text-center" name="b"></router-view>

    <div class="page form">
      <div class="container">
        <!-- <table class="table-bordered text-center cl">
          <tbody>
            <tr>
              <td colspan="2">项目名称</td>
              <td colspan="13"><input type="text" onkeypress="if(event.keyCode==13) focusNextInput(this);"/></td>
            </tr>
            <tr>
              <td rowspan="2" colspan="2" id="rows-top">项目责任单位</td>
              <td colspan="3">主办单位</td>
              <td colspan="4"><input type="text" onkeypress="if(event.keyCode==13) focusNextInput(this);"/></td>
              <td colspan="3">责任人</td>
              <td colspan="3"><input type="text" onkeypress="if(event.keyCode==13) focusNextInput(this);"/></td>
            </tr>
            <tr>
              <td colspan="3" class='add-box'>
                <i class="add col" title="添加一行"></i>协办单位</td>
              <td colspan="4"><input type="text" onkeypress="if(event.keyCode==13) focusNextInput(this);"/></td>
              <td colspan="3">责任人</td>
              <td colspan="3"><input type="text" onkeypress="if(event.keyCode==13) focusNextInput(this);"/></td>
            </tr>
            <tr>
              <td colspan="2">立项依据</td>
              <td colspan="13">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <td colspan="2">资金来源</td>
              <td colspan="13">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <td colspan="2">用地指标</td>
              <td colspan="13">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <td colspan="2">工作目标</td>
              <td colspan="13">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <td rowspan="2" width="7%">主要任务</td>
              <td width="7%">任务一</td>
              <td colspan="13"><input type="text" /></td>
            </tr>
            <tr>
              <td>任务二</td>
              <td colspan="13"><input type="text" /></td>
            </tr>
            <tr>
              <td colspan="2" rowspan="2">项目推进计划</td>
              <td colspan="3">一季度</td>
              <td colspan="3">二季度</td>
              <td colspan="3">三季度</td>
              <td colspan="3">四季度</td>
              <td rowspan="2">责任单位</td>
            </tr>
            <tr>
              <td>1月</td>
              <td>2月</td>
              <td>3月</td>
              <td>4月</td>
              <td>5月</td>
              <td>6月</td>
              <td>7月</td>
              <td>8月</td>
              <td>9月</td>
              <td>10月</td>
              <td>11月</td>
              <td>12月</td>
            </tr>
          </tbody>
          <tbody class="muti">
            <tr>
              <td rowspan="3" id="rows-1" width='15%' data-num="0" class="add-box">
                第 1 阶段及阶段性任务
              </td>
              <td width='10%' class="add-box"><input type="text" /></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='15%'><input type="text" /></td>
            </tr>
            <tr>
              <td width='10%' class="add-box"><input type="text" /></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='15%'><input type="text" /></td>
            </tr>
            <tr class="row">
              <td width='10%' class="add-box">
                <i class="el-icon-remove-outline f-24" @click="handleDeleteOneRow(this)" title="删除一行"></i>
                <i class="el-icon-circle-plus-outline f-24" @click="handleAddOneRow" title="添加一行"></i>
                <input type="text"/>
              </td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='15%'><input type="text" /></td>
            </tr>
          </tbody>
          <tbody class="muti" attr-rows="2">
            <tr>
              <td rowspan="2" id="rows-2" width='15%' class="add-box" data-num="1">
                第 2 阶段及阶段性任务
                <i class="el-icon-remove-outline f-24 remove-muti" title="删除多行"></i>
                <i class="el-icon-circle-plus-outline f-24 plus-muti" title="添加多行"></i>
              </td>
              <td width='10%' class="add-box"><input type="text" /></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='15%'>
              </td>
            </tr>
            <tr id="row" ref="rows">
              <td width='10%' class="add-box">
                <i class="el-icon-remove-outline f-24" @click="handleDeleteOneRow()" title="删除一行"></i>
                <i class="el-icon-circle-plus-outline f-24" @click="handleAddOneRow" title="添加一行"></i>
                <input type="text"/>
              </td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='5%'><div class="checkbox"><span></span><input type="checkbox" /></div></td>
              <td width='15%'><input type="text" /></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="2">相关文件</td>
              <td colspan="13"><input type="file"><em>请上传 word文档/EXCEL文件/压缩文件 类型</em></td>
            </tr>
            <tr>
              <td colspan="2">市政府分管领导审核意见</td>
              <td colspan="13">
                <textarea name="" id="" cols="30" rows="5" style="height: 80px;"></textarea>
                <div class="clearfix"><label class="pull-right dis-b">签名：<input type="text" class="sign" style="width:auto;"/></label></div>
                <div class="clearfix"><label class="pull-right dis-b">日期：<input type="text" class="date" style="width:auto;"/></label></div>
              </td>
            </tr>
            <tr>
              <td colspan="2">市政府重点工作“五化”管理领导小组意见</td>
              <td colspan="13">
                <textarea name="" id="" cols="30" placeholder="dfjowhfidsfohi222222" rows="5" style="height: 80px;"></textarea>
                <label class="pull-right">日期：<input type="text" class="date" style="width:auto;"/></label>
              </td>
            </tr>
          </tbody>
        </table> -->

        <table class="text-center">
          <tbody>
            <tr>
              <td colspan="2">项目推进计划</td>
              <td colspan="3">一季度</td>
              <td colspan="3">二季度</td>
              <td colspan="3">三季度</td>
              <td colspan="3">四季度</td>
              <td>责任单位</td>
              <td>操作</td>
            </tr>
          </tbody>
          <tbody>
            <tr v-for="(col, index) in cols" :key="index">
              <td
                v-for="(opt, key, _index) in col"
                :rowspan="(index === 0 && _index === 0) ? cols.length : 1"
                :key="_index">
                <el-input v-if="opt.type === 'input'" v-model="opt.value" :name="`${(index + 1) + key}`"></el-input>
                <el-checkbox v-else-if="opt.type === 'checkbox'" v-model="opt.value" :name="`${(index + 1) + key}`"></el-checkbox>
                <template v-else>
                  {{ opt.value }}
                </template>
              </td>
              <td>
                <!-- 问题： 删除第一行的时候有问题 -->
                <!-- <el-button type="danger" icon="el-icon-remove-outline" v-on:click="deleteOneLine(index)">删除</el-button>
                <template v-if="index === cols.length - 1">
                  <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  v-on:click="handleAddLine">添加</el-button>
                </template>
                <template v-else>
                  <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="false"  v-on:click="handleAddLine">添加</el-button>
                </template> -->
                <!-- 只有一行 -->
                <template v-if="index === 0 && cols.length === 1">
                  <el-button type="danger" icon="el-icon-remove-outline" v-show="false" v-on:click="deleteOneLine(index)">删除</el-button>
                  <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  v-on:click="handleAddLine">添加</el-button>
                </template>
                <!-- 中间行数 -->
                <template v-else-if="index > 0 && index !== cols.length - 1">
                  <el-button type="danger" icon="el-icon-remove-outline" v-show="true" v-on:click="deleteOneLine(index)">删除</el-button>
                  <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="false"  v-on:click="handleAddLine">添加</el-button>
                </template>
                <!-- 最后一行 -->
                <template v-else-if="index > 0 && index === cols.length - 1">
                  <el-button type="danger" icon="el-icon-remove-outline" v-show="true" v-on:click="deleteOneLine(index)">删除</el-button>
                  <el-button type="primary" icon="el-icon-circle-plus-outline" v-show="true"  v-on:click="handleAddLine">添加</el-button>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <ul>
      <li
      v-for="(user, index) in users"
      v-if="user.isActive"
      :key="index">
      {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import carousel from '../carousel/index'
import pagination from '../pagination/index'

export default {
  name: '',

  components: {
  },

  props: {},

  data () {
    return {
      users: [
        {
          id: 1,
          name: 'li',
          sex: 'girl',
          isActive: true
        },
        {
          id: 1,
          name: 'wang',
          sex: 'boy',
          isActive: false
        }
      ],
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
      ]
    }
  },

  computed: {
  },

  watch: {},

  created () {
  },

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
i {
  cursor: pointer;
}
.form table {
  width: 100%;
  tbody > tr {
    td {
      padding: 6px;
      border: 1px solid #ccc;
      background: #fafafa;
      color: #333;
      .el-input {
        max-width: 200px;
        text-align: left;
        .el-input__inner {
          height: 30px;
          line-height: 30px;
        }
      }
      .el-button {
        padding: 5px 10px;
        font-size: 12px;
      }
    }
    td:last-of-type {
      text-align: left;
    }
  }
}
</style>
