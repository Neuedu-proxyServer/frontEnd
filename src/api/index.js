//获取验证码
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'get'
});
//注册,目前接口都是假的哈，data里面包含code,email,password
export const reqUserRegister = (data) => requests({
  url: `/user/passport/register`,
  method: 'post',
  data
});
//登入，data为email和密码
export const reqUserLogin = (data) => requests({
  url: `/user/passport/login`,
  method: 'post',
  data
});
//获取用户登录成功以后用户信息的接口
export const reqUserInfo = () => requests({
  url: `/user/passport/auth/getUserInfo`,
  method: 'get'
});
export const reqUserLogout = () => requests({
  url: `/user/passport/logout`,
  method: 'get'
});