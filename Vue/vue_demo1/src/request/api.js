import http from './http.js';

//get接口
const getInterface = () => {
    return http({
        url: '',
        method: 'get'
    });
}

//post接口
const postInterface = () => {
    return http({
        url: '',
        method: 'post'
    });
}

export default {
    getInterface,
    postInterface
}
