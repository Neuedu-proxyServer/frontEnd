<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
          <h3>登录</h3>
          <hr />
          <el-form-item prop="username" label="邮箱">
            <el-input v-model="user.email" placeholder="请输入邮箱" prefix-icon></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <router-link to="/">找回密码</router-link>
          <router-link to="/register">注册账号</router-link>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="doLogin()">登 录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      rules: {},
      user: {
        email: "",
        password: ""
      }
    };
  },
  created() { },
  methods: {
    async doLogin() {
      const { user: { email, password } } = this
      if (!email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (!password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        try {
          await this.$store.dispatch('userLogin', { email, password })
          this.$router.push('/home')
        } catch (error) {
          //home谁都能进，这里得动态的改变右上角的状态
          console.log(error)
        }

      }
    }
  },
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 740px;
  background: url("../assets/images/bg9.jpg") center bottom no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/images/bg9.jpg") center bottom no-repeat;
  background-size: cover;
  width: 400px;
  height: 300px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>