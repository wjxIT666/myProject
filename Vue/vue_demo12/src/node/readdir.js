const fs = require('fs');

//读取目录
function readDir (path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, {
            flags: 'r',
            encoding: 'utf-8'
        }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                resolve(data);
            };
        });
    });
};

async function _readDir () {
    let result = await readDir('./src/node/fs');
    console.log(result);
};

_readDir();
