import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';
Vue.use(VueRouter);
import {
  routes
} from './routes.js';
export const router = new VueRouter({
  mode: 'history',
  routes
})
// router.beforeEach(async (to, from, next) => {

//   let hasToken = store.state.user.token
//   let hasEmail = store.state.user.userInfo.eamil
//   //console.log(hasToken)
//   if (hasToken) {
//     //登入了，不去login
//     if (hasEmail) {
//       next()
//     } else {
//       try {
//         //await store.dispatch('getUserInfo')
//         next()
//       } catch (error) {
//         //token失效等情况，清空本地数据
//         await store.dispatch('userLogout')
//         next('/login')
//       }

//     }
//   } else {
//     next('/login')
//   }
// })