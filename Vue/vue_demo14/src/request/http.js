import axios from 'axios';
import { Toast } from 'vant';
import '../../node_modules/vant/lib/toast/style';

//设置baseURL
let baseURL;

switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = '/api';
        break;
    case 'production':
        baseURL = '';
        break;
}

//创建axios实例
const http = axios.create({
    timeout: 0,
    baseURL: baseURL
});

//封装axios请求拦截器
http.interceptors.request.use( config => {
    //添加遮罩
    Toast.loading({
        message: '数据加载中...',
        duration: 0
    });
    //判断请求方式
    config.method === 'post' ? config.data = {...config.data} : config.params = {...config.params};
    //设置请求头的数据格式
    config.headers['Content-Type'] = 'application/json';
    return config;
}, err => {
    Toast('请求失败');
    return Promise.reject(err);
} );

//封装axios响应拦截器
http.interceptors.response.use( res => {
    //解除遮罩
    Toast.clear();
    //判断返回
    if (res) {
        return res.data;
    } else {
        Toast('网络繁忙');
    };
}, err => {
    Toast('响应失败');
    return Promise.reject(err);
} );

export default http;
