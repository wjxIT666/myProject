<template>
    <div class="index">

    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //默认参数
        let fn = (a, b = 1, c = 2) => {
            console.log(a);
            console.log(b);
            console.log(c);
        };
        fn(0);
    }
}
</script>

<style lang="stylus" scoped>

</style>
