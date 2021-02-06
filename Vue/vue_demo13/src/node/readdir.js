const fs = require('fs');

//读取目录
function readdir (path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (data, err) {
            if (err) {
                console.log(err);
            } else {
                resolve(data);
            };
        });
    });
};

async function _readdir () {
    let result = await readdir('./src/node/fs');
    console.log(result);
};

_readdir();
