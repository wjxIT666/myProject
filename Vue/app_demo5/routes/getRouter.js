var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    //返回接口参数
    let data = {
        code: 0,
        data: {
            success: true,
            data: 'get接口返回数据'
        },
        msg: '接口返回数据成功'
    };
    res.json(data);
});

module.exports = router;
