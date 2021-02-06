import axios from 'axios';
import { Toast } from 'vant';
import '../../node_modules/vant/lib/toast/style';
import $env from '../../.env';
import $envProd from '../../.env.prod';

let BASE_URL;

if ($env.NODE_ENV === 'development') {
    BASE_URL = $env.BASE_URL;
    console.log('开发环境');
} else if ($envProd.NODE_ENV === 'production') {
    BASE_URL = $envProd.BASE_URL;
}

//创建axios实例
const http = axios.create({
    timeout: 10000,
    baseURL: BASE_URL
});

//封装axios请求的拦截器
http.interceptors.request.use( config => {
    //添加遮罩
    Toast.loading({
        message: '加载中',
        duration: 0
    });
    //判断请求方式
    config.method === 'post' ? config.data = {...config.data} : config.params = {...config.params};
    //判断请求头
    config.headers['Content-Type'] = 'application/json';
    return config;
}, err => {
    Toast('请求失败');
    return Promise.reject(err);
} );

//封装axios响应的拦截器
http.interceptors.response.use( res => {
    //解除遮罩
    Toast.loading({
        message: '加载中',
        duration: 0
    }).clear();
    //判断响应
    if (res.data) {
        return res.data;
    } else {
        Toast('网络繁忙');
    };
}, err => {
    Toast('响应失败');
    return Promise.reject(err);
} );

export default http;
