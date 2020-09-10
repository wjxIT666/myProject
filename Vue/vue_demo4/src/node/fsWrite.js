var fs = require('fs');

function fsWrite (path, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        });
    });
};

async function _fsWrite() {
    await fsWrite('./src/node/fsWrite.txt', '发什么呆？\n');
    await fsWrite('./src/node/fsWrite.txt', '阿呆\n');
};

_fsWrite();
