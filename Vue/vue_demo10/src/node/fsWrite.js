const fs = require('fs');

//写入文件
function fsWrite (path, content) {
    return new Promise( function (resolve, reject) {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    } );
};

async function _fsWrite () {
    await fsWrite('./src/node/fsWrite.txt', '小姐姐很好看啊~');
};

_fsWrite();
