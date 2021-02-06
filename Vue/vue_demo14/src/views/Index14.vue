<template>
    <div class="index14">
        <List v-model="form" @set-data="getData" @set-input="getInput"></List>
    </div>
</template>

<script>
import List from '../components/List2.vue';
export default {
    name: 'index14',
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
        },
        getInput (data) {
            //父组件接收子组件的传值
            console.log(data);
        }
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
