var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Express首页');
});

app.listen(3000, () => { console.log('服务启动~') });
