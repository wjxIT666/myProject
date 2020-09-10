var express = require('express');
var router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('postRouter.ejs');
} );

router.post('/form', function (req, res) {
    //获取参数
    var username = req.body.username;
    //返回参数
    var data = {
        username: username
    };
    res.json(data);
});

module.exports = router;
