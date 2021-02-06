const fs = require('fs');

//文件读取流
const rs = fs.createReadStream('./src/node/myCopy.txt', {
    flags: 'r',
    encoding: 'utf-8'
}, err => {
    if (err) {
        console.log(err);
    };
} );

let str = '';
//监听data事件
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
