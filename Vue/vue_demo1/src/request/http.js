import axios from 'axios';
import { Toast } from 'vant';
import '../../node_modules/vant/lib/toast/style';
import $env from '../../.env';
import $envp from '../../.env.prod';

let baseURL;

if ($env.NODE_ENV === 'development') {
    console.log('开发环境');
    baseURL = $env.BASE_URL;
} else if ($envp.NODE_ENV === 'production') {
    console.log('生产环境');
    baseURL = $envp.BASE_URL;
}

//创建axios实例
const http = axios.create({
    baseURL: baseURL,
    timeout: 5000
});

//封装请求拦截
http.interceptors.request.use( config => {
    //设置遮罩
    Toast.loading({
        message: '加载中...',
        duration: 0
    });
    //判断请求方式
    config.method === 'post' ? config.data = {...config.data} : config.params = {...config.parmas};
    //设置请求头
    config.headers['Content-Type'] = 'application/json';
    return config;
}, err => {
    Toast('请求超时');
    return Promise.reject(err);
} );

//封装响应拦截
http.interceptors.response.use( res => {
    //解除遮罩
    Toast.loading({
        message: '加载中...',
        duration: 0
    }).clear();
    //设置响应返回
    if (res) {
        return res.data;
    } else {
        Toast('网络繁忙');
    };
}, err => {
    Toast('响应超时');
    return Promise.reject(err);
} );

export default http;
