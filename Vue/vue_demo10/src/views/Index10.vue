<template>
    <div class="index10">
        <h5>Vuex State</h5>
        <div>
            <p>用户：{{username}}</p>
            <p>数量：{{count}}</p>
            <p><button @click="btnClick(10)">点击增加数量</button></p>
        </div>

        <h5>Vuex Getters</h5>
        <div>
            <p>
                Getters：{{msgFun}}
            </p>
        </div>

        <h5>Vuex Actions</h5>
        <div>
            <p>{{duanzi}}</p>
            <p><button @click="getDZ">获取段子</button></p>
            <p><button @click="getDZ">获取段子</button></p>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'index10',
    methods: {
        btnClick (data) {
            //向vuex传输数据
            this.$store.commit('addCount', data);
        },
        getDZ () {
            //向vuex发送请求
            this.$store.dispatch('getDZ');
        },
        ...mapActions({
            getDZ: 'getDZ'
        })
    },
    computed: {
        ...mapState({
            username: 'username',
            count: 'count',
            duanzi: 'duanzi'
        }),
        ...mapGetters({
            msgFun: 'msgFun'
        })
    }
}
</script>

<style lang="stylus" scoped>

</style>
