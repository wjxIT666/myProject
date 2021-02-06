const express = require('express');
const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //返回参数
    let data = {
        code: 0,
        data: {
            token: '000000'
        },
        msg: '数据返回成功'
    };
    res.json(data);
});

module.exports = router;
