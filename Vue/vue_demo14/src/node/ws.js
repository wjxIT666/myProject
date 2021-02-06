const fs = require('fs');

//文件写入流
const ws = fs.createWriteStream('./src/node/ws.txt', {
    flags: 'a',
    encoding: 'utf-8'
}, err => {
    if (err) {
        console.log(err);
    };
} );

//监听open事件
ws.on('open', err => {
    if (err) {
        console.log(err);
    };
} );

//监听close事件
ws.on('close', err => {
    if (err) {
        console.log(err);
    };
} );

ws.write('小姐姐好看极了~');
