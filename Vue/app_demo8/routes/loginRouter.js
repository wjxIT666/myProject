const express = require('express');
const router = express.Router();

//引入数据库
const mysql = require('mysql');
//创建数据库实例
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'school'
});
//连接数据库
conn.connect( err => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功~');
    };
} );

//设置路径
router.get('/', function (req, res) {
    //页面渲染
    res.render('loginRouter.ejs');
});

router.post('/form', function (req, res) {
    //获取用户名
    let username = req.body.username;
    //获取性别
    let sex = req.body.sex;
    //查询数据库
    let strSQL = `select * from student where name = '${username}' and sex = '${sex}'`;
    conn.query(strSQL, function (file, err) {
        if (err) {
            console.log(err);
        } else {
            console.log(file);
        };
    });
});

module.exports = router;
