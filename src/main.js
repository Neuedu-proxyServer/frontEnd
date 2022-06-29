import Vue from 'vue'
import App from './App.vue'
import {
  router
} from './router/index';
import store from './store'
// import UI from './plugins/vueUI';
// import "../static/normalize.css"
import '../static/common.less';
import '../static/base.css';
// import '../static/common.css'
import Antd from 'ant-design-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.use(ElementUI);
// Vue.use(UI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')