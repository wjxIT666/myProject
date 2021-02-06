const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Express 页面');
} );

app.listen(3000, () => { console.log('服务已经启动') } );
