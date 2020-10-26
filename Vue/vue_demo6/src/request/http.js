import axios from 'axios';
import { Toast } from 'vant';
import '../../node_modules/vant/lib/toast/style';

//创建axios实例
const http = axios.create({
    timeout: 10000
});

//封装axios请求拦截
http.interceptors.request.use( config => {
    //添加遮罩
    Toast.loading({
        message: '加载中...',
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

//封装axios响应拦截
http.interceptors.response.use( res => {
    //解除遮罩
    Toast.loading({
        message: '加载中...',
        duration: 0
    }).clear();
    //判断请求返回
    if (res) {
        return res.data.data;
    } else {
        Toast('网络繁忙');
    };
}, err => {
    Toast('响应失败');
    return Promise.reject(err);
} );

export default http;
