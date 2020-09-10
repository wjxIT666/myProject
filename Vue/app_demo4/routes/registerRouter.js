var express = require('express');
var router = express.Router();

//连接数据库
var mysql = require('mysql');

//创建数据库
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
});

router.post('/form', function (req, res) {
    //获取参数
    let username = req.body.username;
    let sex = req.body.sex;
    //连接数据库
    conn.connect( err => {
        if (err) {
            console.log(err);
        } else {
            console.log('数据库连接成功~');
        };
    } );
    //插入数据
    let strSQL = `insert into student(name, sex) values('${username}', '${sex}')`;
    conn.query(strSQL, function (file, err) {
        if (err) {
            console.log(err);
        } else {
            res.json(file);
        };
    } );
});

module.exports = router;
