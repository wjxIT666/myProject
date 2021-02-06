const express = require('express');

const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('postRouter.ejs');
});

//获取表单数据
router.post('/form', function (req, res) {
    //获取用户名
    let username = req.body.username;
    //获取性别
    let sex = req.body.sex;
    console.log(username);
    console.log(sex);
});

module.exports = router;
