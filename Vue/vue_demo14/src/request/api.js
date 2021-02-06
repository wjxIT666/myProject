import http from './http.js';

const getRouter = () => {
    return http({
        method: 'get',
        url: '/blobRouter'
    });
};

export default {
    getRouter
};
