<template>
    <div class="index">
        <div class="box">

        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //定时器
        //setTimeout: 只执行一次，到时间
        //setInterval： 每隔一段时间，执行一次
        var timer = setTimeout( () => {
            console.log('只执行一次~');
        }, 3000);
        //清空定时器
        clearTimeout(timer);
        setInterval( () => {
            console.log('每隔一段时间，执行一次~');
        }, 3000);
        //元素偏移量
        //offset == 获取元素的位置和元素的大小
        //获取元素的位置，指的是，获取距离带有定位父元素的位置，如果没有父元素或者父元素没有定位，获取距离body的位置
        //获取元素的大小，指的是，width+border+padding
        var box = document.querySelector('.box');
        var boxHeight = box.offsetHeight;
        console.log(boxHeight);
        var boxWidth = box.offsetWidth;
        console.log(boxWidth);
        var boxTop = box.offsetTop;
        console.log(boxTop);
        var boxLeft = box.offsetLeft;
        console.log(boxLeft);

    }
}
</script>

<style lang="stylus" scoped>
.box
    width: 100px
    height: 100px
    padding: 10px
    margin: 40px
    border: 10px solid red
</style>
