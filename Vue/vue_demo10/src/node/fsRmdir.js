const fs = require('fs');

//删除目录
function fsRmdir (path) {
    return new Promise( function (resolve, reject) {
        fs.rmdir(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        });
    } );
};

async function _fsRmdir () {
    await fsRmdir('./src/node/fs');
};

_fsRmdir();
