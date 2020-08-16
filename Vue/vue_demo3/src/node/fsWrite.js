var fs = require('fs');

//文件写入
function fsWrite (path, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                resolve();
            }
        });
    });
};

async function _fsWrite() {
    await fsWrite('./src/node/ws.txt', '小姐姐好好看哦~\n');
    await fsWrite('./src/node/ws.txt', '是心动啊~');
};

_fsWrite();
