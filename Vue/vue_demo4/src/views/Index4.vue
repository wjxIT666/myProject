<template>
    <div class="index4">
        <div class="index4_top">
            {{$router.history.current.params.newsid}}
        </div>
        <div class="index4_bottom">
            <div class="index4_bottom_l">
                <div @click="btn_Click1($router.history.current.params.newsid)">列表一</div>
                <div @click="btn_Click2($router.history.current.params.newsid)">列表二</div>
            </div>
            <div class="index4_bottom_r">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index4',
    methods: {
        //路径跳转
        btn_Click1 (value) {
            this.$router.push({
                path: `/index4/${value}/news`
            });
        },
        //路径跳转
        btn_Click2 (value) {
            this.$router.push({
                name: 'news',
                params: { value: value }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.index4_top
    width: 100%
    height: 100px
    background-color: pink
    margin-bottom: 10px
.index4_bottom
    display: flex
    width: 100%
    height: 200px
    .index4_bottom_l
        flex: 1
        background-color: yellow
        margin-right: 5px
    .index4_bottom_r
        flex: 1
        background-color: yellow
        margin-left: 5px
</style>
