<template>
    <div class="login">
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        login () {
            let token = '000000';
            //将数据发送到vuex
            this.$store.commit('setToken', token);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
