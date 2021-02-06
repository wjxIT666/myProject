<template>
    <div class="index">
        <button @click="btnClick">跳转</button>
    </div>
</template>

<script>
export default {
    name: 'index',
    methods: {
        btnClick () {
            this.$router.push({
                path: '/index2'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
