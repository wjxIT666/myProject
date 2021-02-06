const express = require('express');

const app = express();

//字符串匹配路径
app.get('/', function (req, res) {
    res.send('字符串匹配路径');
} );

//正则匹配路径
app.get(/a\d{9}/, function (req, res) {
    res.send('正则匹配路径');
} );

//动态匹配路径
app.get('/news/:id', function (req, res) {
    res.send('动态路径：' + req.params.id);
} );

app.listen(3000, () => { console.log('服务已经启动') } );
