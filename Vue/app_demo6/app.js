var express = require('express');

var app = express();

//引入path
var path = require('path');

//引入bodyParser
var bodyParser = require('body-parser');

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//解析post请求
app.use(bodyParser.urlencoded({extended: false}));

//获取get请求
var getInterface = require('./routes/getInterface.js');
app.use('/getInterface', getInterface);

//获取post请求
var postInterface = require('./routes/postInterface.js');
app.use('/postInterface', postInterface);

//获取registerRouter请求
var registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

//获取loginRouter请求
var loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

//获取imageUpload请求
var imageUpload = require('./routes/imageUpload.js');
app.use('/imageUpload', imageUpload);

//获取downLoad请求
var downLoad = require('./routes/downLoad.js');
app.use('/downLoad', downLoad);

module.exports = app;
