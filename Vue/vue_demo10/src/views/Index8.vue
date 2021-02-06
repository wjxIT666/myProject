<template>
    <div class="index8">
        <div>
            用户：<input type="text" v-model="username"/>
        </div>
        <div>
            电话：<input type="text" v-model="tel"/>
        </div>
        <div>
            <button @click="btnClcik">跳转下一页</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index8',
    data () {
        return {
            username: '',
            tel: ''
        }
    },
    methods: {
        btnClcik () {
            this.$router.push({
                path: '/index9'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
