<template>
    <div class="login">
        <button @click="btnClick">登录Vuex</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        btnClick () {
            let token = '000000';
            //将token存储到session中
            this.$store.commit('setToken', token);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
