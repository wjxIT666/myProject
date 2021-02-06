<template>
    <div class="index4">
        <!-- 去除input的默认样式 -->
        <!-- ::after伪元素 -->
        <!-- :checked伪元素 -->
        <input class="inp" type="checkbox" />
    </div>
</template>

<script>
export default {
    name: 'index4'
}
</script>

<style lang="stylus" scoped>
.inp[type=checkbox]
    /** 去除input的默认样式 */
    -webkit-appearance: none
    width: 60px
    height: 20px
    background-color: pink
    border-radius: 10px
    position: relative
    cursor: pointer
    outline: none
    transition: all 1s
    /** ::after伪元素 */
    &::after
        content: ''
        width: 20px
        height: 20px
        background-color: yellow
        position: absolute 
        top: 0
        left: 0
        border-radius: 50%
        transition: all 1s
    &:checked
        background-color: green
        &::after
            left: 40px
</style>
