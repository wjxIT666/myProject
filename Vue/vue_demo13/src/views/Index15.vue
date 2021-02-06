<template>
    <div class="index15">
        <div>数量：{{add}}</div>
        <div><button @click="addCount(10)">增加数量</button></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'index15',
    computed: {
        ...mapState({
            add: 'add'
        })
    },
    methods: {
        addCount (data) {
            //向vuex发送状态
            this.$store.commit('ADD_COUNT', data);            
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
