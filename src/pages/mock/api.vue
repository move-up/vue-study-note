
<!-- 判断数据类型 -->
<template>
  <div class='typeof'>
    <h1>请求数据</h1>
    <div>https://www.easy-mock.com/mock/5b34eb92ebbfd9014ce9ece4/api/area2/list</div>

    <div class="clearfix dc-box-red" v-for="(item,index) in friendsList.array" :key="index" >
      <li>{{ item.id }} . {{ item.name }} - {{ item.age }} - {{ item.area }}</li>
      <!-- <li>{{ item.value }}</li> -->
    </div>





  </div>
</template>

<script>
import { getFriendsList } from "@/api/api";

export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      friendsList: [],
      item: {
        id: '',
        name: '',
        age: '',
        area: '',
      }
    }
  },

  computed: {},

  watch: {},

  created: function() {
    //3
    // 页面初始化请求的数据
    let p = {};
    getFriendsList(p).then(res => {
      this.friendsList = res;
      console.log(res);
    })
  },

  mounted () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
