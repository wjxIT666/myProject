<template>
    <div class="Carousel">
        <!-- 轮播图内容 -->
        <div class="Carousel_body" :style="{'width': Carousel.width, 'height': Carousel.height}">
            <el-carousel :interval="Carousel.interval" :height="Carousel.height">
                <el-carousel-item v-for="item in Carousel.img" :key="item.idno">
                    <img :src="item.imgUrl"/>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        Carousel: {
            default: Object
        }
    }
}
</script>

<style lang="stylus" scoped>
.Carousel
    font-size: 0
    .Carousel_body
        margin: 0 auto
</style>
