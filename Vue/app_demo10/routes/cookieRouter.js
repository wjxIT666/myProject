const express = require('express');

const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //设置cookie
    res.cookie('isLogin', 'true', {
        maxAge: 5000,
        signed: true
    });
    //返回数据
    res.send('Cookie页面');
});

module.exports = router;
