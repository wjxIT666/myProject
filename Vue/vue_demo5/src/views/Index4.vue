<template>
    <div class="index4">
        <!-- 表单数据 -->
        <input type="text" v-model="username">
        <input type="text" v-model="tel">
        <input type="button" value="跳转" @click="btnClick">
    </div>
</template>

<script>
export default {
    name: 'index4',
    data () {
        return {
            username: '',
            tel: ''
        }
    },
    methods: {
        btnClick () {
            this.$router.push({
                path: '/back'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
