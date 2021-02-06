<template>
    <div class="index">
        <canvas id="cvs"></canvas>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'index',
    data () {
        return {
            cvs: null
        }
    },
    mounted () {
        //async 与 await
        function fn () {
            return new Promise(function (resolve, reject) {
                if (true) {
                    resolve('res返回数据');
                } else {
                    reject();
                };
            });
        };

        async function _fn() {
            let result = await fn();
            console.log(result); 
        };

        _fn();
    },
    methods: {
        btnClick () {
            let imgBase64 = this.cvs.toDataURL();
            console.log(imgBase64);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
