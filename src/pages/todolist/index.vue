<template>
  <div class="">

<!--     <div class="todolist">
      <input type="text" v-model="newItem">
      <button @click="addNewItem(newItem)">确认</button>
      <ul>
      <h2>您的代办事项：</h2>
        <a href="javascript:;" @click="deleteAll" class="el-icon-delete">删除所有</a>
        <li v-for="item in items" :key="item.label"  v-bind:class="{finished:item.isFinished}">
          {{ item.label }}
          <a href="javascript:;" @click="deleteOne"  class="el-icon-delete"></a>
        </li>
      </ul>
    </div>

      <div>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search"><i class="el-icon-delete"></i>搜索</el-button>
      </div> -->

<!-- <el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button> -->
  <h2>todolist</h2>
  <div id="todo-list-example">
    <input
      v-model="newTodoText"
      @keyup.enter="addNewTodo"
      placeholder="Add a todo"
    >
    <ul>
      <li
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        @remove="todos.splice(index, 1)"
      >
      {{ index + 1 }} . <span class="todo-title" v-show="!todo.show">{{ todo.title }}</span>
      <span v-show="todo.show">
        <el-input v-model="todo.title"></el-input>
        <el-button type="primary" icon="el-icon-check" @click="handleMakeSure(index)">提交</el-button>
      </span>
      <el-button data-a="你没有权限点击" type="primary" icon="el-icon-edit" @click="handleWrite(index)">修改</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deleteOne">删除</el-button>
      </li>
    </ul>

    <h2>checkbox</h2>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span class="c-white">Checked names: {{ checkedNames }}</span>
    </div>
  </div>
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
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes',
            show: false
          },
          {
            id: 2,
            title: 'Take out the trash',
            show: false
          },
          {
            id: 3,
            title: 'Mow the lawn',
            show: false
          }
        ],
        nextTodoId: 4,
        checkedNames: []
      }
    },
    methods: {
      handleMakeSure: function (i) {
        this.todos[i].show = !this.todos[i].show
        // this.todos[i].show = false
        // console.log('i:' + i + event.currentTarget.dataset.a + this.todos[i].title)
      },
      handleWrite: function (i) {
        this.todos[i].show = !this.todos[i].show
        // this.todos[i].show = true
      },

      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      },

      addNewItem: function () {
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

      deleteOne: function (index){

        var r = confirm("确定删除？")
        if(r === true){
          this.todos.pop(index,1)
        } else {

        }

      },

      deleteOne2: function (index){

        var r = confirm("确定删除？")
        if(r === true){
          this.todos.pop(index,1)
        } else {

        }

      },

      deleteAll: function (index){

        var r = confirm("确定删除？")
        if(r === true){
          this.items = []
        } else {

        }

      }

    }
  }
</script>

<style lang='scss' scoped>
ul li {
  list-style: none;
  margin-bottom: 10px;
}
.el-input,
.todo-title {
  display: inline-block;
  width: 250px;
}
button {
  margin-left: 10px;
}
</style>
