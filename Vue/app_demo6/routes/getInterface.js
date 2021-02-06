var express = require('express');
var router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //设置返回参数
    let data = {
        code: 0,
        data: {
            success: true,
            msg: 'get数据返回'
        }
    };
    res.json(data);
});

module.exports = router;
