var express = require('express');
var router = express.Router();

//路径
router.get('/', function (req, res) {
    res.cookie('isLogin', 'true', { maxAge: 5000, signed: true });
    res.send('Cookie页面');
});

module.exports = router;
