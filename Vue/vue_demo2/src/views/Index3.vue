<template>
    <div class="index3">
        <button @click="btnClick">按钮</button>
        <transition name="slide">
            <div class="box" v-if="isShow">

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'index3',
    data () {
        return {
            isShow: false
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    methods: {
        btnClick () {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    width: 100px
    height: 100px
    background-color: pink
    &.slide-enter-active, &.slide-leave-active
        transition: all 2s
    &.slide-enter, &.slide-leave-to
        transform: translate(100%, 0)
    &.slide-enter-to, &.slide-leave
        transform: translate(0, 0)
</style>
