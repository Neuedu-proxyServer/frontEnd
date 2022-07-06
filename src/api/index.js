import requests from './axios';

//获取验证码
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'get'
});
//注册,目前接口都是假的哈，data里面包含code,email,password
export const reqUserRegister = (data) => requests({
  url: `http://10.16.82.196:8080/register`,
  method: 'post',
  data
});
//登入，data为email和密码
export const reqUserLogin = (data) => requests({
  url: `http://10.16.82.196:8080/login?email=${data.email}&passwd=${data.password}`,
  method: 'get',
});
//获取用户登录成功以后用户信息的接口
export const reqUserInfo = () => requests({
  url: `/user/passport/auth/getUserInfo`,
  method: 'get'
});
//用户退出
export const reqUserLogout = () => requests({
  url: `/user/passport/logout`,
  method: 'get'
});
//搜索框搜索
export const reqSearch = (query) => requests({
  url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch?query=${query}`,
  method: "get",
})
//搜索框搜素，点击下方li,跳转到对应详情页
export const reqGoodsDetail = (goods_id) => requests({
  url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${goods_id}`,
  method: "get"
})
//修改用户信息--修改密码
export const reqModifyPass = (passInfo) => requests({
  url: "http://10.16.82.196:8080/changepwd",
  method: "post",
  data: passInfo
})
//加入购物车成功
export const reqAddOrUpdateCart = (skuId, skuNum) => requests({
  url: `http://gmall-h5-api.atguigu.cn/cart/addToCart/${skuId}/${skuNum}`,
  method: 'post'
});