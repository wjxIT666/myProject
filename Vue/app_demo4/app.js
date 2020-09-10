var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var cookie = require('cookie-parser');

var ejs = require('ejs');
app.set('views', 'views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookie('secret'));

app.get('/', function (req, res) {
  let data = {
    title: '老铁，么么哒',
    starList: ['贾玲', '刘亦菲', '白鹿']
  }
  res.render('index.ejs', data);
} );

var getRouter = require('./routes/getRouter.js');
app.use('/getRouter', getRouter);

var postRouter = require('./routes/postRouter.js');
app.use('/postRouter', postRouter);

var cookieRouter = require('./routes/cookie.js');
app.use('/cookieRouter', cookieRouter);

var registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

var loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

var imageUpload = require('./routes/imageUpload.js');
app.use('/imageUpload', imageUpload);

var download = require('./routes/download.js');
app.use('/download', download);

module.exports = app;
