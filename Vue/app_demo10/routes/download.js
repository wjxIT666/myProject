const express = require('express');

const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //文件下载
    res.download('./public/download/hello.txt', '文件下载', () => {
        console.log('文件下载成功~');
    } );
} );

module.exports = router;
