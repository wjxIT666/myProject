<template>
    <div class="index12">
        <button @click="currentComponent = 'Header'">头部组件</button>
        <button @click="currentComponent = 'Footer'">底部组件</button>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
const Header = () => import('../components/header.vue');
const Footer = () => import('../components/footer.vue');
export default {
    name: 'index12',
    data () {
        return {
            currentComponent: 'Header',
        }
    },
    components: {Header, Footer}
}
</script>

<style lang="stylus" scoped>

</style>
