<template>
    <div class="index7">
        <List :listArr="listArr" @set-data="getData">
            <!-- 具名插槽 -->
            <slot slot="content"></slot>
        </List>
    </div>
</template>

<script>
import List from '../components/List.vue';
export default {
    name: 'index7',
    data () {
        return {
            listArr: [
                {
                    idno: '0001',
                    name: '北大',
                    desc: '北京大学'
                },
                {
                    idno: '0002',
                    name: '清华',
                    desc: '清华大学'
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
