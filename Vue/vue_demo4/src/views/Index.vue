<template>
    <div class="index">

    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //Math数学对象
        var maxNum = Math.max(10, 100); //最大值
        console.log(maxNum); //100
        var minNum = Math.min(10, 100); //最小值
        console.log(minNum); //10
        var absNum = Math.abs(-10); //绝对值
        console.log(absNum); //10
        var floorNum = Math.floor(1.9); //向下取整
        console.log(floorNum); //1
        var ceilNum = Math.ceil(1.1); //向上取整
        console.log(ceilNum); //2
        var roundNum = Math.round(-1.5); //四舍五入 .5向上取整
        console.log(roundNum);
        var randomNum = Math.random(); //随机数 [0, 1)
        console.log(randomNum);
        //抽奖
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        };
        var arr = ['翠花', '涵涵', '宝贝'];
        console.log(arr[getRandomIntInclusive(0, arr.length-1)]);
        //Date日期对象
        var date1 = new Date(); //获取系统默认时间
        console.log(date1);
        var date2 = new Date('2008-08-08 08:08:08'); //获取自定义时间
        console.log(date2);
        var year = new Date().getFullYear(); //年
        console.log(year);
        var month = new Date().getMonth(); //月
        console.log(month + 1);
        var day = new Date().getDate(); //日
        console.log(day);
        function fn () {
            var h = new Date().getHours();
            h = h >= 10 ? h : `0${h}`;
            var m = new Date().getMinutes();
            m = m >= 10 ? m : `0${m}`;
            var s = new Date().getSeconds();
            s = s >= 10 ? s : `0${s}`;
            return `${h}:${m}:${s}`;
        };
        var fnResult = fn();
        console.log(fnResult);
        var timer1 = new Date().getTime(); //获取时间戳
        console.log(timer1);
        var timer2 = +new Date(); //获取时间戳
        console.log(timer2);
        //Array数组对象
        var arr1 = ['red', 'yellow', 'blue'];
        var arr1Length = arr1.push('white'); //返回的是数组的长度
        console.log(arr1Length);
        var arr1Delete = arr1.pop(); //被删除的元素
        console.log(arr1Delete);
        arr1.unshift('black'); //在数组的前面添加元素
        console.log(arr1);
        //String字符串对象
        var str1 = '糯米糯米，强的一笔';
        for (var i = 0; i < str1.length; i++) {
            console.log(str1.charAt(i)); //返回指定索引处的值
        };
        var str2 = '改革春风吹满地~';
        console.log(str2.substr(0, 4)); //开始的位置，截取的长度
        console.log(str2.substr(-4)); //从后面开始的长度
        console.log(str2.substring(0, 4)); //开始的位置，结束的位置
        var str3 = '北京市-大兴区';
        console.log(str3.split('-')[0]); //获取字符串
    }
}
</script>

<style lang="stylus" scoped>

</style>
