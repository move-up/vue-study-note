<!--  -->
<template>
<div class="pageWrap">
    <h2>v-if,v-show</h2>
    <ul>
      <li
      v-for="(item, index) in list"
      :key="index"
      v-if="item.age > 24"
      v-bind:style="{'margin-bottom':'15px','list-style': 'none'}"
      :class="['cursorStyle',{'active': index == current && current !== ''}]"
      @click="doChangeBg(index)">
        <span
        :style="numStyle"
        :class="['anotherStyle']">{{index+1}}</span>
        <span
        :class="['a', {'another': item.name == 'lwz'}]">名字：{{ item.name }}， 年龄：{{item.age}} </span>
      </li>
    </ul>
    <button @click="add">添加一行</button>

    <ul>
      <h2>localStorage中存储的数据如下：</h2>
      <li v-for="(newItem,i) in newList" :key="i"><span>名字：{{ newItem.name }}，</span><span v-show="newItem.age == 25">年龄：{{newItem.age}}</span></li>
    </ul>
</div>
</template>

<script>
var arr = 123
import Store from './store.js'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      current: '',
      arr: [],
      numStyle: {
        display: 'inline-block',
        backgroundColor: '#f90',
        color: '#fff',
        width: '25px',
        heigh: '25px',
        borderRadius: '3px',
        textAlign: 'center'
      },
      list: [
        { name: 'lwz', age: 25},
        { name: 'xyf', age: 24},
        { name: 'wsy', age: 25},
        { name: 'cvb', age: 25},
        { name: 'asd', age: 24},
        { name: 'wew', age: 25},
        { name: 'rew', age: 25},
        { name: 'rwq', age: 25},
        { name: 'ewq', age: 25},
      ],
      newList: Store.fetch()
      // newList: JSON.parse(localStorage.getItem('newListLocal') || '[]')
    }
  },
  watch: {
    newList: {
      handler (newList) {
        Store.save(newList)
      },
      deep: true
    }
  },
  methods: {
    doChangeBg: function (index) {
      this.current = index
    },
    add: function () {
      console.log(this.newList)
      if(this.current === '') return;
      if(this.arr.indexOf(this.current) == -1){
        this.newList.push(this.list[this.current]);
        this.arr.push(this.current);
        this.current = ''
      } else {
        alert('选择了重复的序号！')
      }
      // window.localStorage.setItem('newListLocal', JSON.stringify(this.newList));
    }
  }
}
</script>

<style lang='scss' scoped>
div,span {
  font-size: 14px;
}
.itemStyle {
  line-height: 25px;
}
.a {
  color: #f90;
}
.another {
  border-bottom: 1px solid #f90;
}
.anotherStyle {
  color: red;
}
.active {
  background-color: #f9e1e5;
}
ul li {
  list-style: none;
}
.cursorStyle {
  cursor: pointer;
}
</style>
