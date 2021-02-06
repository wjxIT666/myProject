import http from './http.js';

const getInterface = () => {
    return http({
        method: 'get',
        url: '/getInterface'
    });
};

export default {
    getInterface
}
