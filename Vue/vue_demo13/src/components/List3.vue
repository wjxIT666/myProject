<template>
    <div class="list3">
        <div v-for="item in listArr" :key="item.idno">
            <h5>{{item.name}}</h5>
            <!-- 插槽 -->
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list3',
    props: {
        listArr: {
            default: Object
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
