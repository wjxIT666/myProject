<template>
    <div class="index7">
        <div class="index7_top">
            {{$router.history.current.params.id}}
        </div>
        <div class="index7_bottom">
            <div class="index7_bottom_l">
                <div @click="btn_Click1($router.history.current.params.id)">列表一</div>
                <div @click="btn_Click2($router.history.current.params.id)">列表二</div>
            </div>
            <div class="index7_bottom_r">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index7',
    methods: {
        btn_Click1 (val) {
            this.$router.push({
                path: `/index7/${val}/news`
            });
        },

        btn_Click2 (val) {
            this.$router.push({
                name: 'news',
                params: { id: val }
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.index7_top
    width: 100%
    height: 100px
    background-color: pink
    margin-bottom: 10px
.index7_bottom
    display: flex
    width: 100%
    height: 200px
    .index7_bottom_l
        flex: 1
        margin-right: 5px
        background-color: yellow
    .index7_bottom_r
        flex: 1
        margin-left: 5px
        background-color: yellow
</style>
