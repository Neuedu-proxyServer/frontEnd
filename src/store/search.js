import {
  reqSearch,
  reqGoodsDetail
} from '../api/index.js';
let actions = {
  async getSearchInfo({
    commit
  }, query) {
    let res = await reqSearch(query)
    let data = res.data
    // console.log(data)
    if (data.meta.status == 200) {
      commit('GETSEARCHINFO', data.message)
    } else {
      return Promise.reject("搜索失败")
    }
  },
  async toDetail({
    commit
  }, goods_id) {

    let res = await reqGoodsDetail(goods_id)
    let data = res.data
    if (data.meta.code == 200) {
      console.log(data.message)
    }
  }
}
let mutations = {
  GETSEARCHINFO(state, message) {
    state.goodsArr = message
  },
  TODETAIL(state, message) {

  }
}
let state = {
  goodsArr: []
}
let getters = {
  goodsArr(state) {
    return state.goodsArr
  }
};
export default {
  actions,
  mutations,
  state,
  getters,
}