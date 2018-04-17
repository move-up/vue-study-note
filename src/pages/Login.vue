<template>
  <div class="page-login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pw" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button>登录</el-button>
    </el-form>
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
        user: {
          name: '',
          pw: ''
        }
      }
    },
    methods: {
    }
  }
</script>

<style>
.page-login form {
  width: 400px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 15px;
  position: relative;
}
.form-group .form-control,
.form-group button {
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  outline: none;
  height: 30px;
  width: 100%;
  padding: 5px;
}
.form-group button {
  outline: none;
  border: 1px solid #41b883;
  background-color: #41b883;
  width: auto;
  color: #fff;
}
</style>
