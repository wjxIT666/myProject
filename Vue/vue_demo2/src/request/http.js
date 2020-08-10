import axios from 'axios';
import { Toast } from 'vant';
import '../../node_modules/vant/lib/toast/style';
import $env from '../../.env';
import $envp from '../../.env.prod';

let BASE_URL;
if ($env.NODE_ENV === 'development') {
    BASE_URL = $env.BASE_URL;
} else if ($envp.NODE_ENV === 'production') {
    BASE_URL = $envp.BASE_URL;
};

//封装axios实例
const http = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

//封装请求拦截
http.interceptors.request.use( config => {
    //添加遮罩
    Toast.loading({
        message: '加载中',
        duration: 0
    });
    //判断请求方式
    config.method === 'post' ? config.data = {...config.data} : config.params = {...config.params};
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
        message: '加载中',
        duration: 0
    }).clear();
    //响应处理
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
