<template>
  <div class="login clearfix">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          <h3>注册</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
            <button @click="getCode">发送验证码</button>
          </el-form-item>
          <el-form-item prop="username" label="验证码" v-model="code">
            <el-input v-model="code" placeholder="请输入验证码"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="设置密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="确认密码">
            <el-input v-model="user.passwordVerify" show-password placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon @click="doRegister()">注册账号</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      code: '',
      user: {
        username: "",
        email: "",
        password: "",
        passwordVerify: '',
        //是否同意协议，后期有时间再写
        agree: true
      },
    };
  },
  created() {
    // console.log($);
    // console.log("1111");
  },
  methods: {
    async getCode() {
      try {
        const { user: { email } } = this
        email && await $store.dispatch('getCode', user.email)
        //这里实现自动填充验证码，后期删去
        this.code = this.$store.user.state.code
      } catch (error) {

      }

    },
    async doRegister() {
      const { code, user: { username, email, password, passwordVerify } } = this
      if (!username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (this.user.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.user.email)) {
          this.$message.error("请输入有效的邮箱！");
        } else if (!password) {
          this.$message.error("请输入密码！");
          return;
        } else if (password != passwordVerify) { this.$message.error("两次输入的密码不一样") }
        else {
          try {
            //如果成功，路由跳转到登入页面
            await this.$store.dispatch('userRegister', { email, password, code })
            this.$router.push('/login')
          } catch (error) {
            //这里得看后端接口咋写嘞，先占个位
            console.log(error)
            alert(error.message)
          }
        }
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 1000px;
  background: url("../assets/images/bg9.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/images/bg9.jpg") no-repeat;
  background-size: cover;
  width: 400px;
  height: 500px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}

.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>