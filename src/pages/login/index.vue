<template>
  <div class="page-login">
    <el-card class="c-login">
      <div
        slot="header"
        class="clearfix"
      >
        <span>登录</span>
      </div>
      <el-form
        ref="form"
        @submit.native.prevent
        @keyup.enter="handleLogin"
        :rules="rules"
        :model="user"
        label-width="80px"
      >
        <el-form-item
          label="用户名"
          prop="name"
        >
          <el-input
            v-model="user.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="昵称"
          prop="nickname"
        >
          <el-input
            v-model="nickname"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pw"
        >
          <el-input
            type="password"
            v-model="user.pw"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div class="clearfix">
          <el-button
            class="f-r"
            native-type='submit'
            @click="handleLogin"
          >登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '@/store/modules/user'
import Cookies from 'js-cookie'
import { Loading } from 'element-ui'
import StoreUser from '@/localStorage/user'

export default {
  data() {
    return {
      user: {
        name: '',
        pw: ''
      },
      nickname: '',
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        nickname: [
          { required: false, message: '请输入呢称', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        pw: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' },
          { pattern: /[a-zA-Z0-9:',_!();\.\?\-\+，。；：‘’（）@！？]+/, message: '输入内容只能是数字，字母与特殊符号！', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    nickname: {
      handler(nickname) {
        StoreUser.save(nickname)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    handleLogin() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.USER_SIGNIN(this.user['name']).then(() => {
            //Loading.service(options);
            this.$router.push({ path: '/' });
            this.$message.success('登录成功！')
          })
        } else {
          this.$message.error('用户名或密码错误！');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss">
.c-login {
  margin: 250px 0;
  margin-right: 40px;
  width: 480px;
  height: 320px;
}

.page-login {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
