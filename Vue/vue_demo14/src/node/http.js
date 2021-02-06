const http = require('http');

//创建一个服务器
const server = http.createServer();

//监听request事件
server.on('request', function (req, res) {
    //设置编码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //返回数据
    res.end('Http 页面');
} );

server.listen(3000, () => { console.log('服务已经启动') } );
