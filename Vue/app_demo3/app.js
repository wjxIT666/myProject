var express = require('express');
var app = express();

//引入path
var path = require('path');

//引入post请求
var bodyParser = require('body-parser');

//引入Cookie加密
var cookie = require('cookie-parser');

//引入ejs模板
var ejs = require('ejs');
app.set('views', 'views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//解析post请求
app.use(bodyParser.urlencoded({extended: false}));

//cookie加密
app.use(cookie('secret'));

//首页
app.get('/', function (req, res) {
  let data = {
    title: '老铁，么么哒',
    starList: ['贾玲', '刘亦菲', '关晓彤', '迪丽热巴']
  };
  res.render('index.ejs', data);
});

//getRouter
var getRouter = require('./routes/getRouter.js');
app.use('/getRouter', getRouter);

//postRouter
var postRouter = require('./routes/postRouter.js');
app.use('/postRouter', postRouter);

//cookieRouter
var cookieRouter = require('./routes/cookie.js');
app.use('/cookieRouter', cookieRouter);

//registerRouter
var registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

//loginRouter
var loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

module.exports = app;
