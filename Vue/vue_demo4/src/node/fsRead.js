var fs = require('fs');

function fsRead (path) {
    return new Promise (function (resolve, reject) {
        fs.readFile(path, {
            flag: 'r',
            encoding: 'utf-8'
        }, function (data, err) {
            if (err) {
                console.log(err);
            } else {
                resolve(data);
            };
        } );
    });
};

async function _fsRead () {
    var result = await fsRead('./src/node/hello.txt');
    console.log(result);
};

_fsRead();
