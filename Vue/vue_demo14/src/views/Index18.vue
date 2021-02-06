<template>
    <div class="index18">
        <div class="box" v-for="item in listArr" :key="item.idno" @click="boxClick(item.idno)">
            <h5>{{item.name}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index18',
    data () {
        return {
            listArr: [
                {
                    idno: '0001',
                    name: '清华'
                },
                {
                    idno: '0002',
                    name: '北大'
                }
            ]
        }
    },
    methods: {
        boxClick (data) {
            this.$router.push({
                name: 'detail',
                params: { id: data }
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    width: 100%
    padding: 5% 0
    background-color: pink
    margin-bottom: 10px
</style>
