<template>
    <div class="index">
        <button @click="currentComponent = 'Header'">头部组件</button>
        <button @click="currentComponent = 'Footer'">底部组件</button>
        <component :is="currentComponent"></component>
        <div class="box">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </div>
</template>

<script>
const Header = () => import('../components/header.vue');
const Footer = () => import('../components/footer.vue');
export default {
    name: 'index',
    data () {
        return {
            currentComponent: 'Header'
        }
    },
    mounted () {
        
    },
    components: { Header, Footer }
}
</script>

<style lang="stylus" scoped>
.box
    overflow: scroll
    width: 100px
    height: 100px
    background-color: pink
    margin: 10px 20px
    padding: 20px
    border: 10px solid red
</style>
