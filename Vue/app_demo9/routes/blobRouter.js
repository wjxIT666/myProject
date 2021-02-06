const express = require('express');
const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //返回参数
    let imgUrl = `https://p0.ssl.qhimgs1.com/sdr/400__/t013ff0809aec190204.jpg`
    res.json(imgUrl);
});

module.exports = router;
