var fs = require('fs');

function fsReaddir (path) {
    return new Promise( function (resolve, reject) {
        fs.readdir(path, function (data, err) {
            if (err) {
                console.log(err);
            } else {
                resolve(data);
            };
        });
    } );
};

async function _fsReaddir () {
    let result = await fsReaddir('./src/node/fs');
    console.log(result);
};

_fsReaddir();
