var express = require('express');

var router = express.Router();

//引入图片上传依赖
var multer = require('multer');
var upload = multer({dest: './public/upload'});

var fs = require('fs');

router.get('/', function (req, res) {
    //渲染页面
    res.render('imageUpload.ejs');
} );

router.post('/form', upload.single('file'), function (req, res) {
    var file = req.file;
    console.log(file);
    //重命名
    let oldPath = file.destination + '/' + file.filename;
    let newPath = file.destination + '/' + file.filename + file.originalname;
    console.log(newPath);
    fs.rename(oldPath, newPath, function () {
        console.log('重命名成功~');
    } );
    res.send(`<img src="/upload/${file.filename}${file.originalname}"/>`);
});

module.exports = router;
