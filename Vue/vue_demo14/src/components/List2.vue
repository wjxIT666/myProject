<template>
    <div class="list2">
        <input type="text" v-model="value.username" @input="handlerInput"/>
        <button @click="btnClick(value.username)">提交</button>
    </div>
</template>

<script>
export default {
    name: 'list2',
    props: ['value'],
    methods: {
        btnClick (data) {
            //子组件向父组件传值
            this.$emit('set-data', data);
        },
        handlerInput (e) {
            //子组件向父组件传值
            this.$emit('set-input', e.target.value);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
