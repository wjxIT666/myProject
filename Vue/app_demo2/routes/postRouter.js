var express = require('express');
var router = express();

router.post('/', function (req, res) {
    //设置参数
    let data = {
        code: 0,
        data: {
            success: true,
            data: {
                result: 'postRouter返回数据'
            },
            msg: 'postRouter返回数据成功'
        }
    };
    res.json(data);
});

module.exports = router;
