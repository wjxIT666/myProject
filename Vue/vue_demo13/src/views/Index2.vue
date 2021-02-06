<template>
    <div class="index2">
        <!-- .self 只在当前节点触发 -->
        <div class="box" @click.self="boxClick">
            <!-- .stop 防止事件冒泡 -->
            <button @click.stop="btnClick1">按钮</button>
            <!-- .once 只执行一次 -->
            <button @click.once="btnClick2">按钮</button>
            <!-- .prevent 阻止默认行为 -->
            <a href="http://www.baidu.com" @click.prevent="btnClick3">跳转</a>
            <!-- 按键修饰符 @keyup -->
            <input type="text" v-model="username" @keyup.enter="keyUp" />
            <!-- 表单修饰符 -->
            <!-- .lazy 离开焦点时触发 -->
            <input type="text" v-model.lazy="password" />
            <!-- .trim 去除左右空格 -->
            <input type="text" v-model.trim="tel" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'index2',
    data () {
        return {
            username: '',
            password: '',
            tel: ''
        }
    },
    methods: {
        boxClick () {
            alert('盒子');
        },
        btnClick1 () {
            alert('按钮');
        },
        btnClick2 () {
            alert('只执行一次');
        },
        btnClick3 () {
            console.log('阻止默认行为');
        },
        keyUp () {
            console.log('回车键弹起，触发事件');
        }
    },
    watch: {
        password () {
            console.log('离开焦点时触发：' + this.password);
        },
        tel () {
            console.log(`|${this.tel}|`);
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    width: 100px
    height: 100px
    background-color: pink
</style>
