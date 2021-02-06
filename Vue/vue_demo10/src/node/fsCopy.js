const fs = require('fs');

//复制文件
function fsCopy (path, name) {
    return new Promise( function (resolve, reject) {
        fs.copyFile(path, name, function (err) {
            if (err) {
                console.log('文件复制失败~');
            } else {
                resolve();
            };
        } );
    } );
};

async function _fsCopy () {
    await fsCopy('./src/node/fsWrite.txt', './src/node/myCopy.txt');
};

_fsCopy();
