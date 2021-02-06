<template>
    <div class="input">
        <!-- Inp组件 -->
        <div v-for="(item, index) in form" :key="index">
            <!-- 登录 -->
            <div v-if="form.type === 'login'">
                <!-- 用户名 -->
                <el-input class="input_child" v-model="item[0].val" :placeholder="item[0].placeholder" v-if="item[0].type === 'user'"></el-input>
                <!-- 密码 -->
                <el-input class="input_child" v-model="item[1].val" :placeholder="item[1].placeholder" :show-password="item[1].password" v-if="item[1].type === 'password'"></el-input>    
            </div>

            <!-- 注册 -->
            <div v-if="form.type === 'register'">
                <!-- 用户名 -->
                <el-input class="input_child" v-model="item[0].val" :placeholder="item[0].placeholder" v-if="item[0].type === 'user'"></el-input>
                <!-- 手机号 -->
                <el-input class="input_child" v-model="item[1].val" :placeholder="item[1].placeholder" v-if="item[1].type === 'tel'"></el-input>    
                <!-- 密码 -->
                <el-input class="input_child" v-model="item[2].val" :placeholder="item[2].placeholder" :show-password="item[2].password" v-if="item[2].type === 'password'"></el-input> 
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'inp',
    props: {
        form: {
            default: Object
        }
    },
    data () {
        return {
            input: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.input
    font-size: 0
    .input_child
        font-size: 14px
        margin-bottom: 20px
        &:last-child
            margin-bottom: 0
</style>
