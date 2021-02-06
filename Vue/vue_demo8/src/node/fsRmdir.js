var fs = require('fs');

function fsRmdir (path) {
    return new Promise( function (resolve, reject) {
        fs.rmdir(path, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    } );
};

async function _fsRmdir () {
    await fsRmdir('./src/node/fs');
};

_fsRmdir();
