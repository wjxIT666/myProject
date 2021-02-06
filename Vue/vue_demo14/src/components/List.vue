<template>
    <div class="list">
        <div v-for="item in listArr" :key="item.idno">
            <button @click="btnClick(item.name)">按钮</button>
            <h5>{{item.name}}</h5>
            <p>{{item.desc}}</p>
            <!-- 具名插槽 -->
            <slot name="content">
                小姐姐很好看哦
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    props: {
        listArr: {
            default: Object
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
