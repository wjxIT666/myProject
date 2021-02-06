const fs = require('fs');

//文件写入
function fsWrite (path, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    });
};

async function _fsWrite () {
    await fsWrite('./src/node/fsWrite.txt', '文件写入');
};

_fsWrite();
