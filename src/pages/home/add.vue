<template>
  <div class="page-index">
    <div id="demo1">
      <input type="number" v-model="a" v-bind:id="dynamicId">+
      <input type="number" v-model="b">+
      <input type="number" v-model="c">= <span>{{ total }}</span>
      <!-- <span>{{ total }}</span> -->
    </div>
    <div id="DEMO2">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>

    <el-table
      :data="data1"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {

    },
    props: {
    },
    data () {
      return {
        a: 20,
        b: 40,
        c: 10,
        //total: 70,
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        message: 'Hello',
        dynamicId: 'num1',
        data1:[
          {
            date: '2018-12-15',
            name:'王小明',
            address: '北京市朝阳区芍药居'
          },
          {
            date: '2018-12-15',
            name:'张晓峰',
            address: '上海市浦东新区世纪大道'
          },
          {
            date: '2018-12-15',
            name:'李小刚',
            address: '北京市海淀区西二旗'
          },
          {
            date: '2018-12-15',
            name:'周小伟',
            address: '深圳市南山区深南大道'
          }
        ],
      }
    },
    computed: {
      total () {
        return parseFloat(this.a) + parseFloat(this.b) + parseFloat(this.c)
        //return this.a + this.b + this.c
      },
      reversedMessage () {
        return this.message.split('').reverse().join('')
      }
    },
    watch: {
      /* a: function(val){
        this.total = parseFloat(val) + parseFloat(this.b) + parseFloat(this.c)
      },

      b: function(val){
        this.total = parseFloat(this.a) + parseFloat(val) + parseFloat(this.c)
      },

      c: function(val){
        this.total = parseFloat(this.a) + parseFloat(this.b) + parseFloat(val)
      }, */

      firstName: function(val){
        this.fullName = val + ' ' + this.lastName
      },

      lastName: function(val){
        this.fullName = this.firstName + ' ' + val
      },
    },
    created () {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style>
</style>
