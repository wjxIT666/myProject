var express = require('express');
var app = express();

//引入path
var path = require('path');

//引入ejs模板
var ejs = require('ejs');
app.set('views', 'views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

//引入post解析
var bodyParser = require('body-parser');

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//解析post接口
app.use(bodyParser.urlencoded({extended: false}));

//get接口数据
var getRouter = require('./routes/getRouter.js');
app.use('/getRouter', getRouter);

//post接口数据
var postRouter = require('./routes/postRouter.js');
app.use('/postRouter', postRouter);

module.exports = app;
