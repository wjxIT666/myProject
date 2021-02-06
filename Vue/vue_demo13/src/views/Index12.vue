<template>
    <div class="index12">
        <List :listArr="listArr">
            <!-- 插槽 -->
            <span>小姐姐很好看哦</span>
        </List>
    </div>
</template>

<script>
import List from '../components/List3.vue';
export default {
    name: 'index12',
    data () {
        return {
            listArr: [
                {
                    idno: '0001',
                    name: '北大'
                },
                {
                    idno: '0002',
                    name: '清华'
                }
            ]
        }
    },
    components: { List }
}
</script>

<style lang="stylus" scoped>

</style>
