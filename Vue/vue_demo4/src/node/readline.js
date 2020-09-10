var readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('小姐姐好看吗？', answer => {
    console.log('是心动啊~');
    r1.close();
} );

