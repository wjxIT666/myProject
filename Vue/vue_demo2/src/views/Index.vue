<template>
    <div class="index">

    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //剩余参数
        let fn1 = (a, b, ...args) => {
            console.log(a);
            console.log(b);
            console.log(...args);
        };
        fn1(1, 2, 3, 4, 5);
        //默认参数
        let fn2 = (a, b = '2', c = '嘿嘿') => {
            console.log(a);
            console.log(b);
            console.log(c);
        };
        fn2(1);
        //解构赋值
        let [json, arr, num, str] = [{a: 'a', b: 'b'}, [1, 2, 3], 18, '翠花'];
        alert(JSON.stringify(json));
        alert(arr);
        alert(num);
        alert(str);
        //Array对象
        //map方法 返回的是一个数组 映射
        let arr1 = [60, 59, 78, 45, 34];
        let arr1Result = arr1.map( item => item > 60 ? '好看' : '丑');
        console.log(arr1Result);
        //filter方法 返回的是一个数组 过滤
        let arr2 = [1, 2, 3, 4, 5];
        let arr2Result = arr2.filter( item => {
            if (item > 2) {
                console.log('幸运');
                return item;
            }
        } );
        console.log(arr2Result);
        //String对象
        let str1 = 'https://www.baidu.com';
        if (str1.startsWith('https://')) {
            console.log('加密网址');
        } else {
            console.log('普通网址');
        };
        let str2 = '1.jpg';
        if (str2.endsWith('.jpg')) {
            console.log('jpg文件');
        } else {
            console.log('其他文件');
        };
        //Promise
        //Promise.all() 返回的是一个数组
        Promise.all([
            this.$api.getInterface(),
            this.$api.postInterface()
        ]).then( res => {
            console.log(res);
        } );
    }
}
</script>

<style lang="stylus" scoped>

</style>
