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
            alert(1);
        },
        btnClick () {
            alert(2);
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    width: 150px
    height: 150px
    background-color: pink
</style>
