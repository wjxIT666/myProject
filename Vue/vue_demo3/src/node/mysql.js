var mysql = require('mysql');

//创建mysql实例
var conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'school'
});

//连接数据库
conn.connect( function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功~');
    };
});

//查询数据库
var strSQL = 'select * from student';
conn.query(strSQL, function (file, err) {
    if (err) {
        console.log(err);
    } else {
        console.log(file);
    };
});
