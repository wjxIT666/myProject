var fs = require('fs');

function fsunLink (path, callback) {
    callback && callback();
    return new Promise(function (resolve, reject) {
        fs.unlink (path, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    });
};

async function _fsunLink () {
    await fsunLink('./src/node/copyFsWrite.txt', function () {
        console.log('删除文件成功');
    });
};

_fsunLink();
