import {
  reqDetailList,
  reqAddOrUpdateCart
} from '../api/index.js';
let actions = {
  async getDetailInfo({
    state,
    commit,
    dispatch
  }, goods_id) {
    //商品详情请求，需要携带商品ID
    let result = await reqDetailList(goods_id);
    let data = result.data
    if (data.meta.code == 200) {
      commit('GETDETAILINFO', data.message);
    }
  },
  async addOrUpdateCart({
    state,
    commit,
    dispatch
  }, {
    skuId,
    skuNum
  }) {
    //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
    let result = await reqAddOrUpdateCart(skuId, skuNum);
    console.log(result)
    let data = result.data
    if (data.code == 200) {
      //如果加入购物车成功,返回promise即为成功
      return "ok";
    } else {
      //如果加入购物车失败，返回失败的Promise
      return Promise.reject();
    }
  }
}
let mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  }
}
let state = {
  detailInfo: {}
}
let getters = {};