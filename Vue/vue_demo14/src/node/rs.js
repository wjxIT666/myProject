const fs = require('fs');

//文件读取流
const rs = fs.createReadStream('./src/node/ws.txt', {
    flags: 'r',
    encoding: 'utf-8'
}, function (data, err) {
    if (err) {
        console.log(err);
    };
} );

//监听data事件
let str = '';
rs.on('data', chunk => {
    str += chunk;
} );

//监听end事件
rs.on('end', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(str);
    };
} );
