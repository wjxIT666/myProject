import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入bootstrap
const bootstrap = require('bootstrap');
Vue.use(bootstrap);
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//引入全局组件
import Header from './components/Header.vue';
Vue.component('Header', Header);
import Footer from './components/Footer.vue';
Vue.component('Footer', Footer);

//引入axios封装的拦截器
import api from './request/api.js';
Vue.prototype.$api = api;

//引入移动端适配
import './rem/rem.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
