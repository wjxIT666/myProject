var fs = require('fs');

function fsCopy (path, name, callback) {
    callback && callback();
    return new Promise(function (resolve, reject) {
        fs.copyFile(path, name, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    });
};

async function _fsCopy () {
    await fsCopy ('./src/node/fsWrite.txt', './src/node/copyFsWrite.txt', function () {
        console.log('复制文件成功~');
    });
}; 

_fsCopy();
