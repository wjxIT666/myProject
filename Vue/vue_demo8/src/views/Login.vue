<template>
    <div class="login">
        <button @click="btnClick">登录</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        btnClick () {
            let token = '000000';
            //将token发送到vuex
            this.$store.commit('setToken', token);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
