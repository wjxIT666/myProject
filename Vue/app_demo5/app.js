var express = require('express');

var app = express();

//引入path
var path = require('path');

//引入bodyParser
var bodyParser = require('body-parser');

//引入加密cookie
var cookieParser = require('cookie-parser');

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//解析post请求
app.use(bodyParser.urlencoded({extended: false}));

//解析cookie加密
app.use(cookieParser('secret'));

//调用get路由
var getRouter = require('./routes/getRouter.js');
app.use('/getRouter', getRouter);

//调用post路由
var postRouter = require('./routes/postRouter.js');
app.use('/postRouter', postRouter);

//调用postInterface路由
var postInterface = require('./routes/postInterface.js');
app.use('/postInterface', postInterface);

//调用cookie路由
var cookieRouter = require('./routes/cookieRouter.js');
app.use('/cookieRouter', cookieRouter);

//调用registerRouter路由
var registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

module.exports = app;
