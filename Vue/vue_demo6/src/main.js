import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios拦截器
import api from './request/api.js';
Vue.prototype.$api = api;

//引入移动端适配
// import './rem/rem.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
