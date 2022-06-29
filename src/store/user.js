import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqUserLogout
} from '../api/index.js';
import {
  setToken,
  getToken,
  removeToken
} from '../utils/token';
//登入注册模块
const state = {
  code: "",
  token: getToken(),
  userInfo: {}
}
const actions = {
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
    if (res.code == 200) {
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
    if (res.code == 200) {
      //拿token
      commit('USERLOGIN', res.data.token)
      setToken(res.data.token)
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
    let res = await reqUserLogout()
    if (res.code == 200) {
      commit('USERLOGOUT')
      return 'ok'
    } else {
      return Promise.reject('退出失败')
    }
  }
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, info) {
    state.info = info
  },
  USERLOGOUT(state) {
    state.token = ''
    state.userInfo = {}
    removeToken()
  }
}

const getters = {};
export default {
  actions,
  mutations,
  state,
  getters,
}