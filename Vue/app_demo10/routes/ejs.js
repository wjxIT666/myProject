const express = require('express');

const router = express.Router();

//设置路径
router.get('/', function (req, res) {
    //设置参数
    let data = {
        listArr: ['甲', '乙', '丙'] 
    };
    //渲染页面
    res.render('ejs.ejs', data);
} );

module.exports = router;
