<template>
    <div class="list">
        <div v-for="item in listArray" :key="item.id">
            <button @click="btnClick(item.name)">子组件给父组件传值</button>
            <h5>{{item.name}}</h5>
            <p>{{item.desc}}</p>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    props: {
        listArray: {
            default: Array
        }
    },
    methods: {
        btnClick (data) {
            //子组件给父组件传值
            this.$emit('set-data', data);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
