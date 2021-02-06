import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//初始化css
import './style/index.css';

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios拦截器
import api from './request/api.js';
Vue.prototype.$api = api;

//引入工具类
import utils from './utils/utils.js';
Vue.prototype.$utils = utils;

//RSA加密
import rsa from './rsa/rsa.js';
Vue.prototype.$getRSACode = rsa;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
