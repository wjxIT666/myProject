<template>
    <div class="index5">
        <div class="index5_top"></div>
        <div class="index5_bottom">
            <div class="index5_bottom_l">

            </div>
            <div class="index5_bottom_r">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index5'
}
</script>

<style lang="stylus" scoped>
.index5_top
    width: 100%
    height: 200px
    background-color: pink 
    margin-bottom: 10px
.index5_bottom
    display: flex
    width: 100%
    height: 200px
    .index5_bottom_l
        flex: 1
        background-color: yellow
        margin-right: 5px
    .index5_bottom_r
        flex: 1
        background-color: yellow
        margin-left: 5px
</style>
