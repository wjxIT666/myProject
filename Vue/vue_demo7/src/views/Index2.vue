<template>
    <div class="index2">
        <List :listArr="listArr" @set-data="getData">
            <slot slot="content">小姐姐很好看啊！</slot>
        </List>
    </div>
</template>

<script>
import List from '../components/list.vue';
export default {
    name: 'index2',
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
            console.log(data);
        }
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
