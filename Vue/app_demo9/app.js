const express = require('express');
const app = express();

//引入path
const path = require('path');

//使用静态资源模板
app.use(express.static(path.join(__dirname, 'public')));

//引入blobRouter
let blobRouter = require('./routes/blobRouter.js');
app.use('/blobRouter', blobRouter);

module.exports = app;
