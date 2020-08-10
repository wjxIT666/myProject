import http from './http.js';

const getInterface = () => {
    return http({
        url: '/getRouter',
        method: 'get'
    });
}

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
