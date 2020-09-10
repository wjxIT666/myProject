var express = require('express');
var router = express.Router();

//设置路径
router.get('/', function (req, res) {
    res.cookie('isLogin', 'true', { maxAge: 50000, signed: true });
    res.send('Cookie页面');
});

module.exports = router;
