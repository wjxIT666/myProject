<template>
    <div class="index3">
        <div class="index3_top">
            {{$router.history.current.params.id}}
        </div>
        <div class="index3_bottom">
            <div class="index3_bottom_l">
                <!-- 列表一 -->
                <div @click="btn_Click1($router.history.current.params.id)">列表一</div>
                <!-- 列表二 -->
                <div @click="btn_Click2($router.history.current.params.id)">列表二</div>
            </div>
            <div class="index3_bottom_r">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index3',
    data () {
        return {

        }
    },
    methods: {
        //路径跳转
        btn_Click1 (value) {
            this.$router.push({
                path: `/index3/${value}/news`
            });
        },
        //路径跳转
        btn_Click2 (value) {
            this.$router.push({
                name: 'news',
                params: { id: value }
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.index3
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
            margin-right: 5px
            background-color: yellow
        .index3_bottom_r
            flex: 1
            margin-left: 5px
            background-color: yellow
</style>
