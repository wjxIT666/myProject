const fs = require('fs');

//创建目录
function fsMkdir (path) {
    return new Promise( function (resolve, reject) {
        fs.mkdir(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    } );
};

async function _fsMkdir () {
    await fsMkdir('./src/node/fs');
};

_fsMkdir();
