var express = require('express');
var app = express();

//引入path
var path = require('path');

//引入ejs模板
var ejs = require('ejs');
app.set('views', 'views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//首页
app.get('/', function (req, res) {
  let data = {
    title: '老铁，么么哒',
    starList: ['贾玲', '刘亦菲', '关晓彤', '迪丽热巴']
  };
  res.render('index.ejs', data);
});

module.exports = app;
