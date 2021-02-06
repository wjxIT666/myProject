<template>
    <div class="button">
        <!-- 登录按钮 -->
        <el-button class="common_btn" :type="btn.type" :plain="btn.plain" v-if="btn.flag === 'login'" @click="btnCommit">{{btn.text}}</el-button>
        <!-- 注册按钮 -->
        <el-button class="common_btn" :type="btn.type" :plain="btn.plain" v-if="btn.flag === 'register'" @click="btnCommit">{{btn.text}}</el-button>
    </div>
</template>

<script>
export default {
    name: 'btn',
    props: {
        btn: {
            default: Object
        }
    },
    methods: {
        btnCommit () {
            //子组件向父组建传值
            this.$emit('set-commit');
        }
    }
}
</script>

<style lang="stylus" scoped>
.button
    .common_btn
        width: 100%
        margin: 20px 0
</style>
