<template>
  <div class="page-login">

    <div class="todolist">
      <input type="text" v-model="newItem">
      <button @click="addNewItem(newItem)">确认</button>
      <ul>
      <h2>您的代办事项：</h2>
        <a href="javascript:;" v-on:click="deleteAll">删除所有</a>
        <li v-for="item in items" :key="item.label"  v-bind:class="{finished:item.isFinished}">
          {{ item.label }}
          <a href="javascript:;" v-on:click="deleteOne">删除</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
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
