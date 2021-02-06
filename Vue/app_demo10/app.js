const express = require('express');

const app = express();

//引入path
const path = require('path');

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//引入ejs
const ejs = require('ejs');
app.set('views', 'views');
app.set('engine view', 'ejs');
app.engine('ejs', ejs.__express);

//引入post解析
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//引入cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

//引入ejs
let ejsRouter = require('./routes/ejs.js');
app.use('/ejsRouter', ejsRouter);

//引入getRouter
let getRouter = require('./routes/getRouter.js');
app.use('/getRouter', getRouter);

//引入postRouter
let postRouter = require('./routes/postRouter.js');
app.use('/postRouter', postRouter);

//引入cookieRouter
let cookieRouter = require('./routes/cookieRouter.js');
app.use('/cookieRouter', cookieRouter);

//引入registerRouter
let registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

//引入loginRouter
let loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

//引入imageUpload
let imageUpload = require('./routes/imageUpload.js');
app.use('/imageUpload', imageUpload);

//引入download
let download = require('./routes/download.js');
app.use('/download', download);

module.exports = app;
