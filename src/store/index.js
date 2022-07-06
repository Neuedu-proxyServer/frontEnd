import Vue from "vue";
import Vuex from "vuex";
import user from './user';
import search from './search';
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
    user,
    search
  }
});