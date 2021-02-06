var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
    //下载图片
    res.download('./public/download/hello.txt', '文本下载', function () {
        console.log('下载成功');
    });
} );

module.exports = router;
