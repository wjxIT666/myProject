<template>
    <div class="list">
        <div v-for="item in listArr" :key="item.idno">
            <h5>{{item.name}}</h5>
            <!-- 插槽占位 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    data () {
        return {
            listArr: [
                {
                    idno: '0001',
                    name: '北大'
                },
                {
                    idno: '0002',
                    name: '清华'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
