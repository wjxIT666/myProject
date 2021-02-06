<template>
    <div class="index11">
        <List ref="myList"></List>
    </div>
</template>

<script>
import List from '../components/List2.vue';
export default {
    name: 'index11',
    mounted () {
        //父组件给子组件传值
        console.log(this.$refs.myList);
        this.$refs.myList.listArr.push({idno: '0003', name: '西北政法'});
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
