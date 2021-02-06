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
            //获取token
            let token = '000000';
            //将token存储在vuex中
            this.$store.commit('setToken', token);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
