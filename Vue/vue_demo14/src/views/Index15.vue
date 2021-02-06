<template>
    <div class="index15">
        <button @click="currentComponent = 'Header'">头部组件</button>
        <button @click="currentComponent = 'Footer'">底部组件</button>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
export default {
    name: 'index15',
    data () {
        return {
            currentComponent: 'Header'
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
