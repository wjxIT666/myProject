var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    //设置参数
    let data = {
        code: 0,
        data: {
            success: true,
            data: {
                result: 'getRouter接口数据'
            },
            msg: 'getRouter接口数据返回成功~'
        }
    };
    res.json(data);
});

module.exports = router;
