export default {
    setToken: function (state, data) {
        state.token = data;
        //将token存储到session中
        sessionStorage.setItem('token', state.token);
    }
}