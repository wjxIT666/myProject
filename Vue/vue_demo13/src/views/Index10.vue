<template>
    <div class="index10">
        <div class="box">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </div>
</template>

<script>
export default {
    name: 'index10',
    mounted () {
        //解构赋值
        let [json, arr, num, str] = [{a: '0', b: '1'}, [1, 2, 3], 18, '18'];
        console.log(json);
        console.log(arr);
        console.log(num);
        console.log(str);
    }
}
</script>

<style lang="stylus" scoped>
.box
    overflow: scroll
    width: 100px
    height: 100px
    background-color: pink 
    margin: 20px
    padding: 20px
    border: 10px solid red
</style>
