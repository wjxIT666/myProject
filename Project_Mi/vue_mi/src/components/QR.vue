<template>
    <div class="qr">
        <div class="qr_main">
            <!-- 表单顶部 -->
            <div class="qr_main_top">
                <Inp :form="form"></Inp>
            </div>
            <!-- 表单底部 -->
            <div class="qr_main_bottom">
                <Btn :btn="btn" @set-commit="getRegister"></Btn>
            </div>
        </div>
    </div>
</template>

<script>
import Inp from './Input.vue';
import Btn from './Button.vue';
export default {
    name: 'qr',
    data () {
        return {
            form: {
                type: 'register',
                inp: [
                    {
                        type: 'user',
                        placeholder: 'Mi账号',
                        val: ''
                    },
                    {
                        type: 'tel',
                        placeholder: '手机号',
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
                flag: 'register',
                type: 'primary',
                plain: true,
                text: '注册'
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

            //手机号校验

            //密码
            let password = this.$utils.checkPassword(this.form.inp[2].val);
            if (password === false) {
                return false;
            };

            return true;
        },

        //注册
        async getRegister (data) {
            if (this.checkInfo()) {
                //请求注册接口
                let data = {
                    username: this.form.inp[0].val,
                    tel: this.form.inp[1].val,
                    password: this.form.inp[2].val
                };
                let registerRes = await this.$api.registerRouter(data);
                registerRes = registerRes.data;
                if (registerRes.success === false) {
                    this.$message.error({
                        message: `${registerRes.msg}`,
                        duration: 2000
                    });
                    return false;
                } else if (registerRes.success === true) {
                     this.$message.success({
                        message: `${registerRes.msg}`,
                        duration: 2000
                    });
                }
            }
        }
    },
    components: { Inp, Btn }
}
</script>

<style lang="stylus" scoped>
.qr
    font-size: 0
    .qr_main
        width: 348px
        height: 440px
        margin: 0 auto
</style>
