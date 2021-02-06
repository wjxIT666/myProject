<template>
    <div class="index2">
        <div class="box" @click="boxClick">
            <button @click.stop="btnClick">按钮</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index2',
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
    width: 200px
    height: 200px
    background-color: pink
</style>
