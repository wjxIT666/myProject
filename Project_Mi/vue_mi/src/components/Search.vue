<template>
    <div class="search">
        <!-- 搜索内容 -->
        <div class="search_body">
            <!-- 搜索左侧 -->
            
            <!-- 搜索右侧 -->
            <div class="search_body_right">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
.search
    width: 100%
    height: 100px
    background-color: pink
    font-size: 0
    .search_body
        display: flex
        width: 1130px
        height: 100%
        margin: 0 auto
        background-color: yellow 
        .search_body_left
            flex: 1
            align-items: center
            justify-content: center
        .search_body_right
            flex: 1
</style>
