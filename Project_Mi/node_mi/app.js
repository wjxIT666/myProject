const express = require('express');
const app = express();

//引入path
const path = require('path');

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//引入post
const bodyParser = require('body-parser');

//解析post请求
app.use(bodyParser.urlencoded({extended: false}));

//引入tokenRouter
let tokenRouter = require('./routes/tokenRouter.js');
app.use('/tokenRouter', tokenRouter);

//引入registerRouter
let registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

//引入loginRouter
let loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

module.exports = app;
