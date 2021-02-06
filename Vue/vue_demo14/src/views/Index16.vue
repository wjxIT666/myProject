<template>
    <div class="index16">

    </div>
</template>

<script>
export default {
    name: 'index16',
    async mounted () {
        let result = await this.$api.getRouter();
        console.log(result);
    }
}
</script>

<style lang="stylus" scoped>

</style>
