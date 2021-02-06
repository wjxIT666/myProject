<template>
    <div class="index14">
        <div v-hello="myBackground">1111</div>
        <button @click="changeBackground">改变背景色</button>
    </div>
</template>

<script>
import { Name, Sex } from '../utils/utils.js';
export default {
    name: 'index14',
    data () {
        return {
            myBackground: 'pink'
        }
    },
    directives: {
        hello: {
            //初始化状态
            inserted (el, bind) {
                console.log(el);
                console.log(bind);
                //设置背景色
                el.style.backgroundColor = bind.value;
            },
            //状态更新时触发
            update (el, bind) {
                //设置背景色
                el.style.backgroundColor = bind.value;
            }
        }
    },
    methods: {
        changeBackground () {
            this.myBackground = 'red';
        }
    },
    mounted () {
        let nameRule = Name();
        console.log(nameRule);
        let sexRule = Sex();
        console.log(sexRule);
    }
}
</script>

<style lang="stylus" scoped>

</style>
