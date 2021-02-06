<template>
    <div class="index17">
        <input type="text" v-model="username" />
        <button @click="commit">提交</button>
    </div>
</template>

<script>
export default {
    name: 'index17',
    data () {
        return {
            username: ''
        }
    },
    methods: {
        commit () {
            //RSA前端加密
            let username = this.$rsa.rsaCheck(this.username);
            console.log(username);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
