const fs = require('fs');

//删除文件
function unlink (path) {
    return new Promise (function (resolve, reject) {
        fs.unlink(path, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        });
    });
};

async function _unlink () {
    await unlink('./src/node/myWs.txt');
};

_unlink();
