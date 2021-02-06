<template>
    <div class="index">
        <!-- 导航 -->
        <NavPage></NavPage>
        <!-- 搜索 -->
        <Search></Search>
        <!-- 轮播图 -->
        <Carousel :Carousel="Carousel"></Carousel>
    </div>
</template>

<script>
import NavPage from '../components/Nav.vue';
import Search from '../components/Search.vue';
import Carousel from '../components/Carousel.vue';
export default {
    name: 'index',
    data () {
        return {
            Carousel: {
                width: '1130px',
                height: '460px',
                interval: 3000,
                img: [
                    {
                        idno: '0001',
                        imgUrl: require('../assets/Carousel_1.jpg')
                    },
                    {
                        idno: '0002',
                        imgUrl: require('../assets/Carousel_2.jpg')
                    },
                    {
                        idno: '0003',
                        imgUrl: require('../assets/Carousel_3.jpg')
                    },
                    {
                        idno: '0004',
                        imgUrl: require('../assets/Carousel_4.jpg')
                    }
                ]
            }
        }
    },
    components: { NavPage, Search, Carousel }
}
</script>

<style lang="stylus" scoped>
.index
    font-size: 0
</style>
