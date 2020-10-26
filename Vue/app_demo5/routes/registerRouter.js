var express = require('express');
var router = express.Router();

//引入mysql
var mysql = require('mysql');

//创建数据库实例
var conn = mysql.createConnection({
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
} );

//接收表单数据
router.post('/form', function (req, res) {
    //接收姓名
    let username = req.body.username;
    //接收性别
    let sex = req.body.sex;
    //连接数据库
    conn.connect( err => {
        if (err) {
            console.log(err);
        } else {
            console.log('数据库连接成功~');
        };
    } );

    let strSQL = `insert into student(id, name, sex) values('2', '${username}', '${sex}')`;
    conn.query(strSQL, function (file, err) {
        if (err) {
            console.log(err);
        } else {
            res.json(file);
        };
    });
});

module.exports = router;
