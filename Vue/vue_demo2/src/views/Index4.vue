<template>
    <div class="index4">
        <List :listArray="listArray" @set-data="getData">
            <slot slot="content">
                <span>小姐姐好漂亮哦~</span>
            </slot>
        </List>
    </div>
</template>

<script>
import List from '../components/list.vue';
export default {
    name: 'index4',
    data () {
        return {
            listArray: [
                {
                    id: '0001',
                    name: '清华大学',
                    desc: '清华大学的妹子很漂亮哦~'
                },
                {
                    id: '0002',
                    name: '北京大学',
                    desc: '北京大学的妹子也不差哦~'
                }
            ]
        }
    },
    methods: {
        //父组件接收子组件传值
        getData (data) {
            console.log(data);
        }
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
