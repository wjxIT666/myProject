( () => {
    function fnFontBase () {
        //设置基本的fontSize
        let fontSize = 100;
        //获取设计图的宽度
        let designWidth = 750;
        //获取当前屏幕的宽度
        let currentWidth = window.innerWidth;
        //计算出当前的fontSize
        let currentFontSize = (currentWidth / designWidth) * fontSize;
        //设置根fontSize
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    };

    //监听当前窗口变化
    window.addEventListener('resize', fnFontBase, false);

    //监听文档内容
    document.addEventListener('DOMContentLoaded', fnFontBase, false);
} )();
