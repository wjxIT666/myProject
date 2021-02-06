const fs = require('fs');

//读取目录
function fsReaddir (path) {
    return new Promise( function (resolve, reject) {
        fs.readdir(path, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                resolve(data);
            };
        } );
    } );
};

async function _fsReaddir () {
    let result = await fsReaddir('./src/node/fs');
    console.log(result);
};

_fsReaddir();
