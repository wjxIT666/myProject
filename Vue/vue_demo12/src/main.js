import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入rsa加密
import rsa from './rsa/rsa.js';
Vue.prototype.$rsa = rsa;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
