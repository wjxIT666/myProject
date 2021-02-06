<template>
    <div class="index13">
        <!-- 单元素过渡 -->
        <div>
            <button @click="btnClick1">按钮</button>
            <transition name="fade">
                <div class="box" v-if="isShow1">

                </div>
            </transition>
        </div>

        <!-- 多元素过渡 -->
        <div>
            <button @click="btnClick2">按钮</button>
            <transition name="slide" mode="in-out">
                <p v-if="isShow2" key="1">111111</p>
                <p v-else key="2">222222</p>
            </transition>
        </div>

        <!-- 动态元素过渡 -->
        <div>
            <button @click="currentComponent = 'Header'">头部组件</button>
            <button @click="currentComponent = 'Footer'">底部组件</button>
            <transition name="slide" mode="out-in">
                <keep-alive>
                    <component :is="currentComponent"></component>
                </keep-alive>
            </transition>
        </div>

        <!-- 多列表过渡 -->
        <div>
            <input type="text" v-model="schoolName" />
            <button @click="addClick">按钮</button>
            <transition-group name="slide" tag="div" mode="out-in">
                <div v-for="item in listArr" :key="item.idno">
                    <h5>{{item.name}}</h5>
                </div>
            </transition-group>
        </div>

        <!-- filters过滤器 -->
        <div>
            <input type="text" :value="username | usernameFilter" />
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    name: 'index13',
    data () {
        return {
            isShow1: false,
            isShow2: false,
            currentComponent: 'Header',
            listArr: [
                {
                    idno: '0001',
                    name: '北大'
                },
                {
                    idno: '0002',
                    name: '清华'
                }
            ],
            schoolName: '',
            username: '王  建星  '
        }
    },
    methods: {
        btnClick1 () {
            this.isShow1 = !this.isShow1;
        },
        btnClick2 () {
            this.isShow2 = !this.isShow2;
        },
        addClick () {
            this.listArr.push({
                idno: '0003',
                name: this.schoolName 
            });
        }
    },
    updated () {
        console.log('状态更新时触发');
    },
    filters: {
        usernameFilter (data) {
            return data.replace(/\s+/g, '');
        }
    },
    components: { Header, Footer }
}
</script>

<style lang="stylus" scoped>
.index13
    overflow: hidden
    .box
        width: 100px
        height: 100px
        background-color: pink
        &.fade-enter-active, &.fade-leave-active
            transition: all 2s
        /* 结果 */
        &.fade-enter, &.fade-leave-to
            opacity: 0
        /* 开始 */
        &.fade-enter-to, &.fade-leave
            opacity: 1 
    .slide-enter-active, .slide-leave-active
        transition: all 2s
    .slide-enter, .slide-leave-to
        transform: translate(100px, 0)
    .slide-enter-to, .slide-leave
        transform: translate(0, 0)
</style>
