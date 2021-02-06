import axios from 'axios';
import  { Loading, Message } from 'element-ui';

//获取baseURL
let baseURL;

switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = '/api';
        break;
    case 'production':
        baseURL = '';
        break;
};

//封装axios实例
const http = axios.create({
    baseURL: baseURL,
    timeout: 0
});

//封装axios请求拦截器
http.interceptors.request.use( config => {
    //添加遮罩
    Loading.service({
        text: '数据正在加载中...',
        duration: 0,
        background: 'rgba(0, 0, 0, 0.8)'
    });
    //判断请求方式
    config.method === 'post' ? config.data = { ...config.data } : config.params = { ...config.params };
    //判断请求头数据传输格式
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    //请求携带token
    let token = sessionStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token;
    };
    return config;
}, err => {
    Message.error({
        message: '请求失败',
        duration: 2000
    });
    return Promise.reject(err);
} );

//封装axios响应拦截器
http.interceptors.response.use( res => {
    //解除遮罩
    Loading.service({
        text: '数据正在加载中...',
        duration: 0,
        background: 'rgba(0, 0, 0, 0.8)'
    }).close();
    //响应处理
    if (res.data) {
        return res.data;
    } else {
        Message.error({
            message: '网络繁忙',
            duration: 2000
        });
    };
}, err => {
    Message.error({
        message: '响应失败',
        duration: 2000
    });
    return Promise.reject(err);
} );

export default http;
