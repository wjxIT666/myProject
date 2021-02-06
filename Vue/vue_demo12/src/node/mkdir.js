const fs = require('fs');

//创建目录
function mkdir (path) {
    return new Promise(function (resolve, reject) {
        fs.mkdir(path, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        });
    });
};

async function _mkdir () {
    await mkdir('./src/node/fs');
};

_mkdir();
