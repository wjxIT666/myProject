( () => {
    //设置fontSize函数
    function fontSize () {
        //设置baseSize
        var baseSize = 100;
        //获取设计图宽度
        var designWidth = 750;
        //获取当前屏幕宽度
        var currentWidth = window.innerWidth;
        //计算出currentFontSize
        var currentFontSize = (currentWidth / designWidth) * baseSize;
        //给当前html赋值
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    };
    //监听当前窗口大小变化
    window.addEventListener('resize', fontSize, false);
    //监听当前页面加载变化
    document.addEventListener('DOMContentLoaded', fontSize, false);
} )();
