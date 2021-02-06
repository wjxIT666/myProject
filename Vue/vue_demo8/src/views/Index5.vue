<template>
    <div class="index5">
        <canvas id="cvs"></canvas>
        <button @click="commit">提交</button>
    </div>
</template>

<script>
export default {
    name: 'index5',
    data () {
        return {
            isShow: false,
            cvs: null
        }
    },
    methods: {
        commit () {
            let base64 = this.cvs.toDataURL();
            console.log(base64);
        }
    },
    mounted () {
        //获取canvas
        this.cvs = document.querySelector('#cvs');
        //设置canvas的比例宽高
        this.cvs.setAttribute('width', cvs.offsetWidth);
        this.cvs.setAttribute('height', cvs.offsetHeight);
        this.cvs.style.border = '1px solid #000';
        //获取画笔对象
        let ctx = this.cvs.getContext('2d');
        console.log(ctx);
        //获取canvas的视图区域
        let boundRect = this.cvs.getBoundingClientRect();
        //设置画笔样式
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        //监听touchstart
        this.cvs.addEventListener('touchstart', (e) => {
            console.log(e);
            ctx.beginPath();
            ctx.moveTo(e.touches[0].clientX - boundRect.left, e.touches[0].clientY - boundRect.top);
        }, false);

        //监听touchstart
        this.cvs.addEventListener('touchmove', (e) => {
            console.log(e);
            ctx.lineTo(e.touches[0].clientX - boundRect.left, e.touches[0].clientY - boundRect.top);
            ctx.stroke();
        }, false);
    }
}
</script>

<style lang="stylus" scoped>

</style>
