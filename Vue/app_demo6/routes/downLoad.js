var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.download('./public/download/hello.txt', () => {
        console.log('文件下载');
    });
});

module.exports = router;
