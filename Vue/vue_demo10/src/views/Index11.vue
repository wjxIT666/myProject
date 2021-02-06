<template>
    <div class="index11">
        <List v-model="form" @set-data="getData"></List>
    </div>
</template>

<script>
import List from '../components/list2.vue';
export default {
    name: 'index11',
    data () {
        return {
            form: {
                username: '王建星'
            }
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
