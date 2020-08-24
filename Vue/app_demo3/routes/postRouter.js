var express = require('express');
var router = express.Router();

//路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('postRouter.ejs');
});

//postRouter
router.post('/form', function (req, res) {
    //获取请求参数
    var username = req.body.username;
    //返回参数
    var data = {
        code: 0,
        data: {
            success: true,
            data: {
                username: username
            },
            msg: 'postRouter请求参数'
        },
        msg: 'postRouter请求参数返回成功~'
    };
    res.json(data);
});

module.exports = router;
