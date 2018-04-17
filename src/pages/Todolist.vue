<template>
  <div class="page-login">

    <div class="todolist">
      <input type="text" v-model="newItem">
      <button @click="addNewItem(newItem)">确认</button>
      <ul>
      <h2>您的代办事项：</h2>
        <a href="javascript:;" v-on:click="deleteAll" class="el-icon-delete">删除所有</a>
        <li v-for="item in items" :key="item.label"  v-bind:class="{finished:item.isFinished}">
          {{ item.label }}
          <a href="javascript:;" v-on:click="deleteOne"  class="el-icon-delete"></a>
        </li>
      </ul>
    </div>

      <div>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search"><i class="el-icon-delete"></i>搜索</el-button>
      </div>

<el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        newItem: '',
        items: [
          {
            label: 'Foo',
            isFinished: true
          },
          {
            label: 'Bar',
            isFinished: false
          }
        ],
      }
    },
    methods: {

      addNewItem: function() {
        if (!this.newItem.length) {
          alert('不能添加空项目!')
          return
        }

        this.items.push({
          label: this.newItem,
          isFinished: false
        })

        this.newItem = ''
      },

      deleteOne: function(index){

        var r = confirm("确定删除？")
        if(r === true){
          this.items.pop(index,1)
        } else {

        }

      },

      deleteAll: function(index){

        var r = confirm("确定删除？")
        if(r === true){
          this.items = []
        } else {

        }

      }

    }
  }
</script>

<style>

</style>
