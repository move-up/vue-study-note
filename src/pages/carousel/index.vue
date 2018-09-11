<!-- 走马灯 -->
<template>
  <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in items" :key="item.index">
        <div>
          <img :src="item.url" alt="">
          <h2 class="title">{{ item.title }}</h2>
        </div>
      </el-carousel-item>
      <!-- <el-carousel-item>
        <h3><img src="/static/images/login_bg.jpg" alt=""></h3>
        <h1>2222</h1>
      </el-carousel-item> -->
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      items: [
        {url: "/static/img/login_bg.png",title: '第一张'},
        {url: "/static/img/login_bg.jpg",title: '第二张'}
      ]
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;;
  }

  h2.title {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 99999999;
    color: red;
  }

  .el-carousel__item:nth-child(2n) {
    //background-image: url('/static/images/login_bg.png');
  }

  .el-carousel__item:nth-child(2n+1) {
    //background-image: url('/static/images/login_bg.jpg');
  }
</style>


