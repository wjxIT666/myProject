var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    //设置参数
    let data = {
        code: 0,
        data: {
            success: true,
            msg: 'post返回数据'
        }
    };
    res.json(data);
});

module.exports = router;
