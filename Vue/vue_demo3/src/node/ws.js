var fs = require('fs');
var ws = fs.createWriteStream('./src/node/ws1.txt', {
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

ws.write('你太甜了~\n');
ws.write('喜欢你哦~\n');
