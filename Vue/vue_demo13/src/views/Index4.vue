<template>
    <div class="index4">
        <!-- transition 单元素过渡 -->
        <button @click="btnClick1">按钮</button>
        <transition name="fade">
            <div class="box" v-if="isShow1">

            </div>
        </transition>

        <!-- transition 多元素过渡 -->
        <button @click="btnClick2">按钮</button>
        <transition name="slide">
            <p v-if="isShow2" key="1">1111111111</p>
            <p v-else key="2">2222222222</p>
        </transition>

        <!-- transition 动态组件过渡 -->
        <button @click="currentComponent = 'Header'">头部组件</button>
        <button @click="currentComponent = 'Footer'">底部组件</button>
        <transition name="slide" mode="in-out">
            <!-- 缓存数据 -->
            <keep-alive>
                <component :is="currentComponent"></component>
            </keep-alive>
        </transition>

        <!-- transition 多组件过渡 -->
        <div>
            <input type="text" v-model="username" />
            <button @click="add">添加数据</button>
        </div>
        <transition-group name="slide" tag="div" mode="out-in">
            <div v-for="item in listArr" :key="item">
                <h5>{{item}}</h5>
            </div>
        </transition-group>

        <!-- filters过滤器 -->
        <div>
            <input type="text" :value="name | myName">
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'index4',
    data () {
        return {
            isShow1: false,
            isShow2: false,
            currentComponent: 'Header',
            username: '',
            listArr: [],
            name: ' 王  建星 '
        }
    },
    methods: {
        btnClick1 () {
            this.isShow1 = !this.isShow1;
        },
        btnClick2 () {
            this.isShow2 = !this.isShow2;
        },
        add () {
            this.listArr.push(this.username);
        }
    },
    components: { Header, Footer },
    updated () {
        console.log('状态更新触发了：' + this.isShow1);
    },
    destroyed () {
        console.log('组件销毁才会触发');
    },
    filters: {
        myName (data) {
            return data.replace(/\s*/g, '');
        }
    }
}
</script>

<style lang="stylus" scoped>
.index4
    overflow: hidden
    .box
        width: 100px
        height: 100px
        background-color: pink
        &.fade-enter-active, &.fade-leave-active
            transition: all 2s
            /* 结束的状态 */
        &.fade-enter, &.fade-leave-to
            opacity: 0
            /* 开始的状态 */
        &.fade-enter-to, &.fade-leave
            opacity: 1
    .slide-enter-active, .slide-leave-active
        transition: all 2s
    .slide-enter, .slide-leave-to
        transform: translate(100px, 0)
    .slide-enter-to, .slide-leave
        transform: translate(0, 0)
</style>
