import axios from 'axios';
let requests = axios.create({
  //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
  baseURL: "/api",
  //超时的设置
  timeout: 5000
});
export default requests