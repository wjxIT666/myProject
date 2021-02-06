( () => {
    //设置fontSize
    function fontSize () {
        //设置baseSize
        let baseSize = 100;
        //获取设计图的宽度
        let designWidth = 750;
        //获取当前屏幕的宽度
        let currentWidth = window.innerWidth;
        //获取当前字体大小
        let currentFontSize = (currentWidth / designWidth) * baseSize;
        //设置根元素
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    };
    //监听窗口大小变化
    window.addEventListener('resize', fontSize, false);
    //监听文档加载内容变化
    document.addEventListener('DOMContentLoaded', fontSize, false);
} )();
