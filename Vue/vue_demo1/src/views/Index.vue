<template>
    <div class="index">

    </div>
</template>

<script>
export default {
    name: 'index',
    mounted () {
        //Promise
        Promise.all([
            this.$api.getInterface(),
            this.$api.postInterface()
        ]).then( res => {
            console.log(res);
        });
    }
}
</script>

<style lang="stylus" scoped>

</style>
