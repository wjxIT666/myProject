const fs = require('fs');

//复制文件
function copyFile (path, name) {
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

async function _copyFile () {
    await copyFile('./src/node/wsFile.txt', './src/node/myCopyFile.txt');
};

_copyFile();
