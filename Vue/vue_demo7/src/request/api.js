import http from './http.js';

//获取get请求
const getInterface = () => {
    return http({
        url: '/getInterface',
        method: 'get'
    });
}

//获取post请求
const postInterface = () => {
    return http({
        url: '/postInterface',
        method: 'post'
    });
}

export default {
    getInterface,
    postInterface
}
