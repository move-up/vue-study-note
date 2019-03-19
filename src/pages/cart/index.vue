<!-- index -->
<template>
  <div class='page-cart'>
    <table>
      <thead>
        <tr>
          <td>&nbsp;</td>
          <td>ID</td>
          <td>name</td>
          <td>price</td>
          <td>quentity</td>
          <td>parts</td>
          <td>total</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productList"
        :key="index">
          <td>
            <div class="cursor wxz"
            :class="{'check': item.isCheck}"
            @click="doCheck(item)">
              <span class="btn-wxz">未选中</span>
              <span class="btn-xz">选中</span>
            </div>
          </td>
          <td>{{item.productId}}</td>
          <td>{{item.productName}}</td>
          <td>{{item.productPrice | formatMoney('元')}}</td>
          <td>
            <a href="javascript:;" @click="changeQuentity(item, -1)">-</a>
            <input class="quentity" type="text" v-model="item.productQuentity" disabled>
            <a href="javascript:;" @click="changeQuentity(item, +1)">+</a>
          </td>
          <td>
            <p v-for="(part, key) in item.parts"
          :key="key">{{part.partsId}} - {{part.partsName}}</p>
          </td>
          <td>{{item.productPrice*item.productQuentity | formatMoney('元')}}</td>
          <td>
            <div class="red cursor" @click="delModal">删除</div>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>
            <div class="cursor">
              <span class="zx"
              :class="{'check': checkAllFlag}"
              @click="checkAll(true)">全选</span>
              <span class="qxqx"
              @click="checkAll(false)">取消全选</span>
            </div>
          </td>
          <td colspan="6">
            <div class="text-right">
              <h3>结算:</h3>
              <span>总金额：{{ totalMoney }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios from 'axios'
import cartData from './cartData'
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      productList: cartData.result.list,
      checkAllFlag: false,
      totalMoney: 0,
      delFlag: false,
      curProduct: ''
    }
  },
  filters: {
    formatMoney (val, type) {
      return '￥' + val.toFixed(2) + type;
    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
    this.cartView()
  },

  methods: {
    changeQuentity: function(val,act){
      if(act > 0){
        val.productQuentity++
      } else {
        if(val.productQuentity < 0){
          val.productQuentity = 1
        } else {
          val.productQuentity--
        }
      }
      this.calcTotalMoney()
    },
    doCheck: function(val){
      if(typeof val.isCheck == 'undefined') {
        // vm.$set(val, 'isCheck', true)
        this.$set(val, 'isCheck', true)
        console.log(val.isCheck);
      } else {
        val.isCheck = !val.isCheck
        console.log(val.isCheck);
      }
      this.calcTotalMoney()
    },
    checkAll: function(flag){
      this.checkAllFlag = flag
      var _this = this
      this.productList.forEach(function(val, index){
        if(typeof val.isCheck == 'undefined') {
          // vm.$set(val, 'isCheck', true)
          _this.$set(val, 'isCheck', flag)
        } else {
          val.isCheck = flag
        }
      })
      this.calcTotalMoney()

    },
    calcTotalMoney: function(){
      var _this = this
      this.totalMoney = 0
      this.productList.forEach(function(val, index){
        if(val.isCheck) {
         _this.totalMoney += val.productPrice * val.productQuentity
        }
      })
    },
    delConfirm: function(item){
      //确认删除
      this.delFlag = true
      this.curProduct = item
    },
    delProduct: function(){
      //删除
      var index = this.productList.indexOf(this.curProduct)
      this.productList.splice(index, 1)
    },
    cartView: function(){
      // axios.get('../../../cartData.json', {"id": 123}).then(
      //   res => {
      //     this.productList = res.result.list
      //     console.log(222)
      //   }
      // )
    },
    delModal () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
  }
}
</script>

<style lang='scss' scoped>
.red {
  color: red;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 8px 10px;
  line-height: 25px;
  border: 1px solid #eee;
  text-align: center;
}
.quentity {
  width: 20px;
  text-align: center;
}
.wxz,
.cursor {
  cursor: pointer;
}
.btn-wxz {
  color: #ccc;
}
.btn-xz {
  color: #f90;
  display: none;
}
.check .btn-xz {
  display: block;
}
.check .btn-wxz {
  display: none;
}
</style>
