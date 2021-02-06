const fs = require('fs');

//删除文件
function fsUnlink (path) {
    return new Promise( function (resolve, reject) {
        fs.unlink(path, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    } );
};

async function _fsUnlink () {
    await fsUnlink('./src/node/fsWrite.txt');
};

_fsUnlink();
