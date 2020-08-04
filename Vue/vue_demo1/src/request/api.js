import http from './http.js';

//get接口
const getInterface = () => {
    return http({
        url: '/getRouter',
        method: 'get'
    });
}

//post接口
const postInterface = () => {
    return http({
        url: '/postRouter',
        method: 'post'
    });
}

export default {
    getInterface,
    postInterface
}
