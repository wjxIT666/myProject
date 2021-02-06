<template>
    <div class="index17">
        <div class="box" @click="boxClick">
            <button @click.stop="btnClick">按钮</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index17',
    methods: {
        boxClick () {
            alert('盒子');
        },
        btnClick () {
            alert('按钮');
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    width: 100px
    height: 100px
    background-color: pink
</style>
