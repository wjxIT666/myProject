<template>
    <div class="list">
        <div v-for="item in listArr" :key="item.idno">
            <button @click="btnClick(item.name)">按钮</button>
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
        listArr: {
            default: Array
        }
    },
    methods: {
        btnClick (data) {
            //子组件向父组件传值
            this.$emit('set-data', data);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
