<template>
    <div class="index3">
        <!-- flex 弹性元素 -->
        <div class="flex_box">
            <div class="flex_item"></div>
            <div class="flex_item"></div>
            <div class="flex_item"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index3'
}
</script>

<style lang="stylus" scoped>
.flex_box
    display: flex
    /** 主轴变换 */
    flex-direction: row
    /** 主轴对齐方式 */
    /** 自对齐 */
    /** justify-content: space-around */
    /** 两端对齐 */
    /** justify-content: space-between */
    /** 中心对齐 */
    /** justify-content: center */
    /** 底部对齐 */
    /** justify-content: flex-end */
    /** 开始对齐 */
    justify-content: flex-start
    /** 交叉轴对齐方式 */
    align-items: center 
    width: 100%
    height: 300px
    background-color: pink
    .flex_item
        /** 瓜分父元素的剩余空间 */
        flex-grow: 1
        height: 100px 
        background-color: yellow
</style>
