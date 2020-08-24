var express = require('express');
var router = express.Router();

//路径
router.get('/', function (req, res) {
    //页面渲染
    res.render('getRouter.ejs');
});

router.get('/form', function (req, res) {
    //接受请求参数
    var username = req.query.username;
    //返回参数
    var data = {
        code: 0,
        data: {
            success: true,
            result: {
                username: username
            },
            msg: 'getRouter请求参数'
        },
        msg: 'getRouter请求参数返回成功~'
    };
    res.send(data);
} );

module.exports = router;
