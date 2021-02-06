var fs = require('fs');

function fsMkdir (path) {
    return new Promise( function (resolve, reject) {
        fs.mkdir(path, err => {
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
