<template>
    <div class="index3">
        <div class="index3_top">
            
        </div>
        <div class="index3_bottom">
            <div class="index3_bottom_l">
                <div @click="btn_Click1($router.history.current.params)">列表一</div>
                <div>列表二</div>
            </div>
            <div class="index3_bottom_r">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index3',
    mounted () {
        
    }
}
</script>

<style lang="stylus" scoped>
.index3_top
    width: 100%
    height: 100px
    background-color: pink 
    margin-bottom: 10px
.index3_bottom
    display: flex
    width: 100%
    height: 200px
    .index3_bottom_l
        flex: 1
        background-color: yellow
        margin-right: 5px
    .index3_bottom_r
        flex: 1
        background-color: yellow
        margin-left: 5px
</style>
