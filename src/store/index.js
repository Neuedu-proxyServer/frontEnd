import Vue from "vue";
import Vuex from "vuex";
import user from './user';
Vue.use(Vuex);
// const actions = {

// }
// const mutations = {

// }
// const state = {

// }
// const getters = {};
export default new Vuex.Store({
  modules: {
    user
  }
});