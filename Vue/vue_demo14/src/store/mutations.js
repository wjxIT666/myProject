export default {
    addCount: function (state, data) {
        state.count += data;
    },
    setDuanzi: function (state, data) {
        state.duanzi = data;
    },
    setToken: function (state, data) {
        state.token = data;
        //将token存储在session中
        sessionStorage.setItem('token', state.token);
    }
};
