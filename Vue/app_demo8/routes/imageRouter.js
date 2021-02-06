const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let data = {
        code: 0,
        data: {
            imgUrl: 'http://img15.3lian.com/2015/h1/280/d/12.jpg'
        },
        msg: '数据返回成功'
    };
    res.json(data);
});

module.exports = router;
