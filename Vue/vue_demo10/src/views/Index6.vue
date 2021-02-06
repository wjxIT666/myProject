<template>
    <div class="index6">
        <List :listArr="listArr" @set-data="getData">
            <slot slot="content">
                小姐姐很好看啊~
            </slot>
        </List>
    </div>
</template>

<script>
import List from '../components/list.vue';
export default {
    name: 'index6',
    data () {
        return {
            listArr: [
                {
                    idno: '00001',
                    name: '北大',
                    desc: '北京大学'
                },
                {
                    idno: '00002',
                    name: '清华',
                    desc: '清华大学'
                }
            ]
        }
    },
    methods: {
        //父组件接收子组件的传值
        getData (data) {
            console.log(data);
        }
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
