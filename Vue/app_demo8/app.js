const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//引入registerRouter
let registerRouter = require('./routes/registerRouter.js');
app.use('/registerRouter', registerRouter);

//引入loginRouter
let loginRouter = require('./routes/loginRouter.js');
app.use('/loginRouter', loginRouter);

//引入imageRouter
let imageRouter = require('./routes/imageRouter.js');
app.use('/imageRouter', imageRouter);

module.exports = app;
