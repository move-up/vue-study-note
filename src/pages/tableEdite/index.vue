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
              <td colspan="2" rowspan="2">项目推进计划</td>
              <td colspan="3">一季度</td>
              <td colspan="3">二季度</td>
              <td colspan="3">三季度</td>
              <td colspan="3">四季度</td>
              <td>责任单位</td>
              <td>操作</td>
            </tr>
          </tbody>
          <editable-cell
            v-for="(cols, index) in colsList"
            :key="index"
            :id="index"
            :canAdd="true"
            @add="handleAddCell"
            :cols="cols"/>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import carousel from '../carousel/index'
import pagination from '../pagination/index'
import EditableCell from './editableCell.vue'

export default {
  name: '',

  components: {
    EditableCell
  },

  props: {},

  data () {
    return {
      colTpl: [
        {
          one: {
            value: '',
            type: 'input',
            width: '15%'
          },
          two: {
            value: '',
            type: 'input',
            width: '15%'
          },
          three: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          four: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          five: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          six: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          seven: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          eight: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          ten: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          oneOne: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          oneTwo: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          oneThree: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          oneFour: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          oneFive: {
            value: '',
            type: 'checkbox',
            width: '4%'
          },
          num: {
            value: 1,
            type: 'text',
            width: '12%'
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
      colsList: []
    }
  },

  computed: {
  },

  watch: {},

  created () {
    this.colsList.push(window._.cloneDeep(this.colTpl))
  },

  mounted () {},

  methods: {
    handleAddCell () {
      let tpl = window._.cloneDeep(this.colTpl)
      this.colsList.push(tpl)
    }
  }
}
</script>

<style lang='scss'>
.body-pro .el-checkbox,
.body-pro .el-checkbox__input,
.body-pro .el-checkbox__inner {
  display: block;
  padding: 0;
  margin: 0;
  background-color: #fff;
  width: 100%;
  height: 25px;
}
table tbody.body-pro > tr > td {
  padding: 1px;
  position: relative!important;
}
table tbody.body-pro > tr > td .el-input__inner {
  border: 0;
  padding: 0 3px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
table tbody.body-pro > tr > td .el-checkbox__inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
}
tbody.body-pro .el-checkbox__inner::after {
  width: 6px;
  height: 14px;
  left: 13px;
}
table tbody.body-pro > tr td .el-button {
  padding: 5px 10px;
  font-size: 12px;
  margin: 1px 0 0 1px;
}
</style>
