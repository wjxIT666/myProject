<template>
    <div class="index">
        <div class="btn"></div>
        <button class="btn2"></button>
    </div>
</template>

<script>
export default {
    name: 'index',
    async mounted () {
        let result = await this.$api.getInterface();
        console.log(result);
    },
    watch: {
        $route: {
            deep: true,
            immediate: true,
            handler: function (val) {
                console.log(val);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
