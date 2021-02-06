<template>
    <div class="login">
        <div>
            账号：<input type="text" v-model="username"/>
        </div>
        <div>
            密码：<input type="text" v-model="password"/>
        </div>
        <div>
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        //登录
        login () {
            //用户名
            let username = this.username;
            console.log(username);
            //密码
            let password = this.$rsa.rsaCode(this.password);
            console.log(password);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
