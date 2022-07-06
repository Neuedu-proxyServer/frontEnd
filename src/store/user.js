import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqUserLogout,
  reqModifyPass
} from '../api/index.js';
import {
  setToken,
  getToken,
  removeToken
} from '../utils/token';
import {
  setEmail,
  getEmail,
  removeEmail
} from '../utils/userInfo';
//登入注册模块
let state = {
  code: "",
  //这里为用户名
  token: getToken(),
  userInfo: {
    headerUrl: "@/assets/images/photoSmall.png",
    email: getEmail()
  }
}
let actions = {
  async getCode({
    commit
  }, email) {
    let res = await reqGetCode(email)
    //res是假数据，应该发到用户邮箱
    if (res.code == 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('验证码发送失败'))
    }
  },
  //data为一个对象
  async userRegister({
    commit
  }, data) {
    let res = await reqUserRegister(data)
    console.log(res)
    if (res.status == 200) {
      //commit('USERREGISTER', data.email)
      return 'ok'
    } else {
      return Promise.reject(new Error("注册失败"))
    }
  },
  //login
  async userLogin({
    commit
  }, data) {
    let res = await reqUserLogin(data)
    if (res.status == 200) {
      commit('USERLOGIN', {
        token: res.data,
        email: data.email
      })
      setToken(res.data)
      setEmail(data.email)
      return 'ok'
    } else {
      return Promise.reject(new Error("登入失败"))
    }
  },
  async getUserInfo({
    commit
  }) {
    let res = await reqUserInfo()
    if (res.code == 200) {
      commit('GETUSERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject('获取用户信息失败')
    }
  },
  async userLogout({
    commit
  }) {
    // let res = await reqUserLogout()

    commit('USERLOGOUT')
    return 'ok'
  },
  async modifyUserPass({
    commit
  }, data) {
    let res = await reqModifyPass(data)
    console.log(res)
    if (res.status == 200) {
      // commit()要不要重新登入？？
    } else {
      return Promise.reject("修改密码失败")
    }
  }
}
let mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, info) {
    state.token = info.token
    state.userInfo.email = info.email
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  USERLOGOUT(state) {
    state.token = ''
    state.userInfo = {}
    removeToken()
    removeEmail()
    console.log('end')
  },
  // USERREGISTER(state, email) {

  // }

}

let getters = {};
export default {
  actions,
  mutations,
  state,
  getters,
}