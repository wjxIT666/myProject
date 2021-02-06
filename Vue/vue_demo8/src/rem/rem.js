( () => {
    function fontSize () {
        let baseFontSize = 100;
        let designWidth = 750;
        let currentWidth = window.innerWidth;
        let currentFontSize = (currentWidth / designWidth) * baseFontSize;
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    };
    //监听窗口大小变化
    window.addEventListener('resize', fontSize, false);
    //监听文档加载内容
    document.addEventListener('DOMContented', fontSize, false);
} )();
