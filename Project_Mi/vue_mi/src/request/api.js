import http from './http.js';

//获取token
const getToken = () => {
    return http({
        method: 'get',
        url: '/tokenRouter'
    });
};

//请求注册接口
const registerRouter = data => {
    return http({
        method: 'post',
        url: '/registerRouter',
        data
    });
};

//请求登录接口
const loginRouter = data => {
    return http({
        method: 'post',
        url: '/loginRouter',
        data
    });
};

export default {
    getToken,
    registerRouter,
    loginRouter
}
