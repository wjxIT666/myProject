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
    database: 'xiaomi'
});
//连接数据库
conn.connect( err => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功~登录');
    };
} );

//设置路径
router.post('/', function (req, res) {
    //获取账户
    let username;
    //获取密码
    let password;

    //遍历接口数据
    for (let key in req.body) {
        username = JSON.parse(key).username;
        password = JSON.parse(key).password;
    };

    //设置返回参数
    let dataRes;
    
    //查询数据库
    let queryUser = `select * from user where username = '${username}' and password = '${password}'`;
    conn.query(queryUser, function (err, file) {
        if (err) {
            console.log('查询错误：' + err);
        } else {
            if (file.length === 0) {
                dataRes = {
                    code: 0,
                    data: {
                        success: false,
                        msg: '用户名不存在或者密码错误'
                    }
                };
                res.json(dataRes);
            } else {
                dataRes = {
                    code: 0,
                    data: {
                        success: true,
                        msg: '登录成功'
                    }
                };
                res.json(dataRes);
            };
        };
    });
});

module.exports = router;
