<template>
    <div class="list2">
        <div v-for="item in listArr" :key="item.idno">
            <h5>{{item.name}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list2',
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
    }
}
</script>

<style lang="stylus" scoped>

</style>
