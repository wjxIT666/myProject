<template>
    <div class="index5">
        <div id="demo1" style="width: 600px; height: 600px;"></div>
        <button @click="btnClick">更改数据</button>
    </div>
</template>

<script>
import Echarts from 'echarts';
export default {
    name: 'index5',
    data () {
        return {
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    },
    mounted () {
        this.$nextTick( () => {
            //初始化echarts
            let myEcharts = Echarts.init(document.querySelector('#demo1'));
            //绘制
            myEcharts.setOption(this.option);
        } );
    },
    methods: {
        btnClick () {
            this.option.series[0].data = [10, 10, 20, 20, 30, 74];
        }
    },
    watch: {
        option: {
            deep: true,
            handler: function () {
                console.log("进来了吗？");
                //初始化echarts
                let myEcharts = Echarts.init(document.querySelector('#demo1'));
                console.log(myEcharts);
                //绘制
                myEcharts.setOption(this.option);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
