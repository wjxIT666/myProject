<template>
    <div class="list">
        <div v-for="item in listArr" :key="item.idno">
            <div>
                <button @click="btnClick(item.name)">按钮</button>
            </div>
            <h5>
                {{item.name}}
            </h5>
            <p>
                <span>{{item.desc}}</span>
            </p>
            <p>
                <slot name="content"></slot>
            </p>
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
        btnClick (value) {
            //子组件向父组件传值
            this.$emit('set-data', value);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
