const fs = require('fs');

//复制文件
function fsCopyFile (path, name) {
    return new Promise(function (resolve, reject) {
        fs.copyFile(path, name, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        });
    });
};

async function _fsCopyFile () {
    await fsCopyFile('./src/node/ws.txt', './src/node/myWs.txt');
};

_fsCopyFile();
