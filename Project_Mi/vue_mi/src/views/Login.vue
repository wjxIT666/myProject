<template>
    <div class="login">
        <!-- 头部 -->
        <div class="login_top">
            <!-- 图片占位 -->
            <div class="block">
                <el-image class="login_top_img" :src="src" :preview-src-list="srcList"></el-image>
            </div>
        </div>
        <!-- 内容 -->
        <div class="login_content">
            <div class="login_content_main">
                <div class="login_content_main_form">
                    <!-- 表单头部 -->
                    <div class="login_content_main_form_top">
                        <div class="login_content_main_form_top_nav">
                            <div class="login_content_main_form_top_nav_l">
                                <span class="login_content_main_form_top_nav_l_span" :class="{'active': tab == 0}" @click="tabChange(0)">账号登录</span>
                            </div>
                            <div class="login_content_main_form_top_nav_r">
                                <span class="login_content_main_form_top_nav_r_span" :class="{'active': tab == 1}" @click="tabChange(1)">立即注册</span>
                            </div>
                        </div>
                    </div>
                    <!-- 表单底部 -->
                    <div class="login_content_main_form_bottom">
                        <!-- 动态组件 -->
                        <component :is="currentComponent"></component>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class="login_bottom">
            <!-- 标签 -->
            <div class="login_bottom_tag" v-for="(item, index) in tagArr" :key="index">
                <a class="login_bottom_tag_a" :class="{'deleteBorder': item == '隐私政策'}" href="#">{{item}}</a>
            </div>
            <!-- 文字 -->
            <div class="login_bottom_text">
                小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
            </div>
        </div>
    </div>
</template>

<script>
const Account = () => import('../components/Account.vue');
const QR = () => import('../components/QR.vue');
export default {
    name: 'login',
    data () {
        return {
            src: require('../assets/top_logo.jpg'),
            srcList: [
                require('../assets/top_logo.jpg')
            ],
            tab: 0,
            currentComponent: 'Account',
            tagArr: ['简体', '繁体', 'English', '常见问题', '隐私政策']
        }
    },
    methods: {
        //Tab栏切换
        tabChange (val) {
            if (val === 0) {
                this.currentComponent = 'Account';
                this.tab = val;
            } else if (val === 1) {
                this.currentComponent = 'QR';
                this.tab = val;
            };
        }
    },
    components: { Account, QR }
}
</script>

<style lang="stylus" scoped>
.login
    font-size: 0
    .login_top
        width: 1130px
        height: 98px
        margin: 0 auto
        font-size: 20px
        line-height: 98px
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        .login_top_img
            width: 102px
            height: 56px
            margin: 21px 0
    .login_content
        width: 100%
        height: 588px
        background: url('../assets/login_logo.jpg') no-repeat center center 
        .login_content_main
            width: 1130px
            height: 100%
            margin: 0 auto
            overflow: hidden
            .login_content_main_form
                width: 410px
                height: 522px
                margin: 33px 0
                float: right
                background-color: #fff
                .login_content_main_form_top
                    width: 100%
                    height: 82px
                    overflow: hidden
                    .login_content_main_form_top_nav
                        display: flex
                        width: 100%
                        height: 27px
                        line-height: 27px
                        margin: 27.5px 0
                        .login_content_main_form_top_nav_l
                            flex: 1
                            font-size: 20px
                            text-align: center
                            .login_content_main_form_top_nav_l_span
                                cursor: pointer
                                font-weight: 700
                                &:hover
                                    color: #f56600
                        .login_content_main_form_top_nav_r
                            flex: 1
                            font-size: 20px
                            text-align: center
                            .login_content_main_form_top_nav_r_span
                                cursor: pointer
                                font-weight: 700
                                &:hover
                                    color: #f56600
                        .active
                            color: #f56600
    .login_bottom
        width: 1130px
        height: 180px
        margin: 0 auto
        padding-top: 117px
        box-sizing: border-box
        text-align: center
        .login_bottom_tag
            display: inline-block
            font-size: 12px
            color: #757575
            .login_bottom_tag_a
                display: inline-block
                width: 76px
                height: 14px
                line-height: 14px
                border-right: 1px solid #757575
                &:hover
                    color: #333
            .deleteBorder
                border-right: 0
        .login_bottom_text
            width: 100%
            height: 44px
            line-height: 44px
            font-size: 12px
            color: #757575

</style>
