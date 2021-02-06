<template>
    <div class="index20">

    </div>
</template>

<script>
export default {
    name: 'index20',
    mounted () {
        //includes 数组匹配
        let arr = ['red', 'yellow', 'blue'];
        console.log(arr.includes('red', 0));
    },
    beforeRouteEnter (to, from, next) {
        console.log('进入页面前');
        console.log(to);
        console.log(from);
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('离开页面时');
        console.log(to);
        console.log(from);
        next();
    }
}
</script>

<style lang="stylus" scoped>

</style>
