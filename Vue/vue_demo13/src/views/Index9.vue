<template>
    <div class="index9">
        <canvas id="cvs"></canvas>
        <button @click="btnClick">转换</button>
    </div>
</template>

<script>
export default {
    name: 'index9',
    data () {
        return {
            cvs: null
        }
    },
    mounted () {
        //获取canvas
        this.cvs = document.querySelector('#cvs');
        //设置比例宽高
        this.cvs.setAttribute('width', this.cvs.offsetWidth);
        this.cvs.setAttribute('height', this.cvs.offsetHeight);
        this.cvs.style.border = '1px solid #000';
        //获取cvs的可见视图区域
        let boundClient = this.cvs.getBoundingClientRect();
        //获取画笔对象
        let ctx = this.cvs.getContext('2d');
        console.log(ctx);
        //监听touchstart
        this.cvs.addEventListener('touchstart', function (e) {
            console.log(e);
            //开始绘制
            ctx.beginPath();
            //moveTo
            ctx.moveTo(e.touches[0].clientX - boundClient.left, e.touches[0].clientY - boundClient.top);
        }, false);
        //监听touchmove
        this.cvs.addEventListener('touchmove', function (e) {
            //lineTo
            ctx.lineTo(e.touches[0].clientX - boundClient.left, e.touches[0].clientY - boundClient.top);
            //开始绘制
            ctx.stroke();
        } );
    },
    methods: {
        btnClick () {
            let base64 = this.cvs.toDataURL();
            console.log(base64);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
