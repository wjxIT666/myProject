<template>
    <div class="index2">
        <!-- BFC区域 -->
        <div class="bigBox">
            <div class="smallBox">

            </div>
        </div>

        <!-- input -->
        <div>
            <!-- 去掉input的默认样式 -->
            <input class="inp" type="checkbox"/>复选框
        </div>

        <!-- 帧动画 -->
        <div class="animation">

        </div>
    </div>
</template>

<script>
export default {
    name: 'index2'
}
</script>

<style lang="stylus" scoped>
.bigBox
    width: 100px
    height: 100px
    background-color: pink
    overflow: hidden
    .smallBox
        width: 50px
        height: 50px
        background-color: red
        margin-top: 20px
.inp[type=checkbox]
    position: relative
    -webkit-appearance: none
    width: 60px
    height: 20px
    background-color: pink 
    border-radius: 10px
    vertical-align: middle
    outline: none
    cursor: pointer
    transition: all 2s
    &::after
        content: ''
        position: absolute 
        top: 0
        left: 0
        width: 20px
        height: 20px
        background-color: yellow
        border-radius: 50%
        transition: all 2s
    &:checked
        background-color: green
        &::after
            content: ''
            position: absolute 
            top: 0
            left: 40px
            width: 20px
            height: 20px
            background-color: yellow
            border-radius: 50%
.animation
    width: 50px
    height: 50px
    background-color: pink
    animation: rotate 2s infinite
</style>
