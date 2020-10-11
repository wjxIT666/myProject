<template>
    <div class="index2">
        <!-- 引入组件 -->
        <List :listArr="listArr" @set-data="getData">
            <slot slot="content">
                <span>小姐姐真不错啊~</span>
            </slot>
        </List>
    </div>
</template>

<script>
import List from '../components/list.vue'
export default {
    name: 'index2',
    data () {
        return {
            listArr: [
                {
                    idno: '0001',
                    name: '北大',
                    desc: '北京大学吗妹子好啊~'
                },
                {
                    idno: '0002',
                    name: '清华',
                    desc: '清华大学的妹子也不错啊~'
                }
            ]
        }
    },
    methods: {
        getData (data) {
            //父组件接收子组件的传值
            console.log(data);
        }
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
