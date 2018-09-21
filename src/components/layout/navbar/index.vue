<!-- header -->
<template>
  <el-menu class="layout-navbar" mode="horizontal">
    <h1 class="left-menua">练习</h1>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <el-tooltip effect="dark" :content="userName" placement="bottom">
            <img class="user-avatar" src="https://avatars3.githubusercontent.com/u/23734887?s=460&v=4">
          </el-tooltip>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <a target='_blank' href="https://github.com/liwanzhen">
            <el-dropdown-item>
              Github
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <!-- 用户昵称 -->
            <span @click.stop>{{ nickname }}</span>
            <el-input v-model="nickname" ref="nickname" :class="{'writing-input': isTrue,'nickname': !isTrue}" @click.native.stop @blur="changeState">
              <i slot="suffix" class="el-input__icon el-icon-edit" @click="doThis"></i>
            </el-input>
            <el-input v-model="nickname" class="nickname" placeholder="" @click.native.stop></el-input>
            <span @click="logout" style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { USER_SIGNOUT } from '@/store/modules/user'
import StoreUser from '@/localStorage/user'

export default {
  name: '',

  components: {},

  props: {},

  data () {
    return {
      nickname: StoreUser.fetch(),
      isTrue: false,
    }
  },

  computed: {
    ...mapGetters(['userName'])
  },

  watch: {
    nickname: {
      handler (nickname) {
        StoreUser.save(nickname)
      },
      deep: true
    }
  },

  created () {},

  mounted () {},
  methods: {
    ...mapActions([USER_SIGNOUT]),
    logout () {
      this.USER_SIGNOUT().then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    },
    doThis () {
      this.isTrue = true
    },
    changeState () {
      console.log(111)
      this.isTrue = false
    }
  }
}
</script>

<style lang='scss' scoped>
$higtlight-color: #f90;
$border: 1px solid #f90;
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  color: #fff;
}
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
.left-menua {
  display: inline-block;
  margin: 0px;
  font-size: 25px;
  padding-left: 10px;
  @include link-colors(#f90,blue,pink)
}
.layout-navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  background-color: #383d41;
  color: $higtlight-color;
  border: $border;

  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          // border-radius: 10px;
          @include rounded-corners;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<style>
.nickname .el-input__inner {
  border: 1px solid transparent;
}
.writing-input .el-input__inner {
  border: 1px solid #f90;
}
</style>

