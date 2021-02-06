<template>
    <div class="index2">
        <div class="index2_top">

        </div>
        <div class="index2_bottom">
            <div class="index2_bottom_l">
                <div @click="btn_Click1">列表1</div>
                <div @click="btn_Click2">列表2</div>
            </div>
            <div class="index2_bottom_r">
                <router-view></router-view>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index2',
    methods: {
        btn_Click1 () {
            this.$router.push({
                path: '/index3'
            });
        },

        btn_Click2 () {
            this.$router.push({
                path: '/index4'
            });
        }
    },
    watch: {
        $route: {
            deep: true,
            immediate: true,
            handler: function (args) {
                console.log(args);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.index2_top
    width: 100%
    height: 100px
    background-color: pink 
    margin-bottom: 5px
.index2_bottom
    width: 100%
    height: 200px
    display: flex
    .index2_bottom_l
        flex: 1
        margin-right: 5px
        background-color: yellow 
    .index2_bottom_r
        flex: 1
        margin-left: 5px
        background-color: yellow
</style>
