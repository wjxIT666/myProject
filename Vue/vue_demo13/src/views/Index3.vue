<template>
    <div class="index3">
        <List ref="myList">
            <button>按钮</button>
        </List>
    </div>
</template>

<script>
import List from '../components/List.vue';
export default {
    name: 'index3',
    data () {
        return {

        }
    },
    mounted () {
        //父组件拿到子组件的值
        console.log(this.$refs.myList);
        //父组件给子组件传值
        this.$refs.myList.listArr.push({idno: '0003', name: '西南政法'});
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
