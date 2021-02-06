const express = require('express');

const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('getRouter.ejs');
});

//获取表单数据
router.get('/form', function (req, res) {
    //获取用户名
    let username = req.query.username;
    console.log(username);
    //获取性别
    let sex = req.query.sex;
    console.log(sex);
} );

module.exports = router;
