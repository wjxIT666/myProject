<template>
    <div class="index">
        <!-- canvas -->
        <canvas id="cvs" width="600" height="600"></canvas>
        <img ref="img" src="../assets/12-1Z304092I9.jpg" alt="" v-if="false">
    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //获取canvas
        var cvs = document.querySelector('#cvs');
        //获取画笔对象
        var ctx = cvs.getContext('2d');
        console.log(ctx);
        //绘制图像
        var img = this.$refs.img;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
    }
}
</script>

<style lang="stylus" scoped>

</style>
