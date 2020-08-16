var fs = require('fs');

//封装文件读取
function fsRead(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {
            flag: 'r',
            encoding: 'utf-8'
        }, function (data, err) {
            if (err) {
                console.log(err);
            } else {
                resolve(data);
            };
        });
    });
};

async function _fsRead () {
    let result = await fsRead('./src/node/hello.txt');
    console.log(result);
};

_fsRead();
