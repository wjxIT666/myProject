<template>
    <div class="index13">
        <!-- Vuex State -->
        <h5>Vuex State</h5>
        <div>
            <div>
                用户名：{{username}}
            </div>
            <div>
                数量：{{count}}
            </div>
            <div>
                <button @click="btnClick(10)">增加数量</button>
            </div>
        </div>

        <!-- Vuex Getters -->
        <h5>Vuex Getters</h5>
        <div>
            Vuex Getters：{{msgFun}}
        </div>

        <!-- Vuex Actions -->
        <h5>Vuex Actions</h5>
        <div>
            <div>
                {{duanzi}}
            </div>
            <div>
                <button @click="getDuanzi">获取段子</button>
            </div>
            <div>
                <button @click="getDuanzi">获取段子</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'index13',
    computed: {
        ...mapState({
            username: 'username',
            count: 'count',
            duanzi: 'duanzi'
        }),
        ...mapGetters({
            msgFun: 'msgFun'
        })
    },
    methods: {
        btnClick (data) {
            //向vuex发送同步请求
            this.$store.commit('addCount', data);
        },
        getDuanzi () {
            //向vuex发送异步请求
            this.$store.dispatch('getDuanzi');
        },
        ...mapActions({
            getDuanzi: 'getDuanzi'
        })
    }
}
</script>

<style lang="stylus" scoped>

</style>
