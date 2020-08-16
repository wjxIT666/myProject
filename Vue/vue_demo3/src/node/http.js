var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('首页');
});

server.listen(3000, () => { console.log('服务启动') } );
