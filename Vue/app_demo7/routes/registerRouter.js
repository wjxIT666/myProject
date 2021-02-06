var express = require('express');

var router = express.Router();

//引入数据库
var mysql = require('mysql');

//创建数据库实例
var conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'school'
});

router.get('/', function (req, res) {
    //渲染页面
    res.render('registerRouter.ejs');
} );

router.post('/form', function (req, res) {
    //获取姓名
    var username = req.body.username;
    //获取性别
    var sex = req.body.sex;
    //连接数据库
    conn.connect( err => {
        if (err) {
            console.log(err);
        } else {
            console.log('数据库连接成功~');
        };
    } );
    //插入数据
    var strSQL = `insert into student(name, sex) values('${username}', '${sex}')`;
    conn.query(strSQL, function (file, err) {
        if (err) {
            console.log(err);
        } else {
            console.log('插入成功~');
        };
    });
});

module.exports = router;
