<template>
    <div class="index">
        <button @click="btnClick">按钮</button>
        <transition name="slide">
            <div class="box" v-if="showBox">

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            showBox: false
        }
    },
    computed: {
       
    },
    watch: {
       
    },
    methods: {
        btnClick () {
            this.showBox = !this.showBox;
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
        transform: translate(100px, 0)
    &.slide-enter-to, &.slide-leave
        transform: translate(0, 0)
</style>
