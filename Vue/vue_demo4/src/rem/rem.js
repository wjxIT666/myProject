( () => {
    //设置fontSize
    function fontSize () {
        //设置基础的baseFontSize
        var baseFontSize = 100;
        //获取设计图的宽度
        var designWidth = 750;
        //获取当前屏幕宽度
        var currentWidth = window.innerWidth;
        //计算出自适应当前fontSize
        var currentFontSize = (currentWidth / designWidth) * baseFontSize;
        //在当前html元素下绑定值
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    };
    //监听当前页面窗口大小变化
    window.addEventListener('resize', fontSize, false);
    //监听当前页面文档变化
    document.addEventListener('DOMContentLoaded', fontSize, false);
} )();
