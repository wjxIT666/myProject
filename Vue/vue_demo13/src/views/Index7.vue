<template>
    <div class="index7">
        <h5>Vuex Mutations 常量表示法</h5>
        <h5>{{count}}</h5>
        <button @click="add(10)">增加</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'index7',
    computed: {
        ...mapState({
            count: 'count'
        })
    },
    methods: {
        add (data) {
            //向vuex发送状态
            this.$store.commit('ADD_COUNT', data);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
