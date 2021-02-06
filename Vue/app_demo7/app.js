var express = require('express');

var app = express();

//设置静态路径
var path = require('path');

//解析post请求
var bodyParser = require('body-parser');

//获取ejs模板
var ejs = require('ejs');
app.set('views', 'views');
app.set('view engine', 'engine');
app.engine('ejs', ejs.__express);

//使用静态资源
app.use(express.static(path.join(__dirname, 'public')));

//解析post请求
app.use(bodyParser.urlencoded({extended: false}));

//引入注册
var registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

//引入登录
var loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

//引入图片上传
var imageUpload = require('./routes/imageUpload.js');
app.use('/imageUpload', imageUpload);

//引入文本下载
var download = require('./routes/download.js');
app.use('/download', download);

module.exports = app;
