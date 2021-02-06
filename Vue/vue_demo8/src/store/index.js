import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      //将token存储到session中
      sessionStorage.setItem('token', state.token);
    }
  },
  actions: {
  },
  modules: {
  }
})
