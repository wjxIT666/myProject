<template>
    <div class="index">

    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //字符串
        let str1 = 'http://www.baidu.com';
        if (str1.startsWith('http://')) {
            console.log('普通网址');
        } else {
            console.log('其他网址');
        };

        let str2 = '.jpg';
        if (str2.endsWith('.jpg')) {
            console.log('jpg文件');
        } else {
            console.log('其他文件');
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
