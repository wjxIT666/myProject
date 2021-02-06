<template>
    <div class="index2">
        <div class="index2_bottom">
            <div class="index2_bottom_l">
                <p @click="btn_Click1">列表一</p>
                <p @click="btn_Click2">列表二</p>
            </div>
            <div class="index2_bottom_r">
                <router-view name="listOne"></router-view>
                <router-view name="listTwo"></router-view>
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
                path: '/index2/listOne'
            });
        },

        btn_Click2 () {
            this.$router.push({
                path: '/index2/listTwo'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.index2_bottom
    display: flex
    height: 200px
    width: 100%
    .index2_bottom_l
        flex: 1
        margin-right: 5px
        background-color: yellow
    .index2_bottom_r
        flex: 1
        margin-left: 5px
        background-color: pink
</style>
