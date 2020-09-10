var express = require('express');
var router = express.Router();

//设置路径
router.get('/', function (req, res) {
    res.download('./public/txt/hello.txt', () => {
        console.log('文件下载成功~');
    });
} );

module.exports = router;
