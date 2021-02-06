<template>
    <div class="index">
        <div v-html="myHtml">

        </div>
        <div class="box">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <button class="btn">按钮</button>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            myHtml: '<div style="color: red;">v-html模板</div>' 
        }
    },
    mounted () {
        //async与await的总结
        function fn () {
            return new Promise(function (resolve, reject) {
                if (true) {
                    resolve('async与await总结');
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
    }
}
</script>

<style lang="stylus" scoped>
.box
    overflow: scroll
    width: 100px
    height: 100px
    margin: 20px
    padding: 20px
    border: 10px solid red
    background-color: pink
</style>
