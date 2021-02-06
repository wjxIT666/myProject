<template>
    <div class="index14">
        <div class="list" v-for="(item, index) in listArr" :key="index" @click="listCommit(item.idno)">
            <p>{{item.name}}</p>
            <p>{{item.desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index14',
    data () {
        return {
            listArr: [
                {
                    idno: '0001',
                    name: '北大',
                    desc: '北京大学'
                },
                {
                    idno: '0002',
                    name: '清华',
                    desc: '清华大学'
                }
            ]
        }
    },
    methods: {
        listCommit (data) {
            this.$router.push({
                name: 'detail',
                params: { params: data }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.list
    width: 100%
    padding: 4%
    margin-bottom: 20px
    box-sizing: border-box
    background-color: pink
</style>
