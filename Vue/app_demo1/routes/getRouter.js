var express = require('express');
var router = express.Router();

//设置get路径
router.get('/', function (req, res) {
    //返回参数
    let data = {
        code: 0,
        data: {
            success: true,
            data: {
                result: 'get数据'
            },
            msg: 'getRouter返回数据成功'
        }
    };
    res.json(data);
});

module.exports = router;
