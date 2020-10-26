import http from './http.js';

const getRouter = () => {
    return http({
        method: 'get',
        url: '/api/getRouter'
    });
};

const postRouter = () => {
    return http({
        method: 'post',
        url: '/api/postRouter'
    });
};

export default {
    getRouter,
    postRouter
}
