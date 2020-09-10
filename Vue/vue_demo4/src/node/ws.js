var fs = require('fs');

var ws = fs.createWriteStream('./src/node/ws.txt', {
    flags: 'a',
    encoding: 'utf-8'
}, function (err) {
    if (err) {
        console.log(err);
    };
});

ws.on('open', function (err) {
    if (err) {
        console.log(err);
    };
});

ws.on('close', function (err) {
    if (err) {
        console.log(err);
    };
});

ws.write('皮卡丘~\n');
ws.write('可恶~\n');
