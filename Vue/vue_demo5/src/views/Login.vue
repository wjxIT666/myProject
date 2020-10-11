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
            let token = '123456789';
            //将token存储到session中
            sessionStorage.setItem('token', token);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
