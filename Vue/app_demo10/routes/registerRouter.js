const express = require('express');

const router = express.Router();

//引入mysql
const mysql = require('mysql');
//创建数据库实例
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'school'
});

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('registerRouter.ejs');
});

//获取表单数据
router.post('/form', function (req, res) {
    //获取用户名
    let username = req.body.username;
    //获取性别
    let sex = req.body.sex;
    //连接数据库
    conn.connect( err => {
        if (err) {
            console.log(err);
        } else {
            console.log('数据库连接成功');
        };
    } );
    //插入数据
    let strSQL = `insert into student(name, sex) values('${username}', '${sex}')`;
    conn.query(strSQL, function (err, file) {
        if (err) {
            console.log(err);
        } else {
            console.log('插入成功');
        };
    } );
});

module.exports = router;
