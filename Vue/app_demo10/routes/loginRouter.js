const express = require('express');

const router = express.Router();

//引入mysql
const mysql = require('mysql');
//创建mysql数据库实例
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
    res.render('loginRouter.ejs');
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
            console.log('数据库连接成功~');
        };
    } );
    //查询数据库
    let strSQL = `select * from student where name = '${username}' and sex = '${sex}'`;
    conn.query(strSQL, function (err, file) {
        if (err) {
            console.log(err);
        } else {
            console.log(file);
        };
    } );
});

module.exports = router;
