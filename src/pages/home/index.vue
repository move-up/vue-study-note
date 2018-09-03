<template>
  <div class="page-index">

    <div class="wrap">
      <h1>目录</h1>
      <div class="catalog">
        <div class="item">
          <router-link to="/login" title="login">
              <div class="date">
                  <span>
                    2018-03-17
                  </span>
              </div>
              login
          </router-link>
        </div>
        <div class="item">
          <router-link to="/todolist" title="todolist">
              <div class="date">
                  <span>
                    2018-04-17
                  </span>
              </div>
              todolist 入门练习
          </router-link>
        </div>
        <div class="item">
          <router-link to="/userCenter/index" title="五化首页">
              <div class="date">
                  <span>
                    2018-06-28
                  </span>
              </div>
              vue-wh五化实例
          </router-link>
        </div>
        <div class="item">
          <router-link to="/typeof" title="typeof">
              <div class="date">
                  <span>
                    2018-06-28
                  </span>
              </div>
              判断数据类型
          </router-link>
        </div>
        <div class="item">
          <router-link to="/mock" title="mock">
              <div class="date">
                  <span>
                    2018-06-28
                  </span>
              </div>
              mock语法
          </router-link>
        </div>
        <div class="item">
          <router-link to="/api" title="api">
              <div class="date">
                  <span>
                    2018-06-29
                  </span>
              </div>
              api相关
          </router-link>
        </div>
        <div class="item">
          <router-link to="/timer" title="timer">
              <div class="date">
                  <span>
                    2018-07-03
                  </span>
              </div>
              timer定时器
          </router-link>
        </div>
        <div class="item">
          <router-link to="/render" title="render">
              <div class="date">
                  <span>
                    2018-07-04
                  </span>
              </div>
              render函数
          </router-link>
        </div>
        <div class="item">
          <router-link to="/pagination" title="pagination">
              <div class="date">
                  <span>
                    2018-07-08
                  </span>
              </div>
              pagination分页
          </router-link>
        </div>
        <div class="item">
          <router-link to="/element" title="element">
              <div class="date">
                  <span>
                    2018-07-23
                  </span>
              </div>
              element组件
          </router-link>
        </div>
        <div class="item">
          <router-link to="/table" title="table">
              <div class="date">
                  <span>
                    2018-07-26
                  </span>
              </div>
              table表格
          </router-link>
        </div>
        <div class="item">
          <router-link @click="get" title="table">
              table表格
          </router-link>
        </div>
      </div>
    </div>

    <!-- 计算器实例
    <Add></Add> -->
  </div>
</template>

<script>
import { getArticleList2 } from "@/api/api"

import Add from './add'
  export default {
    name: '',
    components: {
      Add
    },
    props: {
    },
    data () {
      return {
        articleList: [],
      }
    },
    computed: {

    },
    watch: {

    },
    created () {
      let p = {}
      getArticleList2(p).then(res =>{
        this.articleList2 = res
        console.log(articleList2)
      })
    },
    mounted () {

    },
    methods: {
      get(){
        console.log(articleList2)
      }
    }
  }
</script>

<style>
  html,body {
      height: 100%;
      margin: 0;
      font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
  }

  .wrap {
      width: 1200px;
      margin:0 auto;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==);
      background-size: 30px 30px;
      min-height: 100%;
      -webkit-box-sizing:border-box;
      box-sizing: border-box;
      padding:20px 40px;
  }

  h1 {
      text-align: center;
  }

  .catalog .item {
      float: left;
      width: 200px;
      height: 46px;
      margin: 10px 15px;
      text-align: center;
  }

  .catalog .item a {
      box-sizing: border-box;
      height: 100%;
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 35px;
      text-decoration: none;
      cursor: pointer;
      display: block;
      background-color: #fff;
      border:1px solid #ccc;
      border-radius: 6px;
      font-size: 12px;
      padding:5px 12px;
      color: rgb(101, 123, 131);
      box-shadow: 0 1px 2px rgba(0,0,0,.1);
      padding-left: 72px;
      overflow: hidden;
  }

  .catalog .item a:hover {
      background-color: #e6e6e6;
      border-color: #adadad;
  }

  .catalog .item a .date {
      position: absolute;
      left: 0;
      top: 0;
      width: 67px;
      height: 100%;
      background-color: #444;
      color: #fff;
      text-align: center;
  }

  .catalog .item a .date span {
      display: inline-block;
      vertical-align: middle;
  }

  .catalog .item a .date:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
  }
</style>
