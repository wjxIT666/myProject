<template>
    <div class="index2">
        <div class="box">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </div>
</template>

<script>
export default {
    name: 'index2',
    mounted () {
        //转字符串方法
        var num1 = 18;
        console.log(num1.toString());
        //判断是否是数值型
        console.log(isNaN(num1)); //返回false 代表是数值型
        //转整数型
        var str1 = '18';
        console.log(parseInt(str1));
        //转浮点型
        var str2 = '18.18';
        console.log(parseFloat(str2));
        //转布尔型
        var str3 = '';
        console.log(Boolean(str3));
        //浮点型精度问题
        var num2 = 0.1;
        var num3 = 0.2;
        var num4 = 0.1 + 0.2;
        console.log(num4);
        //switch
        function fn1 (value) {
            switch (value) {
                case '1':
                    console.log('匹配到1');
                    break;
                case '2':
                    console.log('匹配到2');
                    break;
                default:
                    console.log('什么都没匹配到~');
                    break;
            };
        };
        fn1('1');
        fn1('2');
        fn1(2);
        //arguments
        function fn2 () {
            return arguments;
        };
        var fn2Result = fn2(1, 2, 3);
        console.log(fn2Result);
        //变量提升 ==> 先声明，后赋值
        //console.log(num5); //报错
        console.log(num6); //undefined
        var num6 = 18;
        console.log(num6); //18
        //函数提升
        fn3(); //函数提升
        function fn3 () {
            console.log('函数提升1');
        };
        console.log(fn4); //undefined
        var fn4 = function () {
            console.log('函数提升2');
        }; 
        fn4(); //函数提升2
        //Math数学对象
        var maxNum = Math.max(10, 100); //最大值
        console.log(maxNum);
        var minNum = Math.min(10, 100); //最小值
        console.log(minNum);
        var absNum = Math.abs(-100); //绝对值
        console.log(absNum);
        var floorNum = Math.floor(1.9); //向下取整
        console.log(floorNum);
        var ceilNum = Math.ceil(1.1); //向上取整
        console.log(ceilNum);
        var roundNum = Math.round(-1.5); //四舍五入，.5是向上取整
        console.log(roundNum);
        var randomNum = Math.random(); //随机数 [0, 1)
        console.log(randomNum);
        //抽奖
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        };
        var arr1 = ['小米机器人', '小米手机', '小米电脑', '小米台灯'];
        console.log(arr1[getRandomIntInclusive(0, arr1.length-1)]);
        //Date对象
        var date1 = new Date(); //默认日期
        console.log(date1);
        var date2 = new Date('2008-08-08 08:08:08'); //自定义日期
        console.log(date2);
        var year = new Date().getFullYear(); //年
        console.log(year);
        var month = new Date().getMonth(); //月
        console.log(month + 1);
        var day = new Date().getDate(); //日
        console.log(day);
        function fn5 () {
            var h = new Date().getHours();
            h = h >= 10 ? h : `0${h}`;
            var m = new Date().getMinutes();
            m = m >= 10 ? m : `0${m}`;
            var s = new Date().getSeconds();
            s = s >= 10 ? s : `0${s}`;
            return `${h}:${m}:${s}`;
        };
        var fn5Result = fn5(); //时分秒
        console.log(fn5Result);
        var date3 = new Date().getTime(); //时间戳
        console.log(date3);
        var date4 = +new Date(); //时间戳
        console.log(date4);
        //Array对象
        var arr2 = ['red', 'yellow', 'blue'];
        var arr2Length = arr2.push('green');
        console.log(arr2Length);
        var arr2Delete = arr2.pop();
        console.log(arr2Delete);
        arr2.unshift('white');
        console.log(arr2);
        //Strng对象
        var str4 = '糯米糯米，强的一笔';
        for (var i = 0; i < str4.length; i++) {
            console.log(str4.charAt(i)); //返回指定索引处的值
        };
        //截取字符串的长度
        console.log(str4.substr(0, 4)); //起始位置，长度
        console.log(str4.substr(-4)); //后四位
        console.log(str4.substring(0, 4)); //起始位置，结束的位置
        console.log(str4.split('，')[0]);
        //定时器
        var timer = setTimeout(function () {
            console.log('只执行一次');
        }, 3000); //只执行一次，到了时间
        clearTimeout(timer);
        setInterval(function () {
            console.log('每隔一段固定的时间，执行一次代码');
        }, 3000); //每隔一段固定的时间，执行一次代码
        //JS代码执行机制
        //JS是单线程的，将任务分为同步任务和异步任务，同步任务放在执行栈中，先执行，再执行异步任务，异步任务放在任务队列（消息队列）中
        //异步任务：定时器，事件，回调函数
        //元素偏移量
        //offset 是指获取元素的位置和大小
        //获取元素的位置，是指获取距离带有定位的父元素的位置，如果没有父元素或者父元素没有定位，则是指距离body的位置
        //获取元素的大小，是指width+padding+border
        var box = document.querySelector('.box');
        var boxTop = box.offsetTop;
        console.log(boxTop);
        var boxLeft = box.offsetLeft;
        console.log(boxLeft);
        var boxWidth = box.offsetWidth;
        console.log(boxWidth);
        var boxHeight = box.offsetHeight;
        console.log(boxHeight);
        //元素可视区
        //client 是指获取元素的位置和大小
        //获取元素的位置，是指获取元素距离border的位置
        //获取元素的大小，是指width+padding
        var boxClientTop = box.clientTop;
        console.log(boxClientTop);
        var boxClientLeft = box.clientLeft;
        console.log(boxClientLeft);
        var boxClientWidth = box.clientWidth;
        console.log(boxClientWidth);
        var boxClientHeight = box.clientHeight;
        console.log(boxClientHeight);
        //元素的滚动 
        //scroll 是指获取元素的位置和大小
        //获取元素的位置，是指获取被卷去头部的高度
        //获取元素的大小，是指width+padding 实际高度
        box.addEventListener('scroll', function () {
            var boxScrollTop = box.scrollTop;
            console.log(boxScrollTop);
        }, false);
        //mouseover与mouseenter的区别
        //mouseenter没有事件冒泡
        //ES6类的创建与继承
        class Father {
            constructor (x, y) {
                this.x = x;
                this. y = y;
            };
            addNum () {
                return this.x + this.y;
            };
            doSome (data) {
                return data;
            };
        };
        class Son extends Father {
            constructor (x, y) {
                super(x, y); //子类给父类赋值
                this.x = x;
                this.y = y;
            };
            decNum () {
                return this.x - this.y;
            };
        };
        let son = new Son(10, 5);
        console.log(son.addNum());
        console.log(son.doSome('敲代码'));
        console.log(son.decNum());
        //原型
        Father.prototype = {
            constructor: Father,
            sayHi: function () {
                console.log('Hello World');
            }
        };
        let father = new Father(10, 10);
        father.sayHi();
        //原型链
        function GetName (name) {
            this.name = name;
        };
        //原型
        GetName.prototype = {
            constructor: GetName,
            doSome: function (data) {
                return data;
            }
        };
        var GetNameResult = new GetName('小王');
        console.log(GetNameResult.__proto__);
        //高阶函数
        //回调函数
        function fn6 (a, b, callback) {
            callback && callback();
            return a + b;
        };
        var fn6Result = fn6(1, 2, function () {
            console.log('回调函数~');
        });
        console.log(fn6Result);
        //闭包
        function fn7 () {
            var num100 = 18;
            return function () {
                return num100;
            };
        };
        var fn7Result = fn7();
        console.log(fn7Result());
        //递归函数
        var num200 = 0;
        function fn8 () {
            num200++;
            if (num200 == 6) {
                console.log('===递归函数===');
                return;
            };
            fn8();
        };
        fn8();
        //浅拷贝与深拷贝
        var user = {
            name: '王建星',
            sister: {
                name: '王新瑶'
            }
        };
        var student = JSON.parse(JSON.stringify(user));
        user.sister.name = '哈哈哈';
        console.log(user);
        console.log(student);
        //正则表达式
        var reg1 = /^[a-zA-Z0-9_]{6,9}$/;
        if (reg1.test('a115345_!')) {
            console.log('匹配成功~');
        } else {
            console.log('匹配失败~');
        };
        var reg2 = /^\d?$/;
        if (reg2.test('11')) {
            console.log('匹配成功2');
        } else {
            console.log('匹配失败2');
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    overflow: scroll
    width: 100px
    height: 100px
    padding: 20px
    border: 10px solid pink
    background-color: yellow
</style>
