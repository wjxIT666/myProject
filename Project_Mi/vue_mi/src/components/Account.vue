<template>
    <div class="account">
        <div class="account_main">
            <!-- 表单顶部 -->
            <div class="account_main_top">
                <Inp :form="form"></Inp>
            </div>
            <!-- 表单底部 -->
            <div class="account_main_bottom">
                <Btn :btn="btn" @set-commit="getLogin"></Btn>
            </div>
        </div>
    </div>
</template>

<script>
import Inp from './Input.vue';
import Btn from './Button.vue';
export default {
    name: 'account',
    data () {
        return {
            form: {
                type: 'login',
                inp: [
                    {
                        type: 'user',
                        placeholder: 'Mi账号',
                        val: ''
                    },
                    {
                        type: 'password',
                        password: true,
                        placeholder: '密码',
                        val: ''
                    }
                ]
            },
            btn: {
                flag: 'login',
                type: 'warning',
                plain: true,
                text: '登录'
            }
        }
    },
    methods: {
        //校验
        checkInfo () {
            //用户名
            let username = this.$utils.checkName(this.form.inp[0].val);
            if (username === false) {
                return false;
            };

            //密码
            let password = this.$utils.checkPassword(this.form.inp[1].val);
            if (password === false) {
                return false;
            };

            return true;
        },

        //登录
        async getLogin () {
            if (this.checkInfo()) {
                //调用登录接口
                let data = {
                    username: this.form.inp[0].val,
                    password: this.form.inp[1].val
                };
                let loginResult = await this.$api.loginRouter(data);
                loginResult = loginResult.data;
                if (loginResult.success === false) {
                    this.$message.error({
                        message: `${loginResult.msg}`,
                        duration: 2000
                    });
                    return false;
                } else if (loginResult.success === true) {
                    //获取token
                    let res = await this.$api.getToken();
                    res = res.data;
                    let token = res.token;
                    //将token存储到vuex中
                    this.$store.commit('setToken', token);

                    this.$message.success({
                        message: `${loginResult.msg}`,
                        duration: 2000
                    });
                    //跳转首页
                    this.$router.push({ path: '/index' });
                };
            };
        }
    },
    components: { Inp, Btn }
}
</script>

<style lang="stylus" scoped>
.account
    font-size: 0
    .account_main
        width: 348px
        height: 440px
        margin: 0 auto
</style>
