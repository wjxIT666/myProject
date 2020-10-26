var express = require('express');
var router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('postInterface.ejs');
} );

//接收表单数据
router.post('/form', function (req, res) {
    //接收姓名
    let username = req.body.username;
    let tel = req.body.tel;
    //设置返回参数
    let data = {
        code: 0,
        data: {
            success: true,
            data: {
                username: username,
                tel: tel
            }
        },
        msg: '接口返回数据成功'
    };
    res.json(data);
});

module.exports = router;
