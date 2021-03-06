var express = require('express');
var router = express.Router();

//引入mysql数据库
var mysql = require('mysql');

//创建mysql数据库
var conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'school'
});

//路径
router.get('/', function (req, res) {
    //页面渲染
    res.render('loginRouter.ejs');
} );

//表单
router.post('/form', function (req, res) {
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
    let strSQL = `select * from student where name = '${username}' and sex = '${sex}'`;
    conn.query(strSQL, function (file, err) {
        if (err) {
            console.log(err);
        } else {
            res.json(file);
        };
    } );
} );

module.exports = router;
