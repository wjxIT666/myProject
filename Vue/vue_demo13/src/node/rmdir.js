const fs = require('fs');

//删除目录
function rmdir (path) {
    return new Promise(function (resolve, reject) {
        fs.rmdir(path, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    });
};

async function _rmdir () {
    await rmdir('./src/node/fs');
};

_rmdir();
