<template>
    <div class="index10">
        <div class="index10_top">
            {{$route.params.id}}
        </div>
        <div class="index10_bottom">
            <div class="index10_bottom_l">
                <div @click="btnClick_1($route.params.id)">列表一</div>
                <div @click="btnClick_2($route.params.id)">列表二</div>
            </div>
            <div class="index10_bottom_r">
                <!-- 命名视图 -->
                <router-view name="listOne"></router-view>
                <router-view name="listTwo"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index10',
    methods: {
        //跳转页面 path
        btnClick_1 (val) {
            this.$router.push({
                path: `/index10/${val}/listOne`
            });
        },

        //页面跳转 name
        btnClick_2 (val) {
            this.$router.push({
                name: 'listTwo'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.index10_top
    width: 100%
    height: 100px
    background-color: pink
    margin-bottom: 10px
.index10_bottom
    display: flex
    flex-direction: row
    width: 100%
    height: 200px
    .index10_bottom_l
        flex-grow: 1
        margin-right: 5px
        background-color: yellow
    .index10_bottom_r
        flex-grow: 1
        margin-left: 5px
        background-color: yellow
</style>
