var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({dest: './public/upload'});

var fs = require('fs');

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('imageUpload.ejs');
} );

router.post('/form', upload.single('file'), function (req, res) {
    let file = req.file;
    //路径重写
    let oldPath = file.destination + '/' + file.filename;
    let newPath = file.destination + '/' + file.filename + file.originalname;
    fs.rename(oldPath, newPath, () => {
        console.log('路径重写成功~');
    });
    res.send(`<img src="/upload/${file.filename}${file.originalname}"/>`);
});

module.exports = router;
