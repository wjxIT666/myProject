var express = require('express');
var router = express.Router();

//设置post路径
router.post('/', function (req, res) {
    //返回参数
    let data = {
        code: 0,
        data: {
            success: true,
            data: {
                result: 'post数据'
            },
            msg: 'postRouter返回数据成功'
        }
    };
    res.json(data);
});

module.exports = router;
