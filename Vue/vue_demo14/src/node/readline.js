const readline = require('readline');

//逐行写入
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//监听question
r1.question('小姐姐好看嘛？', answer => {
    console.log('好看极了');
    r1.close();
} );
