var express = require('express');

var router = express.Router();

var multer = require('multer');

var upload = multer({dest: './public/upload'});

var fs = require('fs');

router.get('/', function (req, res) {
    //页面渲染
    res.render('imageUpload.ejs');
});

router.post('/form', upload.single('file'), function (req, res) {
    let file = req.file;
    console.log(file);
    //重命名
    let newPath = file.destination + '/' + file.filename + file.originalname;
    let oldPath = file.destination + '/' + file.filename;
    fs.rename(oldPath, newPath, () => {
        console.log('重命名成功~');
    });
    res.send(`<img src="/upload/${file.filename}${file.originalname}"/>`);
});

module.exports = router;
