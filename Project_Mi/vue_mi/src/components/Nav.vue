<template>
    <div class="navPage">
        <!-- 导航内容 -->
        <div class="navPage_body">
            <!-- 左侧导航 -->
            <div class="navPage_body_left" v-for="(item,index) in navLeft" :key="index">
                <span class="navPage_body_left_text">{{item}}</span>
            </div>
            <!-- 右侧导航 -->
            <div class="navPage_body_right" v-for="item in navRight" :key="item">
                <span class="navPage_body__right_text" @click="exit">{{item}}</span>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navPage',
    data () {
        return {
            navLeft: ['小米商城', 'MIUI', 'IoT', '云服务', '天星科技', '有品', '小爱开放平台', '企业团购', '资质证照', '协议规则'],
            navRight: ['退出']
        }
    },
    methods: {
        //退出登录
        exit () {
            //清除token
            sessionStorage.removeItem('token');
            //退回到登录页
            this.$router.push({
                path: '/login'
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.navPage
    width: 100%
    height: 40px
    background-color: #333
    font-size: 0
    .navPage_body
        display: flex
        width: 1130px
        height: 100%
        margin: 0 auto
        line-height: 40px
        font-size: 12px
        color: #b0b0b0
        .navPage_body_left
            flex: 1
            text-align: center
            .navPage_body_left_text
                cursor: pointer
                &:hover
                    color: #fff
        .navPage_body_right
            flex: 1
            text-align: center
            .navPage_body__right_text
                cursor: pointer
                &:hover
                    color: #fff
</style>
