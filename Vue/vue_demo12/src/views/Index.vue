<template>
    <div class="index">
        <div class="box">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <button class="btn">按钮</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'index',
    mounted () {
        //初识Promise
        let p = new Promise(function (resolve, reject) {
            if (true) {
                resolve('data返回数据');
            } else {
                reject();
            };
        });

        (async () => {
            await p.then(res => {
                console.log(res);
            });
        })()
    },
    beforeRouteEnter (to, from, next) {
        console.log('进入页面');
        console.log(to);
        console.log(from);
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('离开页面');
        console.log(to);
        console.log(from);
        next();
    }
}
</script>

<style lang="stylus" scoped>
.box
    overflow: scroll
    width: 100px
    height: 100px
    margin: 100px
    padding: 20px
    border: 10px solid red
    background-color: pink
</style>
