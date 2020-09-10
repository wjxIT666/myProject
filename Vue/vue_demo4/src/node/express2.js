var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('字符串匹配路径');
} );

app.get(/a\d{9}/, function (req, res) {
    res.send('正则匹配路径');
});

app.get('/news/:newsid', function (req, res) {
    res.send('动态路径：'+ req.params.newsid);
} );

app.listen(3000, () => { console.log('服务已经启动~') });
