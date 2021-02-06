<template>
    <div class="list2">
        <input type="text" v-model="value.username"><br>
        <button @click="commit(value.username)">提交</button>
    </div>
</template>

<script>
export default {
    name: 'list2',
    props: ['value'],
    methods: {
        commit (data) {
            //子组件向父组件传值
            this.$emit('set-data', data);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
