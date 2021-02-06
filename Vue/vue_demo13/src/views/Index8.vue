<template>
    <div class="index8">
        <div id="cvs"></div>
    </div>
</template>

<script>
export default {
    name: 'index8',
    mounted () {
        //获取canvas
        let canvas = document.querySelector('#cvs');
        console.log(canvas);
        //设置canvas的比例宽高
        canvas.setAttribute('width', '600px');
        canvas.setAttribute('height', '600px');
        //获取画笔对象
        let ctx = canvas.getContext('2d');
        console.log(ctx);
    }
}
</script>

<style lang="stylus" scoped>

</style>
