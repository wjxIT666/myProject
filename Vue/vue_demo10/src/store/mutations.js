export default {
    addCount (state, data) {
        state.count += data;
    },
    setDZ (state, data) {   
        state.duanzi = data;
    },
    setToken (state, token) {
        state.token = token;
        //将token存储到session中
        sessionStorage.setItem('token', state.token);
    }
}
