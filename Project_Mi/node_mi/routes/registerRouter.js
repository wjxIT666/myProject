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
    database: 'xiaomi'
});
//连接数据库
conn.connect( err => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功~注册');
    };
} );

//设置路径
router.post('/', function (req, res) {
    //获取用户名
    let username;

    //获取手机号
    let tel;

    //获取密码
    let password;

    //for-in循环
    for (let key in req.body) {
        key = JSON.parse(key);
        console.log(key);
        //用户名赋值
        username = key.username;
        //手机号赋值
        tel = key.tel;
        //密码赋值
        password = key.password;
    };

    //设置返回参数
    let dataRes;

    //查询数据库
    let strSQL = `select * from user where tel = '${tel}' or username = '${username}'`;
    conn.query(strSQL, function (err, file) {
        if (err) {
            console.log('查询错误：' + err);
        } else {
            if (file.length !== 0) {
                dataRes = {
                    code: 0,
                    data: {
                        success: false,
                        msg: '用户名或者手机号重复，请重新注册'
                    }
                };
                res.json(dataRes);
            } else {
                //插入数据向数据库
                let insertSQL = `insert into user(username, tel, password) values('${username}', '${tel}', '${password}')`;
                conn.query(insertSQL, function (err, file) {
                    if (err) {
                        console.log('插入错误：' + err);
                    } else {
                        dataRes = {
                            code: 0,
                            data: {
                                success: true,
                                msg: '注册成功'
                            }
                        };
                        res.json(dataRes);
                    };
                });
            };
        };
    });
});

module.exports = router;
