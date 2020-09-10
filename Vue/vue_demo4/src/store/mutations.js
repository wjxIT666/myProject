export default {
    setToken (state, token) {
        state.token = token;
        //将token存储到session中
        sessionStorage.setItem('token', state.token);
    }
}