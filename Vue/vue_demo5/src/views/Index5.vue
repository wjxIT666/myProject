<template>
    <div class="index5">
        <!-- Vuex state -->
        <div>
            用户名：{{username}}
            数量：{{count}}
            <button @click="btnClick(10)">按钮</button>
        </div>
        <!-- Vuex getters -->
        <div>
            Getters: {{msgFun}}
        </div>
        <!-- Vuex actions -->
        <div>
            <button @click="getDZ">获取段子</button>
            <div>
                {{duanzi}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'index5',
    data () {
        return {
            
        }
    },
    methods: {
        btnClick (data) {
            //向vuex发送数据
            this.$store.commit('addCount', data);
        },
        getDZ () {
            //向vuex发送请求
            this.$store.dispatch('getDZ');
        }
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
