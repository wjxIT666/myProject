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

//查询数据库
let strSQL = 'select * from student';
conn.query(strSQL, function (err, file) {
    if (err) {
        console.log(err);
    } else {
        console.log(file);
    };
} );
