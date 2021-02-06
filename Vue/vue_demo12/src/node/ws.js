const fs = require('fs');

const ws = fs.createWriteStream('./src/node/ws.txt', {
    flags: 'a',
    encoding: 'utf-8'
}, err => {
    if (err) {
        console.log(err);
    };
} );

ws.on('open', err => {
    if (err) {
        console.log(err);
    };
} );

ws.on('close', err => {
    if (err) {
        console.log(err);
    };
} );

ws.write('小姐姐很好看啊~');
