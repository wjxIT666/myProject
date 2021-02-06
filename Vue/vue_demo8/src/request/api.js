import http from './http.js';

const getInterface = () => {
    return http({
        url: '/getInterface',
        method: 'get'
    });
};

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
