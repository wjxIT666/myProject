<template>
    <div class="index">

    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //解构赋值
        let [json, arr, num, str] = [{a: 'a', b: 'b'}, [1, 2, 3], 18, '解构赋值'];
        alert(JSON.stringify(json));
        alert(arr);
        alert(num);
        alert(str);
    }
}
</script>

<style lang="stylus" scoped>

</style>
