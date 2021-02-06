<template>
    <div class="index11">
        <div>
            用户名：<input type="text" v-model="username"/>
        </div>
        <div>
            手机号：<input type="text" v-model="tel"/>
        </div>
        <div>
            <button @click="btnClick">按钮</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index11',
    data () {
        return {
            username: '',
            tel: ''
        }
    },
    methods: {
        btnClick () {
            this.$router.push({
                path: '/index12'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
