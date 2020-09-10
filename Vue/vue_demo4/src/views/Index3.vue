<template>
    <div class="index3">
        <div v-for="item in listArray" :key="item.idno">
            <div @click="btnClick(item.idno)">
                <span>{{item.name}}</span>
            </div>
            <div>
                <span>{{item.desc}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index3',
    data() {
        return {
            listArray: [
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
        btnClick (data) {
            this.$router.push({
                name: 'detail',
                params: {data: data}
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
