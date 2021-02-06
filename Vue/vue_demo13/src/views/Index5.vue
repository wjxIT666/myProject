<template>
    <div class="index5">
        <div v-myDiv="myDivBackground">111</div>
        <button @click="btnClick">更换背景</button>
    </div>
</template>

<script>
export default {
    name: 'index5',
    data () {
        return {
            myDivBackground: 'pink'
        }
    },
    directives: {
        myDiv: {
            // 初始化状态
            inserted (e, bind) {
                e.style.background = bind.value;
            },
            //状态更新触发
            update (e, bind) {
                e.style.background = bind.value;
            }
        }
    },
    methods: {
        btnClick () {
            this.myDivBackground = 'yellow';
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
