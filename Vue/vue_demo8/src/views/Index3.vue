<template>
    <div class="index3">
        <div v-for="item in listArr" :key="item.idno" @click="btnClick(item.idno)">
            <h5>{{item.name}}</h5>
            <p>{{item.desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index3',
    data () {
        return {
            listArr: [
                {
                    idno: '00001',
                    name: '标题',
                    desc: '内容'
                },
                {
                    idno: '00002',
                    name: '标题',
                    desc: '内容'
                }
            ]
        }
    },
    methods: {
        btnClick (data) {
            this.$router.push({
                path: `/detail/${data}`,
                query: { idno: data }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
