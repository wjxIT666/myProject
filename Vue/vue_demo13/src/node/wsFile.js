const fs = require('fs');

//写入文件
function wsFile (path, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, err => {
            if (err) {
                console.log(err);
            } else {
                resolve();
            };
        } );
    });
};

async function _wsFile () {
    await wsFile('./src/node/wsFile.txt', '小姐姐很好看啊~');
};

_wsFile();
