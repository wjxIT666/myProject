const express = require('express');

const router = express.Router();

//引入multer
const multer = require('multer');
const upload = multer({dest: './public/upload/'});

//引入fs
const fs = require('fs');

//设置路径
router.get('/', function (req, res) {
    //渲染页面
    res.render('imageUpload.ejs');
} );

router.post('/form', upload.single('file'), function (req, res) {
    //获取图片
    let file = req.file;
    console.log(file);
    let oldPath = file.destination + file.filename;
    let newPath = file.destination + file.filename + file.originalname;
    //重命名
    fs.rename(oldPath, newPath, () => {
        console.log('重命名成功~');
    } );
    res.send(`<img src="/upload/${file.filename}${file.originalname}"/>`);
});

module.exports = router;
